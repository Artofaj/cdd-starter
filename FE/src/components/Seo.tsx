import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
    description?: string;
    title: string;
    children?: React.ReactNode;
    image?: string;
}

function Seo({ description, title, children, image }: SeoProps): JSX.Element {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = metaDescription;

    return (
        <>
            <title>{defaultTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.author || ''}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            {children}
            <meta property="og:image" content={image || 'img/logo.png'} />
        </>
    );
}

export default Seo;
