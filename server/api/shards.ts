import shards from '../../data/shards.json'

export default cachedEventHandler(
  () => shards,
  { maxAge: 60 * 60 * 24 * 7 }, // cache in memory for 1 week
)