<script setup lang="ts">
definePageMeta({
  layout: false,
  search: 'hidden',
})

const route = useRoute()

const session = useSummonerSession()

onBeforeMount(async () => {
  const identifier = extractIdentifierFromRoute(route)
  console.log('🥸 - identifier:', identifier)
  if (!identifier) return

  const summoner = await resolveSummoner(identifier)
  session.setSummoner(summoner)

  if (session.summoner) {
    s_data().getMastery()
    s_data().getTimelines()
  }

  if (route.params.puuid) {
    navigateTo({
      name: 'summoner-region-slug',
      params: {
        region: summoner.region.toLowerCase(),
        slug: `${summoner.name.toLowerCase()}_${summoner.tag.toLowerCase()}`,
      },
      replace: true,
    })
  }
})
const { summoner } = storeToRefs(s_session())
const navItem = computed(() => ({
  id: 'current-summoner',
  avatar: {
    src: getSummonerIcon(summoner.value?.icon)
  },
  children: [
    {
      description: 'Fully styled and customizable components for Nuxt.',
      icon: 'history',
      label: 'Match History',
      to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`
    },
    {
      description: 'Fully styled and customizable components for Nuxt.',
      icon: 'lol:champ',
      label: 'Champions',
      to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`
    },
    {
      description: 'Fully styled and customizable components for Nuxt.',
      icon: 'ui:pocket',
      label: 'Pockets',
      to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`
    },
    {
      description: 'Fully styled and customizable components for Nuxt.',
      icon: 'live',
      label: 'Live Match',
      to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`
    },
  ],
  icon: '',
  label: summoner.value?.name,
  to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
  ui: {
    linkLeadingAvatar: 'shadow-xs opacity-90 size-5.5 border border-neutral/60'
  },
}))
</script>

<template>
  <NuxtPage :nav-item />
</template>