import Grid from '@mui/material/Grid'

export interface Heading { text: string, link: string, type: number }

const TableOfContents: React.FC<{ headings: Heading[] }> = ({ headings }) => {
  return (
    <Grid item sx={{ borderLeft: 'solid 1px', borderLeftColor: 'grey.900' }}>
      {headings.map((heading) => (
        <Grid
          sx={{ width: '100%', ml: heading.type * 2 }}
          key={heading.text}
        >
          <a href={heading.link}>{heading.text}</a>
        </Grid>
      ))}
    </Grid>
  )
}

export default TableOfContents
