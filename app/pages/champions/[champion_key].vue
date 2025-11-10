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
    size="12">
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
        <h1 class="pt-1 !text-[2.1] leading-10 font-bold tracking-tight dst">
          {{ champion.name }}
        </h1>
        <p class="-mt-1 px-1 text-3 leading-5 font-medium text-bc italic">
          {{ champion.title }}
        </p>
      </header>
    </template>

    <div class="z-auto flex size-full justify-center gap-6 bg-b1">
      <NuxtPage :champion />
    </div>
  </TabLayout>
</template>
