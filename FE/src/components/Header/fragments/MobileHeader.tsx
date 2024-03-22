import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import HeaderEntry from './HeaderEntry';
import { HeaderExtendedProps } from '../Header';

const MobileHeader = ({ pages, title }: HeaderExtendedProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ padding: 0 }}>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleOpen}
                    color="secondary"
                >
                    {open ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <RxHamburgerMenu size={30} />
                    )}
                </IconButton>
                <Typography variant="h1" fontSize={20}>
                    {title}
                </Typography>
            </Toolbar>

            {open && (
                <Box>
                    <HeaderEntry links={pages} />
                </Box>
            )}
        </AppBar>
    );
};

export default MobileHeader;
