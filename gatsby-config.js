const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://blog.kinera.network',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Kinera Platform',
    siteUrl: siteUrl,
    blogUrl: `${siteUrl}/blog`,
    defaultLang: `en-US`,
    image: `${siteUrl}/images/kinera-blog-4.png`,
    description:
      'The Kinera Platform - We are a decentralised media platform where users and creators publish their content; help rank and curate videos and films from public repositories and other media networks on the Internet',
    keywords: ['Blockchain', 'Polkadot', 'Substrate', 'Web3.0', 'Kinera'],
    author: 'Parity WebDev Team',
    pressEmail: 'press@parity.io',
    email: 'info@parity.io',
    twitter: 'https://twitter.com/kinera',
    linkedIn: 'https://www.linkedin.com/company/kinera',
    element: 'https://app.element.io/',
    github: 'https://github.com/kinera/',
    telegram: 'https://t.me/kinera',
    gitter: 'https://gitter.im/paritytech/parity',
    relayChain: 'https://relaychain.fm/',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.blogTitle,
                  description: edge.node.excerpt,
                  image: edge.node.frontmatter.image,
                  category: edge.node.frontmatter.tags,
                  ttl: edge.node.timeToRead,
                  date: edge.node.frontmatter.date_published,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: [frontmatter___date_published]}) {
                  edges {
                    node {
                      excerpt
                      html
                      timeToRead
                      frontmatter {
                        tags
                        slug
                        image
                        date_published(formatString: "MMMM DD, YYYY")
                        author
                        blogTitle
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Kinera Blog Feed',
            link: 'https://blog.kinera.network',
            language: `en-US`,
            webMaster: 'Imad Arain',
            managingEditor: 'Zach Cavanaugh',
            categories: [

            ],
            copyright: 'Copyright 2021 Kinera',
            feed_url: 'http://www.parity.io/rss.xml',
            ttl: '60',
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: `en`,
        configPath: `${__dirname}/content/config.json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./content/react-intl/en.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Kinera`,
        short_name: `Kinera`,
        start_url: `/`,
        background_color: `#F1F3F2`,
        theme_color: `#FF1864`,
        display: `standalone`,
        icon: 'src/images/favicon2.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layouts/Layout.tsx`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
  ],
};
