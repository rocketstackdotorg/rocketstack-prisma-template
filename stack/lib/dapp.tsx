import React from 'react'
import {
  apiProvider,
  configureChains,
  connectorsForWallets,
  darkTheme,
  RainbowKitProvider,
  wallet
} from '@rainbow-me/rainbowkit'
import { chain, createClient, WagmiProvider } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css'

import { ModalProvider } from '../components/Theme'

const { chains, provider } = configureChains(
  // Our app network is rinkeby, but deployments can be made to mumbai.
  [
    chain.rinkeby,
    ...(process.env.NEXT_PUBLIC_MUMBAI_MANAGER != null
      ? [chain.polygonMumbai]
      : []
    ),
    ...(process.env.NEXT_PUBLIC_LOCALHOST_MANAGER != null
      ? [chain.localhost]
      : []
    )
  ], [
    apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_KEY),
    apiProvider.fallback()
  ]
)

export const mainnet = configureChains(
  // Mainnet can be used for real rates and ens resolution.
  [chain.mainnet],
  [
    apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_KEY),
    apiProvider.fallback()
  ]
)

const needsInjectedWalletFallback =
  typeof window !== 'undefined' &&
  window.ethereum != null && (
    (
      window.ethereum.isMetaMask == null &&
      window.ethereum.isCoinbaseWallet !== true
    ) ||
    window.ethereum.isBraveWallet === true
  )

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      wallet.rainbow({ chains }),
      wallet.metaMask({ chains }),
      wallet.trust({ chains }),
      wallet.walletConnect({ chains })
    ]
  }, {
    groupName: 'Other',
    wallets: [
      wallet.ledger({ chains }),
      wallet.coinbase({ appName: 'Organigram.io', chains }),
      ...(needsInjectedWalletFallback
        ? [wallet.injected({ chains })]
        : [])
    ]
  }
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export const DAppProviders: React.FC = props => {
  return (
      <WagmiProvider client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme()}
          appInfo={{
            appName: process.env.NEXT_PUBLIC_COMPANY_NAME,
            learnMoreUrl: process.env.NEXT_PUBLIC_HOST_URL
          }}
          showRecentTransactions
        >
          <ModalProvider>
            <>{props.children}</>
          </ModalProvider>
        </RainbowKitProvider>
      </WagmiProvider>
  )
}

export function withDAppProvider (Component: React.FC<unknown>): React.FC {
  return function DAppProviderWrapper (props) {
    return (
      <DAppProviders>
        <Component {...props} />
      </DAppProviders>
    )
  }
}
