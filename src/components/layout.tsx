import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createOurTheme } from '../assets/themes/theme';
import '../assets/themes/fonts.css';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={createOurTheme()}>
            <CssBaseline />
            <div>
                <main>{children}</main>
                <footer></footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
