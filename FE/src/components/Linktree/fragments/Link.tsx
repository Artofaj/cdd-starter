import React from 'react';
import { Link as BaseLink } from '../../Link';
import { styled } from '@mui/material';

interface LinkProps {
    children: React.ReactNode;
    to: string;
    isFeatured?: boolean;
}

const StyledLink = styled('a', {
    shouldForwardProp: (prop) => prop !== 'isFeatured',
})<{ isFeatured: boolean }>(({ theme, isFeatured }) => ({
    color: isFeatured
        ? theme.palette.secondary.dark
        : theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(24),
    textDecoration: 'none !important',
    textAlign: 'center',
    padding: theme.spacing(2, 4),
    border: `1px solid ${theme.palette.primary.main}`,
    width: '100%',
    verticalAlign: 'inherit',
    backgroundColor: isFeatured ? theme.palette.primary.main : 'transparent',

    '&:hover': {
        backgroundColor: isFeatured
            ? theme.palette.secondary.main
            : theme.palette.secondary.dark,
    },
}));

const Link: React.FC<LinkProps> = ({ to, children, isFeatured }) => {
    return (
        <StyledLink
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            isFeatured={isFeatured ? true : false}
        >
            {children}
        </StyledLink>
    );
};

export default Link;
