import React from 'react';
import Layout from '../components/Layout';
import Linktree from '../components/Linktree';
import { graphql, useStaticQuery } from 'gatsby';

const LinktreePage = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );

    return (
        <Layout omitHeader>
            <Linktree
                fallbackTitle={site.siteMetadata.title}
                fallbackSubtitle={site.siteMetadata.description}
            />
        </Layout>
    );
};

export default LinktreePage;
