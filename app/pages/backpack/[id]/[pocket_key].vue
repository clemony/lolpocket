<script lang="ts" setup>
definePageMeta({
  layout: false,
  props: true,
  search: false
})

const route = useRoute("pocket")
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const mainSet = computed(() => {
  const runes = pocket.value?.runes
  if (!runes || !pocket.value?._runes) return null
  return runes.find((s: RuneSet) => s.id === pocket.value?._runes) ?? null
})

const selectedSet = computed(() => {
  const s = pocket.value?.spells?.find((s) => s.id === pocket.value?._spells)
  if (!s) return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <div>
    <NuxtLayout
      v-if="pocket && route.name !== 'pocket-core'"
      name="folder"
      class="z-auto grid min-h-screen w-4/5 justify-self-center bg-p0 px-14"
      :pocket>
      <NuxtPage :pocket="pocket" />
    </NuxtLayout>
  </div>
</template>
