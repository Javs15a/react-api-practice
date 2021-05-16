import { createMuiTheme } from '@material-ui/core';

const appTheme = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#ff9800',
            },
            secondary: {
                main: '#009688',
            },
        }
    }
);

export default appTheme;