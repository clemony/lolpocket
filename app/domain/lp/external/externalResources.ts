import type { AvatarProps, DropdownMenuItem } from '@nuxt/ui'

export const officialResources: DropdownMenuItem[] =   [
    {
      label: 'Dev Updates',
      target: '_blank',
      to: 'https://www.leagueoflegends.com/en-us/news/dev/',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/fist.webp',
      },
    },
    {
      label: 'Patch Notes',
      target: '_blank',
      to: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/league2.webp',
      },
    },
    {
      label: 'Wiki',
      target: '_blank',
      to: 'https://wiki.leagueoflegends.com/en-us/',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/wiki.webp',
      },
    },
  ]


export const externalResources: DropdownMenuItem[] =  [
    {
      label: 'Lolalytics',
      target: '_blank',
      to: 'https://lolalytics.com',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/lolalytics.webp',
      },
    },
    {
      label: 'op.gg',
      target: '_blank',
      to: 'https://www.op.gg',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/opgg2.webp',
      },
    },
    {
      label: 'u.gg',
      target: '_blank',
      to: 'https://u.gg',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/ugg2.webp',
      },
    },
    {
      label: 'League of Graphs',
      target: '_blank',
      to: 'https://www.leagueofgraphs.com',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/LoG.webp',
      },
    },
    {
      label: 'League of Items',
      target: '_blank',
      to: 'https://leagueofitems.com',
      avatar: {
        size: '3xs' as AvatarProps['size'],
        src: '/img/logos/LoI.webp',
      },
    },
  ]
