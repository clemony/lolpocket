import spells from '../../data/spells.json'

export default cachedEventHandler(
  () => spells,
  { maxAge: 60 * 60 * 24 * 7 }, // cache in memory for 1 week
)