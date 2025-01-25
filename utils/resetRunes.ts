export default function resetRunes(pocket, set, number?) {
  const runes1 = [set.value.p1, set.value.p2, set.value.p3]

  const runes2 = [set.value.s1, set.value.s2]

  const runes = !number ? runes1.concat(runes2) : number == 1 ? runes1 : number == 2 ? runes2 : null

  runes.forEach((rune) => {
    rune = createDefaultRune()
  })
}
