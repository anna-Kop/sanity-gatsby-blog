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
                  buildHookId: '5e3beea2399c29795b079784',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r1nxsdiy',
                  apiId: '16d984fa-5b6d-4357-9d3b-7f0537e40945'
                },
                {
                  buildHookId: '5e3beea25a34f8ef691f4497',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jrsoyqpo',
                  apiId: '4cb455bc-daa8-4da3-9b2f-2eb7661f408a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anna-Kop/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jrsoyqpo.netlify.com', category: 'apps' }
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
