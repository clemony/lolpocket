export function formatNumberPosition(num: number, returnNum?: boolean) {
  if (returnNum)
    return num == 1 ? `st` : num == 2 ? `${num}nd` : num == 3 ? `${num}rd` : `${num}th`

  else
    return num == 1 ? `st` : num == 2 ? `nd` : num == 3 ? `rd` : `th`
}