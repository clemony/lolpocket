/* import * as htmlToImage from 'html-to-image'
import { toBlob, toJpeg, toPixelData, toPng, toSvg } from 'html-to-image'
import download from "downloadjs";

const props = defineProps<{
  pocket: pocket
}>()
definePageMeta({
  name: 'complete',
})

const pocketCardRef = ref<HTMLElement>(null)
function downloadPng(pocketCard, cardName) {
  htmlToImage.toPng(pocketCardRef.value, { quality: 0.95, cacheBust: true })
    .then(dataUrl => download(dataUrl, `${cardName}.png`))
} */