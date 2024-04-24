import { Button, styled } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const SecondaryLink = styled(GatsbyLink)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: theme.typography.caption.fontSize,
    width: '100%',
    textAlign: 'center',
}));

const primaryStyle = (component) =>
    styled(component)(({ theme }) => ({
        fontSize: theme.typography.pxToRem(24),
        textDecoration: 'underline',
        textAlign: 'center',
        color: theme.palette.primary.main,
        padding: 0,
        verticalAlign: 'inherit',

        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.secondary.main,
        },
    }));

const PrimaryInternalLink = primaryStyle(GatsbyLink);
const PrimaryExternalLink = primaryStyle(Button);

type LinkProps = {
    variant?: 'primary' | 'secondary';
    to?: string;
    href?: string;
    children: React.ReactNode;
};

export const Link = ({ variant, to, children, href }: LinkProps) => {
    if (!to && !href) {
        throw new Error('Either to or href must be set');
    }

    if (href) {
        return (
            <PrimaryExternalLink variant="text" href={href.toString()}>
                {children}
            </PrimaryExternalLink>
        );
    }

    if (variant === 'secondary' && to) {
        return <SecondaryLink to={to}>{children}</SecondaryLink>;
    }

    return <PrimaryInternalLink to={to}>{children}</PrimaryInternalLink>;
};

export default Link;
