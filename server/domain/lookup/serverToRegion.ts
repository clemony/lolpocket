export const REGIONINDEX = {
  br1: 'americas',
  eun1: 'europe',
  euw1: 'europe',
  jp1: 'asia',
  kr: 'asia',
  la1: 'americas',
  la2: 'americas',
  me1: 'europe',
  na1: 'americas',
  oc1: 'sea',
  ru: 'europe',
  sg2: 'sea',
  tr1: 'europe',
  tw2: 'sea',
  vn2: 'sea',
}

export function serverToRegion(region: string): string {
  const r = region.toLowerCase() as keyof typeof REGIONINDEX
  const host = REGIONINDEX[r] ?? 'americas'
  return `https://${host}.api.riotgames.com`
}
