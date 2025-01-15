import axios from 'axios'

export const useSplashFetch = async (champ: string) => {
  const img = (skin) => {
    if (skin < 10) {
      let a = skin.toString()
      return '/skin0' + a + '/images/'
    } else {
      return '/skin' + skin.toString() + '/images/'
    }
  }

  const url = `https://ddragon.leagueoflegends.com/cdn/15.1.1/data/en_US/champion/${champ}.json`

  const request = new Request(url, {
    method: 'GET',
    cache: 'reload',
  })

  try {
    const req = await fetch(request)

    if (!req.ok) {
      throw new Error(`Response status: ${req.status}`)
    }

    const data = req
    console.log(req)
  } catch (e) {
    console.error('Error during fetch or parse:', e)
  }

  //console.log('💠 - useSplashFetch - skinData:', skinData)

  /*   const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/' + champ.toLowerCase() + '/skins/skin' + img */
}
