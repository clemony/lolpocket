<script setup lang="ts">
definePageMeta({
  name: 'champion_key',
  path: '/champions/:champion_key',
  props: true,
  search: 'hidden',
})
const route = useRoute()
const championData = await import(
  `@appdata/records/champions/${String(route.params.champion_key)}.ts`
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
      <div class="-ml-2 size-20">
        <ChampionIcon
          :id="champion.id"
          class="size-20 rounded-full" />
      </div>
    </template>
    <template #header>
      <header class="grid h-20 justify-center">
        <h1 class="dst pt-1 leading-10 font-bold tracking-tight !text-[2.1]">
          {{ champion.name }}
        </h1>
        <p class="text-3 text-bc -mt-1 px-1 leading-5 font-medium italic">
          {{ champion.title }}
        </p>
      </header>
    </template>

    <div class="bg-b1 z-auto flex size-full justify-center gap-6">
      <NuxtPage :champion />
    </div>
  </TabLayout>
</template>
