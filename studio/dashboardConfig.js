export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ddadab4687d60efa6f19593',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nm5qcui2',
                  apiId: 'ec8b8a1e-2c4e-48e4-b5c2-fe405225cb7d'
                },
                {
                  buildHookId: '5ddadab405ea28dc6e96d1d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p4ihahr1',
                  apiId: '34da1101-ad23-44cf-8fc0-216d4601910c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Phixiys/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p4ihahr1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
