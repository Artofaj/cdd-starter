import { Typography, styled } from '@mui/material';
import React from 'react';

const Wrapper = styled('Section')(() => ({
    minHeight: '50vh',
}));

const Section = ({ children, title }) => {
    return (
        <Wrapper>
            <Typography variant="h2">{title}</Typography>
            {children}
        </Wrapper>
    );
};

export default Section;
