export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/bbmorten/nextra-docs'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Nextra'
    }
  }

  // ... other theme options
}