export default defineAppConfig({
  app: {
    name: 'NitroStart',
    logo: {
      text: true,
      image: false,
      src: '/logo.svg',
      icon: true,
      name: 'mingcute:rocket-fill',
    },
  },
  landing: {
    header: {
      theme: true,
      language: true,
      auth: true,
      links: [
        {
          label: 'Features',
          to: '/features',
        },
        {
          label: 'Pricing',
          to: '/pricing',
        },
        {
          label: 'Docs',
          to: '/docs',
        },
        {
          label: 'Blog',
          to: '/blog',
        },
      ],
    },
  },
})
