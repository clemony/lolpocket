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
  twitterTitle: '[twitter:title]',
})
definePageMeta({
  layout: false,
  props: true,
  search: 'hidden',
})

const route = useRoute('pocket')
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value._runes)
)

const selectedSet = computed(() => {
  const s = pocket.value.spells?.find(s => s.id === pocket.value._spells)
  if (!s) return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <NuxtLayout
    v-if="pocket && route.name !== 'pocket-core'"
    class="bg-b1 z-auto grid min-h-screen w-4/5 justify-self-center px-14"
    name="tab"
    :pocket
  >
    <NuxtPage v-if="pocket" :pocket="pocket" />
  </NuxtLayout>

  <NuxtPage v-else :pocket="pocket" />
</template>
