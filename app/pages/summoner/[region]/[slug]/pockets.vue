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
  title: 'Pockets',
  description: 'Configure your publically available pockets in one spot.',
  icon: 'lucide:folder',
  listClass: '**:stroke-[1.6]',
  order: 3,
  slug: 'pockets',
})

const { summoner } = storeToRefs(s_session())
watch(
  () => summoner.value,
  (v) => {
    console.log('💠 - watch - newVal:', v)
  }
)
</script>

<template>
  <div class="grid w-full justify-center">
    <div class="">
      <LazyBackpackBoxCard
        v-for="pocket in ps().pockets.filter(
          (p) =>
            !(
              ps().pinned.includes(p.key)
              || ps().trash.includes(p.key)
              || ps().archive.includes(p.key)
            ),
        )"
        :key="pocket.key"
        :pocket
        @click="navigateTo(`/pocket/${pocket.key}`)"
      />
    </div>
  </div>
</template>
