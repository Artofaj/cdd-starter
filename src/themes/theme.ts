import { createTheme } from '@mui/material/styles';

export function createOurTheme() {
    const palette = {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#c00l',
        },
        background: {
            paper: '#272838',
            default: '#f9f8f8',
        },
        text: {
            primary: '#272838',
            secondary: '#272838',
        },
    };

    const theme = createTheme({
        palette: {
            ...palette,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        fontFamily: ['Silka', 'sans-serif'].join(','),
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        padding: theme.spacing(2),
                    }),
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: ` ${theme.palette.text.primary}`,
                    }),
                },
            },
        },
        typography: (palette) => ({
            allVariants: {
                //color: palette.text.primary,
                fontWeight: 500,
                lineHeight: 1.25,
                fontFamily: ['Silka', 'sans-serif'].join(','),
            },
        }),
    });

    theme.typography = {
        ...theme.typography,
        h2: {
            fontSize: theme.typography.pxToRem(36),
            paddingBottom: theme.spacing(5),
        },
        body2: {
            color: palette.text.secondary,
            fontWeight: 600,
            fontSize: theme.typography.pxToRem(24),
        },
        body1: {
            color: palette.text.secondary,
            fontWeight: 600,
            fontSize: theme.typography.pxToRem(22),
        },
        caption: {
            fontWeight: 400,
        },
    };
    return theme;
}
