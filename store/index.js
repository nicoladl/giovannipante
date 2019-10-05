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
  works: {
    years: [
      {
        label: '2019',
        content: [
          {
            label: 'Durisch+Nolli',
            image: './images/durischnolli.jpg',
            href: 'https://durischnolli.ch'
          }
        ]
      },
      {
        label: '2018',
        content: [
          {
            label: 'Mistretta Coiffure',
            image: './images/mistretta.jpg',
            href: 'https://mistretta.ch'
          },
          {
            label: 'Axure Broker',
            image: './images/axure.jpg',
            href: 'https://axure-broker.ch'
          },
          {
            label: 'Charly Zenger',
            image: './images/charlyzenger.jpg',
            href: 'https://charlyzenger.ch'
          }
        ]
      },
      {
        label: '2017',
        content: [
          {
            label: 'H-Farm',
            image: './images/hfarm.jpg',
            href: 'https://h-farm.com'
          }
        ]
      }
    ]
  },
  contacts: [
    {
      label: 'social',
      content: [
        {
          label: 'Behance',
          href: 'https://github.com/nicoladl'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/nicoladelazzari/'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/nicoladelazzari'
        },
        {
          label: 'Instagram',
          href: 'https://twitter.com/nicoladelazzari'
        }
      ]
    },
    {
      label: 'T.',
      content: [
        {
          label: '123123123',
          href: 'tel:123123123'
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
