import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffcc00',
      main: '#ff9900',
      dark: '#ff6600'
    },
    secondary: {
      main: '#3300ff',
    },
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: '1px',
        paddingLeft: '3px'
      }
    },
    MuiTableRow: {
      root: {
        height: '26px'
      },
      head: {
        height: '26px'
      }
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: '16px'
        }
      }
    }
  }
})

export default theme
