import Box from '@mui/material/Box'

const TabPanel: React.FC<{ value: number, index: number }> = ({
  children,
  value,
  index,
  ...other
}) => (
  <Box hidden={value !== index} {...other}>
    {value === index && (
      <Box py={3} px={1}>
        {children}
      </Box>
    )}
  </Box>
)

export default TabPanel
