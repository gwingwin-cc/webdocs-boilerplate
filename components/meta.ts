export const listOfContents = [
    {
        label: 'Overview',
        type: 'link',
        path: 'overview',
    },
    {
        label: 'Getting Started',
        type: 'link',
        path: 'get-start'
    },
    {
        label: 'Deployment',
        type: 'link',
        path: 'deployment'
    },
    {
        label: 'Example',
        type: 'group',
        path: 'contents',
        list: [
            {
                label: 'Link Page',
                type: 'link',
                path: 'contents/link',
            },
            {
                label: 'Nest',
                type: 'group',
                path: 'contents/nested',
                list: [
                    {
                        label: 'Menu',
                        type: 'link',
                        path: 'contents/nested#text',
                    },
                    {
                        label: 'Link ID',
                        type: 'link',
                        path: 'contents/nested#field-datetime',
                    },
                ]
            },
        ]
    },
]