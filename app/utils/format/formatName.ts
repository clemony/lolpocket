export async function formatName(name) {
  const nameHyphenMap: Record<string, string> = {
    'Ambessa': 'Am-\nbessa',
    'Blitzcrank': 'Blitz-\ncrank',
    'Cassiopeia': 'Cass-\niopeia',
    'Dr. Mundo': 'Dr.\nMundo',
    'Fiddlesticks': 'Fiddle-\nsticks',
    'Gangplank': 'Gang-\nplank',
    'Heimerdinger': 'Heimer-\ndinger',
    'Jarvan IV': 'Jarvan\nIV',
    'Kassadin': 'Kass-\nadin',
    'Lissandra': 'Liss-\nandra',
    'Mordekaiser': 'Morde-\nkaiser',
    'Malzahar': 'Mal-\nzahar',
    'Miss Fortune': 'Miss\nFortune',
    'Master Yi': 'Master\nYi',
    'Nocturne': 'Noc-\nturne',
    'Pantheon': 'Pan-\ntheon',
    'Renata Glasc': 'Renata\nGlasc',
    'Renekton': 'Ren-\nekton',
    'Seraphine': 'Sera-\nphine',
    'Tahm Kench': 'Tahm\nkench',
    'Tryndamere': 'Tryn-\ndamere',
  }

  return (n: string) => nameHyphenMap[n] ?? n
}