import React from 'react';
import Layout from '../components/Layout';
import Linktree from '../components/Linktree';
import { graphql } from 'gatsby';
import { LinktreeEntryProps } from '../components/Linktree/Linktree';

export const query = graphql`
    query LinktreePageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        sanityLinktree {
            title
            subtitle
            link {
                url
                title
                isFeatured
            }
        }
    }
`;

const LinktreePage = ({ data }) => {
    const fallbackTitle = data.site.siteMetadata.title;
    const fallbackSubtitle = data.site.siteMetadata.description;

    const sanityLinktree = data.sanityLinktree;

    const title = sanityLinktree?.title || fallbackTitle || 'Title';
    const subtitle = sanityLinktree?.subtitle || fallbackSubtitle || 'Subtitle';
    const links: LinktreeEntryProps[] = sanityLinktree?.link || [];

    return (
        <Layout omitHeader>
            <Linktree title={title} subtitle={subtitle} links={links} />
        </Layout>
    );
};

export default LinktreePage;
