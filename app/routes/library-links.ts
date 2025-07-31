export const libraryLinks: LinkObject[] = [
  {
    name: 'Items',
    link: '/library/items',
    icon: {
      name: 'lucide:sword',
      class: ['size-5.25 -scale-x-100', 'size-5.75 **:stroke-[1.5]'],
    },
    img: {
      src: '/img/art/item-moonstone.png',
      class: 'scale-100',
    },
    blurb: 'Search, sort, and filter all items in one spot.',
  },
  {
    name: 'Champions',
    link: '/library/champions',
    icon: {
      name: 'i-lol-champ-circle',
      class: '!size-5.25 ',
    },

    img: {
      src: '/img/art/morg.jpg',
      class: '',
    },
    blurb: 'Browse champions and an overview of their abilities.',
  },

  {
    name: 'Runes',
    link: '/library/runes',
    icon: {
      name: 'i-lol-rune-circle',
      class: 'size-5.25  contrast-150',
    },
    img: {
      src: '/img/art/inspiration.png',
      class: 'scale-105 ',
    },
    blurb: 'A rune page that doesn\'t cost 6300 BE',
  },
  {
    name: 'Spellbook',
    link: '/library/spellbook',
    icon: {
      name: 'book',
      class: '!size-5',
    },
    img: {
      src: '/img/art/book.png',
      class: 'scale-100 ',
    },
  },
]
