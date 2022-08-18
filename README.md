# Rocket Stack - Starter project

🚀🔋 Rocket Stack: The full stack web3 framework that's ready for production. Built with nextjs and simplicity in mind.

Out-of-the-box, this stack includes the following, pre-configured:

- 🖥  A fast, responsive front-end with [React](https://reactjs.org) & [Mui v5](https://mui.com/)
- 🔌  REST APIs, server-side rendering & static optimization with [Next.js](https://nextjs.org)
- 📡  Fully-typed database schema, seeding, versioning & migrations with [Prisma](https://www.primsa.io/) & [PlanetScale](https://planetscale.com/)
- 🔐  Client and server-side authentication with [NextAuth](https://nextauth.org)
- ⚡️  Serverless functions & continuous deployment with [Vercel](https://vercel.com/)
- 🌈  Connection with multiple web3 wallets & multiple blockchain networks with [Rainbow-kit](https://rainbowkit.com/)
- 🪝  Custom hooks for state management & data caching with [Recoil](https://recoiljs.org/)
- 💳  Fiat & crypto payment API with [Stripe](https://stripe.com)
- 💌  Email API with [Nodemailer](https://nodemailer.com/) & [Sendgrid](https://sendgrid.com)
- 🇺🇳  Translation & internationalization with [i18next](https://www.i18next.com/) & [Deepl](https://deepl.com/)
- ✅  End-to-end testing & CI with [Synpress](https://github.com/Synthetixio/synpress) & [Github actions](https://github.com/features/actions)
- 🧾  Form validation with [react-cool-form](https://react-cool-form.netlify.app/)
- 📈  Analytics with [Matomo](https://matomo.org/)
- 🤓  [Types](https://www.typescriptlang.org) & [standard.js](https://standardjs.com) coding style enforced with [ESLint](https://eslint.org/) & [Husky](https://github.com/typicode/husky) hooks 
- 📚  Interactive documentation with [Code Hike](https://codehike.org) & [MDX](https://mdxjs.com/)
- 🚢  Shipping & shipping rates with [Sendcloud](https://sendcloud.com/)
- 📊  Soon™️: GraphQL endpoint & blockchain data with [Apollo](https://apollographql.com) & [TheGraph](https://thegraph.com/)
- 👤  Soon™️: KYC, KYB & ID verification with [Synaps](https://synaps.io)
- 🚦  Soon™️: Front-end test cases with [Storybook](https://storybook.js.org/)
- 🏛  Soon™️: Project funding & open-source governance with [Organigram](https://organigram.io/)

If you haven't already, you will have to set up the following accounts (for free):

>⚠️ Rocket Stack is built so you can bootstrap entire projects using only free infrastructure and open-source code.

- Github: [https://github.com/signup](https://github.com/signup)
- Vercel: [https://vercel.com/signup](https://vercel.com/signup)
- Planetscale: [https://planetscale.com/signup](https://planetscale.com/signup)
- Infura: [https://infura.io/signup](https://infura.io/signup)
- Sendgrid: [https://sendgrid.com/signup](https://sendgrid.com/signup)
- [Optional] Stripe: [https://stripe.com/signup](https://stripe.com/signup)
- [Optional] Deepl: [https://deepl.com/signup](https://deepl.com/signup) 
- [Optional] Sendcloud: [https://sendcloud.com/signup](https://sendcloud.com/signup)
- [Optional] Synaps: [https://synaps.io/signup](https://synaps.io/signup)

All you need to do then is create a .env file with values from .env.example and your own API keys from the different services. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting started

From root project:

```bash
yarn install && yarn lerna bootstrap && yarn prisma generate && yarn build:packages
```

If server was already running, generating new types with `yarn prisma generate` might fail. To fix this, first delete the `.prisma` folder in `node_modules/` and in `/stack/node_modules`.

To launch the project:

```bash
yarn dev
```

## Tests

### Initial Migrations
```bash
  # 1st tab
  yarn ethereum

  # 2nd tab
  yarn contracts console
  # Migrate organigram contracts
  > migrate --from 2 --to 2
  # Migrate example assets
  > migrate --from 9 --to 9
  # Reuse Organigram contract address
  # and assets contracts addresses, and
  # connect your UI to these addresses.
  # @see .env
```

### Testing Contracts
```bash
  # 1st tab
  yarn ethereum

  # 2nd tab
  yarn contracts console
  # Run all migrations
  > migrate --reset
```

### Testing JS
```bash
  # 1st tab
  yarn ethereum

  # 2nd tab
  yarn js build
  yarn js test
```

### Testing Stack
```bash
  # 1st tab
  yarn ethereum

  # 2nd tab
  yarn stack build
  yarn stack test
```