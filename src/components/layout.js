/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createOurTheme } from '../themes/theme';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={createOurTheme()}>
            <CssBaseline />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: `var(--size-content)`,
                    padding: `var(--size-gutter)`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `var(--space-5)`,
                        fontSize: `var(--font-sm)`,
                    }}
                ></footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
