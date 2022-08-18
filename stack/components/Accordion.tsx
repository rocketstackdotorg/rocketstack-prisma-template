import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SxProps } from '@mui/material/styles'
import Box from '@mui/material/Box'

const CustomAccordions: React.FC<CustomAccordionProps> = ({
  accordions,
  expand,
  ...props
}) => {
  const [expanded, setExpanded] = useState<string | null>(
    expand === null || expand === undefined ? null : `panel${expand}`
  )

  const handleChange: (_: string) => void = panel =>
    setExpanded(panel != null && panel !== expanded ? panel : null)

  return (
    <Box {...props}>
      {accordions.map((accordion: AccordionType, index: number) => (
        <Accordion
          square
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={() => handleChange(`panel${index}`)}
          disabled={accordion.disabled}
        >
          <AccordionSummary
            sx={{ color: 'text.primary' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            {accordion.heading}
          </AccordionSummary>
          <AccordionDetails>{accordion.content}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default CustomAccordions

interface CustomAccordionProps {
  accordions: AccordionType[]
  expand?: number | null
  sx?: SxProps
  width?: { md: string | number, xs: string | number }
  mt?: { md: string | number, xs: string | number }
}

export interface AccordionType {
  heading: JSX.Element | string
  content: JSX.Element | string
  disabled?: boolean
}
