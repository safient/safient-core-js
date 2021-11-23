module.exports = {
  docs: [
    'overview',
    {
      type: 'category',
      label: 'Getting to know Safient',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'safient-basics',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      collapsible: true,
      collapsed: true,
      items: [
        'dev-overview',
        {
          type: 'category',
          label: 'Safient Core',
          collapsible: true,
          collapsed: true,
          items: [
            'core-getting-started',
            {
              type: 'category',
              label: 'API',
              collapsible: true,
              collapsed: true,
              items: ['api/classes/SafientCore'],
            },
            'api/namespaces/Types',
          ],
        },
        {
          type: 'category',
          label: 'Safient Contracts',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'API Docs',
              href: 'https://contracts.safient.io/',
            },
          ],
        },
      ],
    },
    'roadmap',
  ],
};