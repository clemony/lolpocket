export function pType(pocket: Pocket | string) {
  if (typeof pocket == 'string')
    return usePocketStore().getPocket(pocket)
  else
    return (pocket as unknown as Pocket)
}