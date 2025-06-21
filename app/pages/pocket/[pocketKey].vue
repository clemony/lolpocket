<script setup lang="ts">
const { puuid } = defineProps<{
  puuid?: string
}>()
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)

/* const props = defineProps<{
pocket: pocket
}>() */
const route = useRoute()
definePageMeta({
  props: true,
  section: 'pocket',
  search: false,
})

const pocket = ref(getPocket(route.params.pocketKey))
</script>

<template>
  <main class="flex relative size-full overflow-hidden">
    <PocketSidebar />

    <article class="size-full relative overflow-y-auto">
      <LazyNuxtPage
        :pocket="pocket"
        :puuid="puuid" />
    </article>
  </main>
</template>
