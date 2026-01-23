const nameHyphenMap: Record<string, string> = {
  // 'Blitzcrank': 'Blitz-\ncrank',
  'Fiddlesticks': 'Fiddle-\nsticks',
  'Aurelion Sol': 'Aurelion\nSol',
  'Heimerdinger': 'Heimer-\ndinger',
  'Miss Fortune': 'Miss\nFortune',
  'Mordekaiser': 'Morde-\nkaiser',
  // 'Master Yi': 'Master\nYi',
  'Renata Glasc': 'Renata\nGlasc',
  'Tahm Kench': 'Tahm\nkench',
  'Tryndamere': 'Tryn-\ndamere',
}

export function hyphenateChampionName(n: string): string {
  return nameHyphenMap[n] ?? n
}
