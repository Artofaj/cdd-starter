export default {
    name: 'links',
    title: 'Linktree',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'isFeatured',
            title: 'Feature',
            type: 'boolean',
            defaultValue: false,
        }
    ]
}