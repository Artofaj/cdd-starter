import * as React from 'react';

import { Box, Stack, styled } from '@mui/material';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Wrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
}));

const IndexPage = () => (
    <Layout>
        Welcome to this super starter
        <Wrapper>
            <Stack gap={10} maxWidth={900} margin={'auto'}>
                <section>
                    <h1>Lorem ipsum dolor sit.</h1>
                </section>
                <section>
                    <h1>Quam tenetur delectus autem.</h1>
                </section>
                <section>
                    <h1>Illo voluptate cupiditate suscipit.</h1>
                </section>
            </Stack>
        </Wrapper>
    </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />;

export default IndexPage;
