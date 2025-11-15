const nameHyphenMap: Record<string, string> = {
  'Aurelion Sol': 'Aurelion\nSol',
  // 'Blitzcrank': 'Blitz-\ncrank',
  'Fiddlesticks': 'Fiddle-\nsticks',
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
