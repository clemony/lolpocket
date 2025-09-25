<script setup lang="ts">
import 'tippy.js/themes/light.css'
import { useSingleton } from 'vue-tippy'

definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  alias: '/pocket/:pocket_key/champions',
  order: 1,
  path: '/pocket/:pocket_key',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)

const triggers = useTemplateRef<HTMLElement[]>('triggers')

onMounted(() => {
  useSingleton(triggers, {
    moveTransition: 'transform 0.2s ease-out',
    offset: [-3, 5],
  })
})
</script>

<template>
  <div class="size-full z-auto overflow-y-auto pt-12 -mr-34 pr-30">
    <div
      class="flex gap-8 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg -top-12 py-4 pl-13 pr-16 items-center justify-end w-full">
      <SelectedChampions :pocket="pocket" />
      <Input
        v-model="searchQuery"
        aria-label="Search champions"
        placeholder="Search champions..."
        class="max-w-100 border-b4/60 w-100"
        type="text"
        @clear:input="searchQuery = ''">
        <icon name="search" />
      </Input>
    </div>

    <div
      class="h-fit pb-34 grid grid-flow-row auto-cols-auto pt-14 grid-cols-[repeat(auto-fill,minmax(80px,1fr))] pl-16 pr-24 w-full inset-0 gap-3">
      <button
        v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
        :key="champion.id"
        v-tippy="{
          content: `
          <a href='/champions/${champion.key}' class='flex gap-1 items-center'>
            ${champion.name}
            <i class='icon-link size-3.5'></i>
          </a>
        `,
          placement: 'bottom',
          theme: 'light',
          onCreate: (instance) => triggers?.push(instance),
        }"
        class="hover-ring cursor-pointer rounded-lg size-26">
        <ChampionIcon
          :id="champion.id"
          class="rounded-lg"
          :title="champion.name">
          <PrismaticShine
            v-if="pocket.champions.includes(champion.key)"
            class="scale-114 pointer-events-none" />
          <input
            v-model="pocket.champions"
            :aria-label="champion.name"
            type="checkbox"
            :value="champion.key"
            class="peer hidden" />
        </ChampionIcon>
      </button>
    </div>
  </div>
</template>

<!--       <ChampionQuote
        v-once
        class="italic text-xs font-normal absolute top-6 right-16" /> -->
