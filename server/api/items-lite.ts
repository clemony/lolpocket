import itemsLite from '../../data/items-lite.json'

export default cachedEventHandler(
  () => itemsLite,
  { maxAge: 60 * 60 * 24 * 7 }, // cache in memory for 1 week
)