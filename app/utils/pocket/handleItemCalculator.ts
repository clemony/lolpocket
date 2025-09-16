export function createCalculatorSet() {
  const is = useItemStore()

  /*   is.calculatorSets.push([
0,0,0,0,0,0
  ])
 */
}
function sortType(array) {
  array.sort((a, b) => a.value - b.value)

  // sort by name
  array.sort((a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
}
