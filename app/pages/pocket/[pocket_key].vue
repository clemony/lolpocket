<script lang="ts" setup>
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})
definePageMeta({
  props: true,
  search: 'hidden',
})

const route = useRoute('pocket')
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value._runes),
)

const selectedSet = computed(() => {
  const s = pocket.value.spells?.find(
    s => s.id === pocket.value._spells,
  )
  if (!s)
    return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <TabLayout v-if="pocket && route.name !== 'pocket-core'">
    <template #crumb>
      <PocketMenubar />
    </template>

    <!-- splash -->

    <template #background>
      <BgSplash
        v-memo="[pocket.icon]"
        size="header"
        :img="pocket?.icon" />
    </template>

    <template #background-slice>
      <BgSplash
        v-memo="[pocket.icon]"
        size="header"
        slice
        :img="pocket?.icon" />
    </template>

    <template #header>
      <PocketHeader :pocket="pocket" />
    </template>

    <div class="z-auto grid min-h-screen w-4/5 justify-self-center bg-b1 px-14">
      <NuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>

    <!--
  -->

    <!--   -->
  </TabLayout>

  <div
    v-else
    class="h-screen w-screen">
    <NuxtPage
      v-if="pocket"
      :pocket="pocket" />
  </div>
</template>
