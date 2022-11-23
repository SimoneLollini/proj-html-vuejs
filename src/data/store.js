import {
  reactive
} from 'vue'

export const store = reactive({
  navBar: [
    {
      href: '#',
      text: 'Home'
    }, {
      href: '#',
      text: 'Rates'
    }, {
      href: '#',
      text: 'Testimonials'
    }, {
      href: '#',
      text: 'FAQ'
    }, {
      href: '#',
      text: 'Blog'
    }, {
      href: '#',
      text: 'Contact'
    },
  ],
  socials: [
    {
      name: 'FaceBook',
      icon: 'fa-brands fa-facebook-f',
      href: '#'
    },
    {
      name: 'FaceBook',
      icon: 'fa-brands fa-twitter',
      href: '#'
    }, {
      name: 'FaceBook',
      icon: 'fa-brands fa-instagram',
      href: '#'
    }, {
      name: 'FaceBook',
      icon: 'fa-brands fa-youtube',
      href: '#'
    },
  ],
  HrefAbout: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Rates",
      href: "#"
    },
    {
      text: "Testimonials",
      href: "#"
    },
    {
      text: "Blog",
      href: "#"
    },
    {
      text: "Free Quote",
      href: "#"
    },
  ],
  HrefPosts: [
    {
      text: "Heading Out To College?",
      href: "#"
    },
    {
      text: "Moving Your Business?",
      href: "#"
    },
    {
      text: "Outstanding Quality",
      href: "#"
    },
    {
      text: "Cost of Moving",
      href: "#"
    },
    {
      text: "Best Moving Tips",
      href: "#"
    },
  ]
})