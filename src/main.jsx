import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/main.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF773D',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
