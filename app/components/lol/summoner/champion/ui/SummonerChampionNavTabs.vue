<script lang="ts" setup>
const { scrollY } = useScrollInject()

// const tt = await tabTransform()

const items = [
  { path: "", title: "Match History" },
  { path: "/champions", title: "Champions" },
  { path: "/pockets", title: "Pockets" },
  { path: "/live", title: "Live" },
]

const route = useRoute()
const routeRoot = computed(() => `/${route.params.region}/${route.params.slug}`)
const isChampionDetail = computed(() => Boolean(route.params.champion_key))

function isActive(path: string) {
  if (path === "/champions") {
    return (
      route.path === `${routeRoot.value}/champions` || isChampionDetail.value
    )
  }
  return route.path === `${routeRoot.value}${path}`
}
</script>

<template>
  <nav
    :class="
      cn(
        'relative z-3 flex h-15 w-fit translate-x-10 items-end transition-none *:select-none **:text-sm'
      )
    ">
    <ChampionNavTab
      v-for="(item, i) in items"
      :key="i"
      :active="isActive(item.path)"
      @click="navigateTo(`${routeRoot}${item.path}`)">
      <Icon
        v-if="isChampionDetail && item.path === '/champions'"
        class="absolute -left-6 size-3.75 **:stroke-[2.4]"
        name="left" />
      {{ item.title }}
    </ChampionNavTab>
  </nav>
</template>
