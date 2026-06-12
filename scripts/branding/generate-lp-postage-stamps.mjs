import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(__dirname, '../../public/img/lp/stamps')

const ink = '#000000'
const stampSize = 420

function svgDocument({ title, width = stampSize, height = stampSize, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <title>${title}</title>
  <style>
    .ink { stroke: ${ink}; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .fill { fill: ${ink}; stroke: none; }
    .txt { fill: ${ink}; font-family: "Arial Narrow", "Helvetica Neue", Arial, sans-serif; font-weight: 700; text-anchor: middle; }
    .mono { fill: ${ink}; font-family: "Courier New", ui-monospace, monospace; font-weight: 700; text-anchor: middle; }
    .micro { font-size: 14px; }
    .small { font-size: 18px; }
    .label { font-size: 24px; }
    .mid { font-size: 34px; }
    .big { font-size: 72px; }
  </style>
  ${body}
</svg>
`
}

function circles(cx, cy, radii, classes = 'ink') {
  return radii
    .map(({ r, w = 3, dash = '' }) => `<circle class="${classes}" cx="${cx}" cy="${cy}" r="${r}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`)
    .join('\n')
}

function roundedRect(x, y, width, height, radius, w = 3, dash = '') {
  return `<rect class="ink" x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`
}

function text(x, y, value, className = 'txt small', attrs = '') {
  return `<text class="${className}" x="${x}" y="${y}"${attrs}>${value}</text>`
}

function line(x1, y1, x2, y2, w = 3, attrs = '') {
  return `<path class="ink" d="M${x1} ${y1} L${x2} ${y2}" stroke-width="${w}"${attrs}/>`
}

function pathLine(d, w = 3, attrs = '') {
  return `<path class="ink" d="${d}" stroke-width="${w}"${attrs}/>`
}

function star(x, y, r = 5) {
  return `<path class="fill" d="M${x} ${y - r} L${x + r * 0.33} ${y - r * 0.33} L${x + r} ${y} L${x + r * 0.33} ${y + r * 0.33} L${x} ${y + r} L${x - r * 0.33} ${y + r * 0.33} L${x - r} ${y} L${x - r * 0.33} ${y - r * 0.33} Z"/>`
}

function cornerTicks(x, y, width, height) {
  return [
    line(x, y + 28, x, y, 3),
    line(x, y, x + 28, y, 3),
    line(x + width - 28, y, x + width, y, 3),
    line(x + width, y, x + width, y + 28, 3),
    line(x, y + height - 28, x, y + height, 3),
    line(x, y + height, x + 28, y + height, 3),
    line(x + width - 28, y + height, x + width, y + height, 3),
    line(x + width, y + height - 28, x + width, y + height, 3),
  ].join('\n')
}

function stampPersonalTrends() {
  const body = `
    ${circles(210, 210, [{ r: 170, w: 4 }, { r: 156, w: 2, dash: '22 8 3 8' }, { r: 92, w: 3 }])}
    ${star(84, 210, 7)}
    ${star(336, 210, 7)}
    ${text(210, 112, 'LOLPOCKET', 'txt label')}
    ${text(210, 326, 'PERSONAL TRENDS', 'txt small')}
    ${text(210, 198, 'LP', 'txt big')}
    ${pathLine('M150 240 L176 222 L199 231 L224 205 L251 214 L276 184', 6)}
    ${pathLine('M268 184 L276 184 L276 192', 4)}
    ${text(210, 280, '06.03.26', 'mono small')}
  `
  return { slug: 'lp-stamp-personal-trends', title: 'LP personal trends postage stamp', width: stampSize, height: stampSize, body }
}

function stampPostGameReport() {
  const body = `
    ${roundedRect(44, 76, 332, 268, 18, 5, '14 8')}
    ${roundedRect(66, 98, 288, 224, 10, 3)}
    ${cornerTicks(66, 98, 288, 224)}
    ${text(210, 136, 'POST GAME', 'txt label')}
    ${text(210, 171, 'REPORT', 'txt mid')}
    ${line(104, 200, 316, 200, 3)}
    ${pathLine('M136 266 L210 218 L284 266 M136 266 L284 266 M164 248 L256 248', 3)}
    ${line(210, 218, 210, 266, 3)}
    ${text(116, 294, 'KDA', 'mono micro')}
    ${text(210, 294, 'GOLD', 'mono micro')}
    ${text(304, 294, 'OBJ', 'mono micro')}
    ${text(210, 328, 'LP MATCH MAIL', 'txt micro')}
  `
  return { slug: 'lp-stamp-post-game-report', title: 'LP post game report postage stamp', width: stampSize, height: stampSize, body }
}

function stampGlobalBenchmark() {
  const body = `
    ${circles(210, 210, [{ r: 169, w: 3 }, { r: 150, w: 5 }, { r: 112, w: 2, dash: '4 9' }])}
    ${text(210, 88, 'GLOBAL DATA', 'txt small')}
    ${text(210, 348, 'LOCAL GAINS', 'txt small')}
    ${text(210, 150, 'LP', 'txt mid')}
    ${line(148, 276, 292, 276, 3)}
    <rect class="ink" x="160" y="230" width="20" height="46" rx="2" stroke-width="3"/>
    <rect class="ink" x="198" y="206" width="20" height="70" rx="2" stroke-width="3"/>
    <rect class="ink" x="236" y="184" width="20" height="92" rx="2" stroke-width="3"/>
    ${pathLine('M151 215 C178 218 195 200 215 204 C242 210 255 180 282 184', 4)}
  `
  return { slug: 'lp-stamp-global-benchmark', title: 'LP global benchmark postage stamp', width: stampSize, height: stampSize, body }
}

function stampRankClimb() {
  const body = `
    ${roundedRect(126, 40, 168, 340, 8, 5)}
    ${roundedRect(146, 62, 128, 296, 4, 2, '10 7')}
    ${text(210, 112, 'RANK', 'txt label')}
    ${text(210, 154, 'CLIMB', 'txt label')}
    ${line(165, 184, 255, 184, 3)}
    ${pathLine('M174 294 L174 250 L204 250 L204 216 L235 216 L235 176', 7)}
    ${pathLine('M224 177 L235 176 L235 188', 4)}
    ${text(210, 334, 'LP', 'txt big')}
  `
  return { slug: 'lp-stamp-rank-climb', title: 'LP rank climb postage stamp', width: stampSize, height: stampSize, body }
}

function stampWinMore() {
  const body = `
    <path class="ink" d="M118 72 H302 L358 152 V268 L302 348 H118 L62 268 V152 Z" stroke-width="5"/>
    <path class="ink" d="M132 96 H288 L332 160 V260 L288 324 H132 L88 260 V160 Z" stroke-width="2" stroke-dasharray="16 8 4 8"/>
    ${star(122, 210, 6)}
    ${star(298, 210, 6)}
    ${text(210, 146, 'POSITIVE', 'txt small')}
    ${text(210, 207, 'WIN MORE', 'txt mid')}
    ${line(126, 230, 294, 230, 3)}
    ${pathLine('M142 276 L178 254 L206 264 L242 228 L278 236', 5)}
    ${pathLine('M268 232 L278 236 L272 246', 4)}
    ${text(210, 306, 'TREND VERIFIED', 'mono micro')}
  `
  return { slug: 'lp-stamp-win-more', title: 'LP win more postage stamp', width: stampSize, height: stampSize, body }
}

function stampLanePhase() {
  const body = `
    ${circles(210, 210, [{ r: 166, w: 4 }, { r: 148, w: 2 }, { r: 86, w: 3 }])}
    ${text(210, 112, 'LANE PHASE', 'txt label')}
    ${text(210, 326, 'EARLY EDGE', 'txt small')}
    ${pathLine('M160 268 L268 160', 5)}
    ${pathLine('M150 204 L210 152 L270 204', 4)}
    ${pathLine('M150 252 C190 236 230 236 270 252', 4)}
    ${line(178, 176, 242, 240, 2, ' stroke-dasharray="7 7"')}
    ${text(210, 284, 'LP', 'txt label')}
    ${star(112, 210, 6)}
    ${star(308, 210, 6)}
  `
  return { slug: 'lp-stamp-lane-phase', title: 'LP lane phase postage stamp', width: stampSize, height: stampSize, body }
}

function stampQueueReady() {
  const body = `
    ${roundedRect(48, 104, 324, 212, 12, 5)}
    ${roundedRect(70, 126, 280, 168, 8, 2)}
    ${line(142, 126, 142, 294, 2, ' stroke-dasharray="6 8"')}
    ${line(278, 126, 278, 294, 2, ' stroke-dasharray="6 8"')}
    ${text(210, 164, 'QUEUE READY', 'txt label')}
    ${text(210, 224, 'LP', 'txt big')}
    ${text(106, 226, 'A1', 'mono mid')}
    ${text(314, 212, '2347', 'mono small')}
    ${text(314, 238, '34-1', 'mono small')}
    ${text(210, 276, 'MATCH PASS', 'mono micro')}
  `
  return { slug: 'lp-stamp-queue-ready', title: 'LP queue ready ticket postage stamp', width: stampSize, height: stampSize, body }
}

function stampChampionPool() {
  const body = `
    ${circles(210, 210, [{ r: 170, w: 3, dash: '18 8' }, { r: 150, w: 4 }, { r: 84, w: 3 }])}
    ${text(210, 112, 'CHAMPION POOL', 'txt label')}
    ${text(210, 326, 'BEST PICKS', 'txt small')}
    ${[151, 191, 231].map((x) => roundedRect(x, 182, 30, 42, 6, 3)).join('\n')}
    ${[171, 211, 251].map((x) => `<circle class="ink" cx="${x - 5}" cy="204" r="8" stroke-width="3"/>`).join('\n')}
    ${text(210, 272, 'LP', 'txt mid')}
    ${star(118, 210, 6)}
    ${star(302, 210, 6)}
  `
  return { slug: 'lp-stamp-champion-pool', title: 'LP champion pool postage stamp', width: stampSize, height: stampSize, body }
}

function stampPositiveTrend() {
  const body = `
    ${roundedRect(70, 72, 280, 276, 12, 5)}
    ${roundedRect(92, 96, 236, 228, 8, 2, '12 8 3 8')}
    ${text(210, 134, 'APPROVED', 'txt mid')}
    ${line(116, 166, 304, 166, 3)}
    ${text(210, 198, 'POSITIVE TREND', 'txt small')}
    <rect class="ink" x="134" y="236" width="20" height="34" stroke-width="3"/>
    <rect class="ink" x="174" y="218" width="20" height="52" stroke-width="3"/>
    <rect class="ink" x="214" y="198" width="20" height="72" stroke-width="3"/>
    <rect class="ink" x="254" y="176" width="20" height="94" stroke-width="3"/>
    ${line(124, 270, 296, 270, 3)}
    ${text(210, 304, 'LP VERIFIED', 'mono micro')}
  `
  return { slug: 'lp-stamp-positive-trend', title: 'LP positive trend approved postage stamp', width: stampSize, height: stampSize, body }
}

function stampDataSeal() {
  const body = `
    <path class="ink" d="M210 58 L342 132 L342 288 L210 362 L78 288 L78 132 Z" stroke-width="5"/>
    <path class="ink" d="M210 86 L318 146 L318 274 L210 334 L102 274 L102 146 Z" stroke-width="2" stroke-dasharray="7 8"/>
    ${text(210, 142, 'GLOBAL', 'txt small')}
    ${text(210, 184, 'BENCHMARK', 'txt label')}
    ${line(140, 206, 280, 206, 3)}
    ${text(210, 260, 'LP', 'txt big')}
    ${text(210, 302, 'VS EVERYONE', 'mono micro')}
    ${star(128, 210, 6)}
    ${star(292, 210, 6)}
  `
  return { slug: 'lp-stamp-data-seal', title: 'LP global benchmark hex postage stamp', width: stampSize, height: stampSize, body }
}

function stampMatchIntel() {
  const body = `
    ${roundedRect(42, 96, 336, 228, 16, 5)}
    ${roundedRect(64, 118, 292, 184, 10, 2)}
    ${line(108, 118, 108, 302, 2)}
    ${line(312, 118, 312, 302, 2)}
    ${text(210, 154, 'MATCH INTEL', 'txt label')}
    ${pathLine('M158 238 L190 206 L216 224 L262 178', 6)}
    ${pathLine('M250 178 L262 178 L262 190', 4)}
    ${text(210, 274, 'GOOD HABITS', 'txt small')}
    ${text(86, 212, 'LP', 'mono small')}
    ${text(334, 212, 'GG', 'mono small')}
  `
  return { slug: 'lp-stamp-match-intel', title: 'LP match intel postage stamp', width: stampSize, height: stampSize, body }
}

function stampCancellationWaves() {
  const body = `
    ${pathLine('M70 172 C112 142 148 202 190 172 S268 142 310 172 S374 202 410 172', 5)}
    ${pathLine('M70 198 C112 168 148 228 190 198 S268 168 310 198 S374 228 410 198', 5)}
    ${pathLine('M70 224 C112 194 148 254 190 224 S268 194 310 224 S374 254 410 224', 5)}
    ${pathLine('M70 250 C112 220 148 280 190 250 S268 220 310 250 S374 280 410 250', 5)}
    ${pathLine('M70 276 C112 246 148 306 190 276 S268 246 310 276 S374 306 410 276', 5)}
  `
  return { slug: 'lp-cancellation-waves', title: 'LP wavy postage cancellation lines', width: stampSize, height: stampSize, body }
}

const assets = [
  stampPersonalTrends(),
  stampPostGameReport(),
  stampGlobalBenchmark(),
  stampRankClimb(),
  stampWinMore(),
  stampLanePhase(),
  stampQueueReady(),
  stampChampionPool(),
  stampPositiveTrend(),
  stampDataSeal(),
  stampMatchIntel(),
  stampCancellationWaves(),
]

function sheetSvg() {
  const width = 1780
  const height = 1330
  const positions = assets.map((asset, index) => {
    const col = index % 4
    const row = Math.floor(index / 4)
    return {
      asset,
      x: 50 + col * 420,
      y: 35 + row * 420,
    }
  })

  const body = positions
    .map(({ asset, x, y }) => `<g transform="translate(${x} ${y})" aria-label="${asset.title}">\n${asset.body}\n</g>`)
    .join('\n')

  return svgDocument({ title: 'LP postage stamp sheet', width, height, body })
}

async function writeAsset(asset) {
  const svg = svgDocument(asset)
  const svgPath = path.join(outDir, `${asset.slug}.svg`)
  const webpPath = path.join(outDir, `${asset.slug}.webp`)
  await writeFile(svgPath, svg)
  await sharp(Buffer.from(svg)).webp({ lossless: true, quality: 100, effort: 6 }).toFile(webpPath)
  return [svgPath, webpPath]
}

async function main() {
  await mkdir(outDir, { recursive: true })

  const sheet = sheetSvg()
  const sheetSvgPath = path.join(outDir, 'lp-postage-stamp-sheet.svg')
  const sheetWebpPath = path.join(outDir, 'lp-postage-stamp-sheet.webp')
  await writeFile(sheetSvgPath, sheet)
  await sharp(Buffer.from(sheet)).webp({ lossless: true, quality: 100, effort: 6 }).toFile(sheetWebpPath)

  const written = [[sheetSvgPath, sheetWebpPath]]
  for (const asset of assets) {
    written.push(await writeAsset(asset))
  }

  for (const pair of written.flat()) {
    console.log(path.relative(path.resolve(__dirname, '../..'), pair))
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
