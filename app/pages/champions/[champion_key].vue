<script setup lang="ts">
definePageMeta({
  name: 'champion_key',
  path: '/champions/:champion_key',
  props: true,
  search: 'hidden',
})
const route = useRoute()
const championData = await import(
  `#shared/appdata/records/champions/${String(route.params.champion_key)}.ts`
)
const champion = computed(() => championData.default)
const tabs = shallowRef<string>(null)

onMounted(() => {
  tabs.value = route.name.toString()
})
</script>

<template>
  <TabLayout
    v-if="champion"
    icon
    size="lg">
    <!-- splash -->

    <template #background-slice>
      <BackgroundSplashFixed
        v-once
        size="header"
        slice
        :img="
          getSplash(champion.key, 'centered')
        " />
    </template>

    <template #background>
      <BackgroundSplashFixed
        v-once
        size="header"
        :img="
          getSplash(champion.key, 'centered')
        " />
    </template>
    <template #icon>
      <div class="size-20 -ml-2">
        <ChampionIcon
          :id="champion.id"
          class="rounded-full size-20" />
      </div>
    </template>
    <template #header>
      <header class="justify-center grid h-20">
        <h1 class="!text-[2.1] tracking-tight pt-1 font-bold leading-10 dst">
          {{ champion.name }}
        </h1>
        <p class="text-3 px-1 -mt-1 text-bc font-medium italic leading-5">
          {{ champion.title }}
        </p>
      </header>
    </template>

    <div class="size-full flex bg-b1 justify-center gap-6 z-auto">
      <NuxtPage :champion />
    </div>
  </TabLayout>
</template>
