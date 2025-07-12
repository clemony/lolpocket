<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey: string
}>()
const ps = usePocketStore()
const ix = useIndexStore()

const pocket = computed (() => ps.pockets.find(p => p.key == pocketKey) || null)
</script>

<template>
  <span class="size-9">
    <LazyPocketIcon :image="pocket.icon" class="size-9 rounded-full shrink-0" hydrate-on-visible />
  </span>

  <span class="truncate text-nowrap">
    {{ pocket.name }}
  </span>
</template>