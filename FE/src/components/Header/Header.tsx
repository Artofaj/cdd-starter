import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DesktopHeader from './fragments/DesktopHeader';
import MobileHeader from './fragments/MobileHeader';
import { LinkProps } from './fragments/HeaderEntry';

const PAGES: LinkProps[] = [
    { title: 'index', route: '/' },
    { title: 'linktree', route: '/linktree' },
];

interface HeaderProps {
    title: string;
}

export interface HeaderExtendedProps extends HeaderProps {
    pages: LinkProps[];
}

const Header = ({ title }: HeaderProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    if (isDesktop) {
        return <DesktopHeader title={title} pages={PAGES} />;
    }

    return <MobileHeader title={title} pages={PAGES} />;
};

export default Header;
