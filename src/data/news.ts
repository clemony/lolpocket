export interface Article {
    name: string
    source: string
    image: string
  }

  
  export const NewsArticles: Article[] = [
    {
      name: 'Patch 14.15',
      source: 'Riot Games',
      image:
        'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/24eb05be171a372ed26b0b6034bf875b3bd09d98-2560x1440.png?auto=format&fit=fill&q=80&w=960',
    },
    {
      name: 'PBE Changes',
      source: ' /u/FrankTheBoxMonster',
      image:
        '/img/art/magic.webp',
    },
    {
      name: 'Champ Flavor Tier List',
      source: 'Clem',
      image:
        '/img/art/chase.webp',
    },
  ]