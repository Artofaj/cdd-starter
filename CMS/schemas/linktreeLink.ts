export default {
    name: 'linktreeLink',
    title: 'Links',
    type: 'object',

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
        },
    ]
    ,
    initialValue: {
        isFeatured: false,
    }
}