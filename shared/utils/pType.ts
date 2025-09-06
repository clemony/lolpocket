export function pType(pocket: Pocket | string) {
  if (typeof pocket == 'string')
    return ps().getPocket(pocket)
  else
    return (pocket as unknown as Pocket)
}