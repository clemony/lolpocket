export function editPocket(pocket: pocket) {
  const ts = useTempStore()
  ts.selectedPocket = pocket
  ts.editPocketTrigger = true
}
