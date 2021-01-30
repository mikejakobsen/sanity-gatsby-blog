export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6015b25bbfa5d7ce3331b710',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-16osbqkb',
                  apiId: '952d67b9-9c39-4df8-b064-a6675f7e97a1'
                },
                {
                  buildHookId: '6015b25bd3430ba0aec874f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2da62mt7',
                  apiId: 'ffb8b63d-eb81-40d7-81e1-75723ca08d97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikejakobsen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2da62mt7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
