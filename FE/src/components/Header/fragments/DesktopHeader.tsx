import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import HeaderEntry from './HeaderEntry';
import { HeaderExtendedProps } from '../Header';

const DesktopHeader = ({ pages, title }: HeaderExtendedProps) => {
    return (
        <AppBar sx={{ maxHeight: 70 }} position="fixed">
            <Box
                sx={{ flexGrow: 1 }}
                flexDirection={'row'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
            >
                <Typography variant="h1">{title}</Typography>
                <HeaderEntry links={pages} />
            </Box>
        </AppBar>
    );
};

export default DesktopHeader;
