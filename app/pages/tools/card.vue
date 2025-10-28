<script setup lang="ts">
import type { ZoomableEvent } from 'vue-zoomable'
import VueZoomable from 'vue-zoomable'
import 'vue-zoomable/dist/style.css'

const { card } = defineProps<{
  card: Card
}>()

definePageMeta({
  name: 'card',
  title: 'Card Builder',
  icon: 'lucide:square-pen',
  path: '/tools/card',
})

<<<<<<< HEAD
// @todo nuxt bg here
=======
// TODO nuxt bg here
>>>>>>> refs/remotes/origin/main

/* const fontClass1 = computed (() => {
  const a = fonts.find(f => f.id===card.font[0])
  return ''
  a.cardClass ? a.cardClass : ''
})
const fontClass2 = computed (() => {
  const a = fonts.find(f => f.id===card.font[1])
  return ''
  a.cardClass ? a.cardClass : ''
})
 */
const zoom = ref<number>(1)
const pan = ref<Record<string, number>>({ x: 0, y: 0 })

const isMenuOpen = ref<boolean>(true)
const isSettingsOpen = ref<boolean>(true)

const pocketCardRef = ref<HTMLDivElement>(null)

onMounted(() => {
  ps().pocketCardRef = pocketCardRef.value
})
// getSplash(card.splash) ||
const img = useImage()
const splash = computed(
  () =>
    'https://universe.communitydragon.org/events/2024/anima-squad-embed-2024/images/bg-index-index.2630f6.jpg'
)
console.log('💠 - card.splash:', card.splash)
</script>

<template>
  <div
<<<<<<< HEAD
    class="relative grid h-full w-full items-center justify-center overflow-hidden">
=======
    class="h-full w-full grid items-center relative justify-center overflow-hidden">
>>>>>>> refs/remotes/origin/main
    <!--

      <div class="px-1 dst">
        A simple, customizable build card for your  Easily download, share, and reference a basic overview of your loadout.
      </div>
      <Field :title="props.champions.children.length !== 1 ? 'Champions' : 'Champion'">
        <p class=" dst">
          Select a main champion and splash art to display for this
        </p>
        <div group class="grid grid-flow-row auto-cols-auto select-none h-fit pt-1  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center place-items-center  gap-4 mx-auto w-full">
          <template v-if="champions.children.length">
            <template v-for="champion in champions.children" :key="champion.id">
              <ChampionDropdown :champion="champion" :pocket="pocket" />
            </template>
          </template>

          <Placeholder v-else class="size-21 bg-b3/70 p-2.5">
            <i-no-champ class="opacity-10  dst" />
          </Placeholder>
        </div>
      </Field>

      <div class="grid grid-cols-2 w-full gap-8">
        <CompleteRuneSelect :pocket="pocket" />
        <LazySpellField :pocket="pocket" />
      </div>
      <ItemSetSelect
        v-for="(set, i) in card.items" :key="i"
        :title="card.items[i] && card.items[i].name ? card.items[i].name : 'Item Set'" class="p-0" :pocket="pocket" :index="useToNumber(i).value" />
    </div> -->

    <VueZoomable
      v-model:zoom="zoom"
      v-model:pan="pan"
      selector="#pocket-card"
      :min-zoom="0.5"
      :max-zoom="2"
      :wheel-zoom-step="0.01"
<<<<<<< HEAD
      class="relative grid h-screen w-full place-items-center overflow-hidden">
      <div
        id="pocket-card"
        ref="pocketCardRef"
        class="border-b3/70 shadow-smooth rounded-box relative aspect-square h-300 w-300 border object-contain inset-shadow-sm"
=======
      class="h-screen w-full grid place-items-center relative overflow-hidden">
      <div
        id="pocket-card"
        ref="pocketCardRef"
        class="inset-shadow-sm border-b3/70 border h-300 shadow-smooth w-300 relative rounded-box object-contain aspect-square"
>>>>>>> refs/remotes/origin/main
        :style="{
          backgroundImage: `linear-gradient(130deg, ${card.color} 0%, #FFFFFF 60%)`,
        }">
        <div
<<<<<<< HEAD
          class="mask-right-100 size-full overflow-hidden rounded-2xl transition-all duration-500"
=======
          class="size-full overflow-hidden rounded-2xl transition-all duration-500 mask-right-100"
>>>>>>> refs/remotes/origin/main
          :class="{ grayscale: card.filter === 'grayscale' }">
          <div
            alt="pocket-card-bg"
            :style="{
              backgroundImage: `url(${img(splash, { quality: 100 })})`,
              backgroundPositionX: `${card.align}%`,
            }"
<<<<<<< HEAD
            class="mask-top size-full bg-cover" />
        </div>

        <div
          class="absolute inset-0 top-0 left-0 grid h-full grid-cols-[1.5fr_1fr] px-16 pt-28">
=======
            class="size-full bg-cover mask-top" />
        </div>

        <div
          class="absolute grid grid-cols-[1.5fr_1fr] h-full top-0 inset-0 left-0 pt-28 px-16">
>>>>>>> refs/remotes/origin/main
          <div class="flex flex-col **:select-none">
            <!--         <div class="">
              <h3
                class="text-9 dst tracking-tight pl-3"
                :style="{ fontFamily: card.font[1] }"
                :class="fontClass2">
                {{ card.champion ? `${card.champion}\'s` : '' }} Pocket
              </h3>

              <h1
                class="text-12 tracking-tight drop-shadow-sm"
                :style="{ fontFamily: card.font[0] }"
                :class="fontClass1">
                {{ ix().champNameByKey(card.champion) ?? '' }}
              </h1>
            </div> -->

<<<<<<< HEAD
            <div class="mt-20 h-auto space-y-12">
=======
            <div class="h-auto space-y-12 mt-20">
>>>>>>> refs/remotes/origin/main
              <template
                v-for="(set, i) in card.items"
                :key="i">
                <template
                  v-if="
                    set
                      && set !== undefined
                      && card.items.length
                      && set !== null
                      && card.items[0] !== undefined
                      && card.items[0] !== null
                  ">
                  <!-- CompleteItemSets
                    :set="card.items[i]"
                    :pocket="pocket" /> -->
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </VueZoomable>
    <!--
    <BasicCardSettings :pocket="pocket" /> -->
  </div>
</template>

<style scoped></style>
