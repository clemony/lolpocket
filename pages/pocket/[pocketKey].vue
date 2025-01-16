<script setup lang="ts">
  definePageMeta({
    path: '/pocket/:pocketKey',
  })
  import type { UseScrollReturn } from '@vueuse/core'
  const props = defineProps<{
    pocketKey?: string
    id?: any
  }>()

  const pocket = ref(getPocket(props.pocketKey))

  const ts = useTempStore()

  const routePocket = ref()
  function onScroll(state: UseScrollReturn) {
    console.log(state) // {x, y, isScrolling, arrivedState, directions}
  }

  const dashboard = ref()
  const champions = ref()
  const items = ref()
  const runes = ref()

  const dashboardIsVisible = useElementVisibility(dashboard)
  const championsIsVisible = useElementVisibility(champions)
  const itemsIsVisible = useElementVisibility(items)
  const runesIsVisible = useElementVisibility(runes)

  const currentVisible = ref(null) // Will store the name of the visible element
  const currentRef = ref(dashboard)

  // Group refs, visibility states, and names
  const els = [
    {
      ref: dashboard,
      isVisible: dashboardIsVisible,
      name: 'dashboard',
    },
    {
      ref: champions,
      isVisible: championsIsVisible,
      name: 'champions',
      type: 'champion',
      trigger: true,
      data: pocket.value.champions[0].champions,
    },
    {
      ref: items,
      isVisible: itemsIsVisible,
      name: 'items',
      trigger: true,
      type: 'item',
      data: pocket.value.items[0].itemSets,
    },
    {
      ref: runes,
      isVisible: runesIsVisible,
      name: 'runes',
      trigger: true,
      type: 'rune',
      data: pocket.value.runes[0].runeSets,
    },
  ]

  // Observer setup with custom threshold for each element
  els.forEach(({ ref, isVisible, name }) => {
    useIntersectionObserver(
      ref,
      ([{ isIntersecting }]) => {
        isVisible.value = isIntersecting
        if (isIntersecting) {
          currentVisible.value = name
          pocket.value.component = name
        }
      },
      { threshold: 0.5 } // Adjust this value to control the visibility offset
    )
  })

  watch(
    () => pocket.value.component,
    (newVal) => {
      //console.log(newVal)
    }
  )

  onBeforeRouteUpdate(async (to, from) => {
    if (to.params.pocketKey !== from.params.pocketKey) {
      pocket.value = await getPocket(to.params.pocketKey)
    }
  })

  const header = computed(() => {
    return currentVisible.value
  })
</script>

<template>
  <div :key="pocket.key">
    <header class="bg-b1/60 mask mask-x-3 absolute z-40 mt-[35px] grid h-22 w-full shrink-0 grid-cols-[1fr_4fr_2fr] items-center pt-3.5 pr-8 pl-6 backdrop-blur-md">
      <PocketMenu
        type="dropdown"
        :pocket="pocket"
        align="end">
        <Button
          variant="ghost"
          size="lg"
          class="group justify-start gap-4 px-2 !py-3">
          <PocketIcon
            :pocket="pocket"
            class="relative size-9"
            iconClass=" !p-2.25 rounded-lg " />

          <h2>{{ pocket.name }}</h2>
          <ExpandIndicator class="" />
        </Button>
      </PocketMenu>

      <hgroup class="pointer-events-auto flex items-center px-8">
        <ul class="flex gap-1">
          <li
            v-for="el in els"
            :key="el.name">
            <Button
              variant="ghost"
              size="md"
              as-child>
              <Label
                @click="scrollToSection(el.ref)"
                class="group flex gap-1 rounded-lg font-medium opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-100"
                :class="{
                  'text-bc opacity-100!': el.name == pocket.component,
                }">
                <input
                  type="radio"
                  :value="el.ref"
                  v-model="currentVisible"
                  class="peer hidden" />
                <span class="w-max min-w-max px-1.5 capitalize">
                  {{ el.name }}
                </span>
              </Label>
            </Button>
          </li>
        </ul>
      </hgroup>

      <div
        ref="carouselButtons"
        class="border-b2 rounded-lg border">
        <Button
          variant="ghost"
          size="icon"
          class="border-r-b2 group !rounded-r-none border-r transition-all duration-300">
          <icon
            name="teenyicons:arrow-left-outline"
            class="size-6 opacity-50 transition-all duration-300 group-hover:opacity-100" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          class="group rounded-l-none">
          <icon
            name="teenyicons:arrow-right-outline"
            class="size-6 opacity-50 transition-all duration-300 group-hover:opacity-100" />
        </Button>
      </div>

      <div
        class="absolute -top-px flex self-start opacity-80 transition-all duration-500"
        :class="{
          'translate-x-[11px]': pocket.component == 'dashboard',
          'translate-x-[110px]': pocket.component == 'champions',
          'translate-x-[221px]': pocket.component == 'items',
          'translate-x-[301px]': pocket.component == 'runes',
        }">
        <icon
          name="fluent:line-horizontal-1-24-regular"
          class="-mt-1 size-3" />
      </div>
    </header>

    <div
      id="pocket-contents"
      class="carousel h-full w-[98%] justify-self-center overflow-x-scroll overflow-y-hidden">
      <a
        class="carousel-item relative w-full max-w-full"
        ref="dashboard"
        id="dashboard">
        <NuxtPage v-slot="{ Component }">
          <LazyPocketDashboard
            :pocketKey="pocket.key"
            :key="pocket.key" />
        </NuxtPage>
      </a>
      <a
        class="carousel-item w-full"
        ref="champions"
        id="champions">
        <NuxtPage v-slot="{ Component }">
          <LazyPocketChampions
            :pocketKey="pocket.key"
            :key="pocket.key" />
        </NuxtPage>
      </a>
      <a
        class="carousel-item w-full"
        ref="items"
        id="items">
        <NuxtPage v-slot="{ Component }">
          <LazyPocketItems
            :pocketKey="pocket.key"
            :key="pocket.key" />
        </NuxtPage>
      </a>
      <a
        class="carousel-item w-full"
        ref="runes"
        id="runes">
        <NuxtPage v-slot="{ Component }">
          <LazyPocketRunes
            :pocketKey="pocket.key"
            :key="pocket.key" />
        </NuxtPage>
      </a>
    </div>
  </div>
</template>

<!------------------------⟢ style ⟣------------------------->
<style>
  .v-popper--shown {
    & label {
      opacity: 1;
    }
  }
</style>
