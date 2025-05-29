import championsLite from '../../data/champions-lite.json'

export default cachedEventHandler(
  () => championsLite,
  { maxAge: 60 * 60 * 24 * 7 }, // cache in memory for 1 week
)