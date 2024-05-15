import React from 'react';
import Layout from '../components/Layout';
import Linktree from '../components/Linktree';
import { graphql } from 'gatsby';

export const query = graphql`
    query LinktreePageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const LinktreePage = ({ data }) => {
    return (
        <Layout omitHeader>
            <Linktree
                fallbackTitle={data.site.siteMetadata.title}
                fallbackSubtitle={data.site.siteMetadata.description}
            />
        </Layout>
    );
};

export default LinktreePage;
