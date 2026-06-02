<script lang="ts" setup>
definePageMeta({
  layout: false,
  search: false
})

const route = useRoute("pocket")
console.log("🥸 - route:", route)
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))
/* const mainSet = computed(() => {
  const runes = pocket.value?.runes
  if (!runes || !pocket.value?._runes) return null
  return runes.find((s: RuneSet) => s.id === pocket.value?._runes) ?? null
})

const selectedSet = computed(() => {
  const s = pocket.value?.spells?.find((s) => s.id === pocket.value?._spells)
  if (!s) return null
  const { id, ...rest } = s
  return rest
}) */
</script>

<template>
  <div class="contents">
    <PocketHeader :pocket="pocket" />
    <NuxtPage :pocket="pocket" />
  </div>
</template>
