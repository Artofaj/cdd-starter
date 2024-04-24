import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createOurTheme } from '../assets/themes/theme';
import Header from './Header';
import '../assets/themes/fonts.css';

interface LayoutProps {
    children: React.ReactNode;
    omitHeader?: boolean;
}

const Layout = ({ children, omitHeader }: LayoutProps) => {
    return (
        <ThemeProvider theme={createOurTheme()}>
            <CssBaseline />

            {!omitHeader && <Header title="cdd-starter" />}
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default Layout;
