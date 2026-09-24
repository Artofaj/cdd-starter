import React from 'react';

interface HTMLProps {
    htmlAttributes?: Record<string, unknown>;
    headComponents?: React.ReactNode[];
    bodyAttributes?: Record<string, unknown>;
    preBodyComponents?: React.ReactNode[];
    body?: string;
    postBodyComponents?: React.ReactNode[];
}

export default function HTML({
    htmlAttributes = {},
    headComponents = [],
    bodyAttributes = {},
    preBodyComponents = [],
    body = '',
    postBodyComponents = [],
}: HTMLProps): React.ReactElement {
    return (
        <html {...htmlAttributes} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {headComponents}
            </head>
            <body {...bodyAttributes}>
                {preBodyComponents}
                <div
                    key="body"
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
                {postBodyComponents}
            </body>
        </html>
    );
}
