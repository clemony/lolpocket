export default function removeItemFromSet(pocket, itemSet, itemx) {
  const thisPocket = getPocket(pocket);
  const set = thisPocket?.items[0].itemSets.find((set) => set.key === itemSet);

  if (set) {
    const index = set.items.findIndex((item) => item === itemx);
    if (set && Array.isArray(set.items)) {
      set.items.splice(index);
    }
  }
}
