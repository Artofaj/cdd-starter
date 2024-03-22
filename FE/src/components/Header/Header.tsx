import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DesktopHeader from './fragments/DesktopHeader';
import MobileHeader from './fragments/MobileHeader';

const PAGES = ['Page1, Page2'];

interface HeaderProps {
    title: string;
}

export interface HeaderExtendedProps extends HeaderProps {
    pages: string[];
}

const Header = ({ title }: HeaderProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    if (isDesktop) {
        return <DesktopHeader pages={PAGES} />;
    }

    return <MobileHeader pages={PAGES} />;
};

export default Header;
