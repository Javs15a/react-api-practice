import { ThemeProvider } from '@material-ui/styles';
import { themeApp } from 'assets/theme/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(

  <ThemeProvider theme={themeApp}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);

