import React, { useEffect } from 'react';

interface InstaFeedProps {
    profile: string;
    maxWidth?: number;
}

const Feed = ({ profile, maxWidth }: InstaFeedProps) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;

        document.body.appendChild(script);
    }, []);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/${profile}/`}
            data-instgrm-version="12"
            style={{
                maxWidth: maxWidth,
                minWidth: '326px',
                width: '100%',
                height: '100',
                maxHeight: '100%',
            }}
        />
    );
};

export default Feed;
