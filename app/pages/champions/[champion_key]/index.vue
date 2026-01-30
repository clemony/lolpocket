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
  if (route.hash) scrollToHash({ instant: true })
})

watch(
  () => route.hash,
  () => {
    scrollToHash()
  }
)
</script>

<template>
  <main id="container" class="z-auto mx-auto flex gap-28">
    <ChampionIndexAside :champion />
    <article class="z-auto flex h-max w-full grow flex-col gap-10 py-22 pb-16">
      <ChampionAbility
        v-for="ability in champion.abilities"
        :key="ability.key"
        :ability
      />
    </article>
    <AbilityNav :champion />
  </main>
</template>
