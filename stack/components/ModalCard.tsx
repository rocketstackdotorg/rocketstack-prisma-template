import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Close from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ModalCard: React.FC<ModalCardProps> = ({
  close,
  back,
  status,
  header,
  footer,
  body,
  bodyProps,
  sx,
  ...props
}) => (
  <Card
    {...props}
    sx={{ overflow: 'scroll', minWidth: ['90%', '600px'], p: 0, my: 6, ...sx }}
  >
    {header != null ? (
      <>
        <Box
          sx={{
            height: '4px',
            backgroundColor: status ?? 'transparent',
            borderRadius: ['1rem 1rem 0 0']
          }}
        />
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          borderBottom='solid 1px gray'
          borderColor='near-white'
          p={[3, 4]}
          pb={3}
        >
          {back != null ? (
            <Button variant='text' onClick={back}>
              <ArrowBackIcon />
            </Button>
          ) : (
            <div />
          )}
          {header}
          {close != null ? (
            <Button variant='text' onClick={close}>
              <Close />
            </Button>
          ) : (
            <div />
          )}
        </Grid>
      </>
    ) : null}
    {body != null && (
      <Grid p={[3, 4]} pb={2} {...bodyProps}>
        {body}
      </Grid>
    )}
    {footer != null ? (
      <Grid
        container
        pt={[4, 4]}
        pb={[4, 4]}
        p={[3, 4]}
        borderTop='solid 1px gray'
        justifyContent='flex-end'
        flexDirection={['column', 'row']}
        alignItems='center'
      >
        {footer}
      </Grid>
    ) : null}
  </Card>
)

export default ModalCard

interface ModalCardProps {
  children?: JSX.Element
  close?: () => void
  back?: () => void
  status?: string
  header?: JSX.Element
  footer?: JSX.Element
  body?: JSX.Element
  bodyProps?: any
  sx?: any
}
