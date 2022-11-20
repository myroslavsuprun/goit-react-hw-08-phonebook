import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Droid Serif',
    h3: {
      fontWeight: 500,
    },
  },
});

export default theme;
