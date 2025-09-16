import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'

/* export async function downloadPocketPng(pocket) {
  const ps = usePocketStore()
  await ps.pocketCardRef

  const cardName = computed (() => {
    const c = pocket.champions[0] && pocket.champions[0] ? `${pocket.champions[0]}-` : ''
    const r = pocket.roles[0] && pocket.roles[0] != 'all' ? `${pocket.roles[0]}-` : ''
    const n = pocket.name ? `${pocket.name}-` : ''
    return `${(c + r + n).toLowerCase().replace(' ', '-')}pocket`
  })

  htmlToImage.toPng(ps.pocketCardRef, { quality: 0.95, backgroundColor: '#FFFFFF' })
    .then(dataUrl => download(dataUrl, `${cardName}.png`))
}
 */
