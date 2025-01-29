export default function resetItems(set) {
  if (set && Array.isArray(set.items)) {
    set.items.splice(0, set.items.length) // Reset the array
  }
}
