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
                  buildHookId: '5e14559602ed4378a957982e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yzurkm3y',
                  apiId: 'f273b80b-e401-4b7d-a6e8-187299701dd3'
                },
                {
                  buildHookId: '5e14559660c9555842f34e25',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4zirbhmq',
                  apiId: '9b7fd887-dd5e-403f-8f79-bcd0d00e52a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pallavi246/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4zirbhmq.netlify.com', category: 'apps' }
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
