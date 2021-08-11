import { darkgrey,grey, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#263238',
      light: '#61dafb',
      dark: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    darkt: {
      main: '#263238',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'black',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        
        backgroundColor: 'black',
        height:'100%' // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;
