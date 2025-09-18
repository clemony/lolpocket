<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion
}>()

definePageMeta({
  name: 'champion_overview',
  title: 'Overview',
  order: 1,
})

const route = useRoute()
const { scrollToHash } = useScrollToHash('#container', -26)

onMounted(() => {
  if (route.hash)
    scrollToHash({ instant: true })
})

watch(
  () => route.hash,
  () => {
    scrollToHash()
  }
)
</script>

<template>
  <main
    id="container"
    class="overflow-y-auto size-full flex gap-28">
    <ChampionIndexAside :champion />
    <article class="grow w-full py-22 h-max pb-16 gap-10 flex flex-col">
      <ChampionAbility
        v-for="ability in champion.abilities"
        :key="ability.key"
        :ability />
    </article>
  </main>
</template>
