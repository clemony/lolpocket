export const libraryLinks: LinkObject[] = [
  {
    name: 'Items',
    blurb: 'Search, sort, and filter all items in one spot.',
    icon: {
      name: 'lucide:sword',
      class: ['size-5.25 -scale-x-100', 'size-5.75 **:stroke-[1.5]'],
    },
    img: {
      class: 'scale-100',
      src: '/img/art/item-moonstone.png',
    },
    link: '/library/items',
  },
  {
    name: 'Champions',
    blurb: 'Browse champions and an overview of their abilities.',
    icon: {
      name: 'i-lol-champ-circle',
      class: '!size-5.25 ',
    },
    img: {
      class: '',
      src: '/img/art/morg.jpg',
    },
    link: '/library/champions',
  },

  {
    name: 'Runes',
    blurb: 'A rune page that doesn\'t cost 6300 BE',
    icon: {
      name: 'i-lol-rune-circle',
      class: 'size-5.25  contrast-150',
    },
    img: {
      class: 'scale-105 ',
      src: '/img/art/inspiration.png',
    },
    link: '/library/runes',
  },
  {
    name: 'Spellbook',
    icon: {
      name: 'book',
      class: '!size-5',
    },
    img: {
      class: 'scale-100 ',
      src: '/img/art/book.png',
    },
    link: '/library/spellbook',
  },
]
