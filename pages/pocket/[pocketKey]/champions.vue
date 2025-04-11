<script setup lang="ts">

import { useScroll } from '@vueuse/core'

const emit = defineEmits(['update:isShow'])
const target = ref(null)
const {  y } = useScroll(target)
const isShow = ref(false)

watchEffect(() => {
y.value > 80 ? emit('update:isShow', true) : emit('update:isShow', false)
})
const props = defineProps<{
  pocket: pocket
  quote: string | null
}>()

definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  section: 'pocket',
})
const pocket = ref(props.pocket)
const quote = computedAsync (() => {
return props.quote
})

</script>

<template>
  <div class="size-full  overflow-hidden relative">
    <div ref="target" class=" overflow-y-auto absolute inset-0 top-0 left-0">
    <div class="w-full px-17 pt-24 ">
      <h1>
        Champions
      </h1>
      <p class="text-4 font-serif mt-4 font-semibold w-full">
        {{ quote }}
      </p>
    </div>
    <div class="h-full w-full grid   gap-12 mt-8">
      <LazyPocketChampionGrid :pocket="pocket" />
    </div>
  </div>
  </div>
</template>

<style scoped></style>
