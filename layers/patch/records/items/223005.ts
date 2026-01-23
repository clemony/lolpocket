// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 223005,
  name: 'Ghostcrawlers',
  active: [
    {
      name: 'Wall Walk',
      effects: 'Become ghostly for 6 seconds, ignoring terrain collision until you basic attack or cast an ability. While inside terrain, gain 300 <b>bonus</b> movement speed.',
      unique: true
    }
  ],
  description: '70 Move Speed\n\nWall Walk (0s)\nGain the ability to walk through walls for 6 seconds. While inside walls, gain 300 move speed. Casting a spell or attacking will end this effect.',
  gold: {
    base: 500,
    sell: 350,
    total: 500
  },
  maps: [
    30
  ],
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 70
  }
}
export default item