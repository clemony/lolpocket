export function usePocketEdit(pocket: pocket) {
  const ts = useTempStore()
  ts.selectedPocket = pocket
  ts.editPocketTrigger = true
}
