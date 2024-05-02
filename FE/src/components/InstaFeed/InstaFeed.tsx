import React, { useEffect, useState } from 'react';
import Feed from './fragments/Feed';
import { Box, Button, Stack } from '@mui/material';
import Cookies from 'js-cookie';

interface InstaFeedProps {
    profile: string;
    label?: string;
    maxWidth?: number;
}

const INSTA_COOKE_NAME = 'allow_instagram';

const evaluateCookie = () => {
    const hasCookie = Cookies.get(INSTA_COOKE_NAME);

    return hasCookie ? true : false;
};

const InstaFeed = ({ profile, label, maxWidth }: InstaFeedProps) => {
    const [allowInsta, setAllowInsta] = useState<boolean>(false);
    const allowInstaCookie = evaluateCookie();

    const acceptInsta = () => {
        const expiryDate = 10 * 365 * 24 * 60 * 60; // 10 years
        Cookies.set(INSTA_COOKE_NAME, 'true', { expires: expiryDate });
        setAllowInsta(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setAllowInsta(allowInstaCookie);
        }, 300);
    }, []);

    if (!allowInsta) {
        return (
            <Stack justifyContent={'center'} direction={'row'}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={acceptInsta}
                >
                    {label ? label : 'Accept Instagram Cookies'}
                </Button>
            </Stack>
        );
    }

    return <Feed profile={profile} maxWidth={maxWidth ? maxWidth : 1200} />;
};

export default InstaFeed;
