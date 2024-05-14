import React from 'react';
import Layout from '../components/Layout';
import Linktree from '../components/Linktree';
import { graphql } from 'gatsby';

export const query = graphql`
    query LinktreePageQuery {
        site {
            siteMetadata {
                description
            }
        }
    }
`;

const LinktreePage = () => {
    return (
        <Layout omitHeader>
            <Linktree
                fallbackTitle={query.site.siteMetadata.title}
                fallbackSubtitle={query.site.siteMetadata.description}
            />
        </Layout>
    );
};

export default LinktreePage;
