export const state = () => ({
  bio:
    'When I design a graphic design, the purpose that I constantly pursue is the attribution of a shape, of a configuration — through study, research, a design method — which is the most suitable to all kinds of work and artifacts. I deal with visual identity for public and private bodies, book design and communication for cultural events.',
  menu: [
    {
      label: '<span>A</span>b<span></span><span>o</span><span>u</span>t m<span>e</span>',
      slug: 'cv'
    },
    {
      label: 'W<span>o</span>rks',
      slug: 'work'
    },
    {
      label: 'C<span>o</span>nt<span>a</span>ct',
      slug: 'contact'
    }
  ],
  works: [
    {
      label: 'Poster collection',
      year: '019.',
      category: ['Poster design.'],
      image: './images/poster-collection.jpg',
      href: 'https://www.behance.net/gallery/87107847/Poster-collection'
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
      label: 'E—<br>mail',
      content: [
        {
          label: 'hello<br>@giova.com',
          href: 'mailto:hello@giova.com'
        }
      ]
    }
  ]
})
