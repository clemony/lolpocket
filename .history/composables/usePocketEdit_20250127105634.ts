export const usePocketEdit = (pocket: pocket) => {
  const ts = useTempStore()
  ts.selectedPocket = pocket
  return ts.editPocketTrigger = true
  
}
