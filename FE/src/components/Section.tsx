import { Typography, styled } from '@mui/material';
import React from 'react';

const Wrapper = styled('Section')(() => ({
    minHeight: '50vh',
}));

interface SectionProps {
    children: React.ReactNode;
    title: string;
}

function Section({ children, title }: SectionProps) {
    return (
        <Wrapper>
            <Typography variant="h2">{title}</Typography>
            {children}
        </Wrapper>
    );
}

export default Section;
