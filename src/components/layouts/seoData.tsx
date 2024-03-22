export const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  publisher: {
    '@type': 'Organization',
    name: 'Blockchain Infrastructure for the Decentralised Web',
    url: 'https://blog.kinera.network/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://blog.kinera.network/images/parity-logo-square.png',
      width: 60,
      height: 60,
    },
  },
  url: 'https://blog.kinera.network/',
  image: {
    '@type': 'ImageObject',
    url: 'https://blog.kinera.network/images/card-image-parity.png',
    width: 1600,
    height: 800,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://blog.kinera.network/',
  },
  description:
    'The Kinera Platform - We are a decentralised media platform where users and creators publish their content; help rank and curate videos and films from public repositories and other media networks on the Internet',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ignition Law, 1 Sans Walk',
    addressLocality: 'London',
    postalCode: 'EC1R 0LT',
    addressCountry: 'UK',
  },
  sameAs: [
    'https://twitter.com/ParityTech',
    'https://www.facebook.com/ParityTech/',
    'https://www.instagram.com/paritytech/',
    'https://www.crunchbase.com/organization/ethcore',
    'https://www.linkedin.com/company/invisiblehandlab/',
    'https://medium.com/paritytech',
    'https://github.com/paritytech',
    'https://beta.companieshouse.gov.uk/company/09760015',
  ],
};
