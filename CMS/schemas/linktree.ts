export default {
    name: 'linktree',
    title: 'Linktree',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Links',
            type: 'array',
            of: [{ type: 'linktreeLink' }],
        },
    ]
}