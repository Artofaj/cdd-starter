import React from 'react';
import Link from './fragments/Link';
import { Box, Typography, styled } from '@mui/material';

const OuterWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100dvh',
    width: '100%',
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
}));
const LinkWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    maxWidth: 700,
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

const InnerWrapper = styled(LinkWrapper)(({ theme }) => ({
    padding: theme.spacing(2),
    minHeight: '75dvh',
    position: 'absolute',
}));

export interface LinktreeEntryProps {
    url: URL;
    title: string;
    isFeatured: boolean;
}

interface LinktreeProps {
    title: string;
    subtitle: string;
    links: LinktreeEntryProps[] | [];
}

const Linktree = ({ title, subtitle, links }: LinktreeProps) => {
    return (
        <OuterWrapper>
            <Typography variant="h1">{title}</Typography>
            <InnerWrapper minHeight={'75dvh'}>
                <Typography variant="body1" textAlign={'center'}>
                    {subtitle}
                </Typography>
                <LinkWrapper>
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            to={link.url}
                            isFeatured={link.isFeatured}
                        >
                            {link.title}
                        </Link>
                    ))}
                </LinkWrapper>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Linktree;
