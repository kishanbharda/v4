module.exports = {
  siteTitle: 'Kishan Bharda | Mobile App Developer',
  siteDescription: 'Kishan Bharda is a Mobile App Developer at Alpha BPO, Rajkot.',
  siteKeywords:
    'Kishan Bharda, Kishan, Bharda, mobile app developer, react native developer, ionic developer, javascript',
  siteUrl: 'https://kishanbharda.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kishan Bharda',
  location: 'Rajkot, Gujarat',
  email: 'kishanlilabharda@gmail.com',
  github: 'https://github.com/kishanbharda',
  twitterHandle: '@kishan_bharda',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kishanbharda',
    },
    {
      name: 'Linkedin',
      url: 'https://in.linkedin.com/in/kishan-bharda-192849152',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kishan.bharda.5',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kishan_bharda/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kishan_bharda',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
