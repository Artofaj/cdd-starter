import { MenuItem, styled } from '@mui/material';
import React from 'react';

const Link = styled('a')(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: theme.typography.caption.fontSize,
    width: '100%',
    textAlign: 'center',
}));

const CustomMenuEntry = styled(MenuItem, {
    shouldForwardProp: (prop) => !['isCta'].includes(prop as string),
})<{ isCta: boolean }>(({ theme, isCta }) => ({
    backgroundColor: isCta ? theme.palette.primary.main : 'transparent',
    color: isCta
        ? theme.palette.primary.contrastText
        : theme.palette.text.secondary,
    borderRadius: theme.spacing(5),
    margin: '0 !important',

    '&:hover': {
        backgroundColor: isCta
            ? theme.palette.secondary.main
            : theme.palette.secondary.dark,
    },
}));

const HeaderEntry = ({ links }: { links: string[] }) => {
    return (
        <>
            {links.map((page) => (
                <CustomMenuEntry key={page} isCta={page === 'Social'}>
                    <Link href={`#${page.toLowerCase()}`}>{page}</Link>
                </CustomMenuEntry>
            ))}
        </>
    );
};

export default HeaderEntry;
