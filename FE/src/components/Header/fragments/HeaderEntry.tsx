import { MenuItem, styled } from '@mui/material';
import React from 'react';
import { Link as a } from 'gatsby';

const Link = styled(a)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: theme.typography.caption.fontSize,
    width: '100%',
    textAlign: 'center',
}));

export interface LinkProps {
    title: string;
    route: string;
}
interface HeaderEntryProps {
    links: LinkProps[];
}

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

const HeaderEntry = ({ links }: HeaderEntryProps) => {
    return (
        <>
            {links.map((page) => (
                <CustomMenuEntry
                    key={page.route}
                    isCta={page.title === 'Social'}
                >
                    <Link to={`${page.route}`}>{page.title}</Link>
                </CustomMenuEntry>
            ))}
        </>
    );
};

export default HeaderEntry;
