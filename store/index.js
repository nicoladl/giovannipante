export const state = () => ({
  bio:
    'When I design a graphic design, the purpose that I constantly pursue is the attribution of a shape, of a configuration — through study, research, a design method — which is the most suitable to all kinds of work and artifacts. I deal with visual identity for public and private bodies, book design and communication for cultural events.',
  menu: [
    {
      label: '<span>A</span>b<span></span><span>o</span><span>u</span>t m<span>e</span>',
      slug: 'cv'
    },
    {
      label: 'W<span>o</span>rk',
      slug: 'work'
    },
    {
      label: 'C<span>o</span>nt<span>a</span>ct',
      slug: 'contact'
    }
  ],
  works: [
    {
      label: 'Durisch+Nolli',
      year: '018.',
      category: ['Editorial design.', 'Visual identity.', 'Website.'],
      image: './images/durischnolli.jpg',
      href: 'https://durischnolli.ch'
    },
    {
      label: 'Mistretta',
      year: '018.',
      category: ['Editorial design.'],
      image: './images/mistretta.jpg',
      href: 'https://durischnolli.ch'
    },
    {
      label: 'Durisch+Nolli è il più bel progetto Svizzero e non sono neanche venuti alla festa.',
      year: '018.',
      category: ['Editorial design.', 'Rebranding.'],
      image: './images/durischnolli.jpg',
      href: 'https://durischnolli.ch'
    }
  ],
  contacts: [
    {
      label: 'Social',
      content: [
        {
          label: 'Behance',
          href: 'https://www.behance.net/pntgvnn933c8b'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/giovanni-pant%C3%A9-996903189/'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/PanteGiovanni'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/giovanni.pante/'
        }
      ]
    },
    {
      label: 'e-mail',
      content: [
        {
          label: 'hello@giova.com',
          href: 'tel:hello@giova.com'
        }
      ]
    }
  ]
})
