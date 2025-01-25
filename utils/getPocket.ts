export default function (key) {
  return usePocketStore().pockets.find((pocket: pocket) => pocket.key === key)
}
