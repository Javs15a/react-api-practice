import React from 'react';
import ReactDOM from 'react-dom';
import appTheme from 'assets/theme/theme';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
// import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

