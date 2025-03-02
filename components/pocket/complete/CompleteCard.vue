<script lang="ts" setup>
import { fonts } from 'components/app/ui/input/fonts'
import * as htmlToImage from 'html-to-image'
import { toBlob, toJpeg, toPixelData, toPng, toSvg } from 'html-to-image'
import download from 'downloadjs'

const props = defineProps<{
  pocket: pocket
  download: boolean
}>()

const pocket = ref(props.pocket)
const ts = useTempStore()

// TODO nuxt bg here

const fontClass1 = computed (() => {
  const a = fonts.find(f => f.id == pocket.value.card.font[0])
  return ''
  a.cardClass ? a.cardClass : ''
})
const fontClass2 = computed (() => {
  const a = fonts.find(f => f.id == pocket.value.card.font[1])
  return ''
  a.cardClass ? a.cardClass : ''
})

const cardName = computed (() => {
  const c = pocket.value.champions.default && pocket.value.champions.default.name ? `${pocket.value.champions.default.name}-` : ''
  const r = pocket.value.roles[0] && pocket.value.roles[0] != 'all' ? `${pocket.value.roles[0]}-` : ''
  const n = pocket.value.name ? `${pocket.value.name}-` : ''
  return `${(c + r + n).toLowerCase().replace(' ', '-')}pocket`
})

const pocketCardRef = ref<HTMLElement>(null)

async function downloadPng() {
  await pocketCardRef.value
  console.log('💠 - cardName - cardName :', cardName)
  console.log('💠 - downloadPng - downloadPng:', downloadPng)
  console.log('💠 - downloadPng - pocketCardRef.value:', pocketCardRef.value)
  htmlToImage.toPng(pocketCardRef.value, { quality: 0.95, backgroundColor: '#FFFFFF' })
    .then(dataUrl => download(dataUrl, `${cardName.value}.png`))
}

watchEffect(() => {
  props.download ? downloadPng() : ''
})

//
</script>

<template>
  <div ref="pocketCardRef" class="inset-shadow-sm border-b3/70 border size-full relative rounded-2xl object-contain  aspect-square ">
    <div
      class="size-full overflow-hidden  rounded-2xl transition-all duration-500  gradient-mask-l-0"
      :class="{ '!grayscale-0': pocket.card.filter, 'grayscale': !pocket.card.filter || !pocket.card.splash }">
      <div
        :style="{ backgroundImage: `url(${pocket.card.splash || 'https://universe.communitydragon.org/events/2024/anima-squad-embed-2024/images/bg-index-index.2630f6.jpg'})`,
                  backgroundPositionX: `${pocket.card.align}%`,
        }"
        class="size-full bg-cover  gradient-mask-t-0" />
    </div>

    <div class="absolute grid grid-cols-[1.5fr_1fr] h-full top-0 inset-0 left-0 pt-28 px-16">
      <div class="flex flex-col **:select-none">
        <div class="">
          <h3
            class="text-9 dst tracking-tight pl-3"
            :style="{ fontFamily: pocket.card.font[1] }"
            :class="fontClass2">
            {{ pocket.champions.default && pocket.champions.default.name ? `${pocket.champions.default.name}\'s` : '' }} Pocket
          </h3>
          <h1
            class="text-12 tracking-tight drop-shadow-sm"
            :style="{ fontFamily: pocket.card.font[0] }"
            :class="fontClass1">
            {{ pocket.name ?? '' }}
          </h1>
        </div>

        <div class="h-auto space-y-12 mt-20">
          <template v-for="(set, i) in pocket.complete.items" :key="i">
            <template v-if="set && set.items.length && set != null && set.items[0].id != 0">
              <CompleteItemSets :set="pocket.complete.items[i]" :pocket="pocket" />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>