<script setup lang="ts">
import { motion } from "motion-v"

/* const hover = shallowRef<boolean>(false)
const debounced = refDebounced(hover, 400)

const active = computed (() => open.value || debounced.value)

watch(() => active.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
}) */

defineOptions({
  inheritAttrs: false,
})

const {
  class: className,
  k,
  pocket: p,
} = defineProps<{
  class?: HTMLAttributes["class"]
  k: string
  pocket: Pocket
}>()

const pocket = computed(() => p)

const open = shallowRef<boolean>(false)

const loaded = ref(false)

const variants = {
  loaded: {
    opacity: 1,
    scale: 1,
  },
  unloaded: {
    opacity: 0,
    scale: 0.8,
  },
}
const isDefaultFilters = computed(() => {
  const f = cs().filters
  return (
    !f.attackType?.length &&
    !f.position &&
    f.query === "" &&
    !f.resource &&
    !f.role &&
    f.sort === "az"
  )
})
onBeforeMount(() => {
  if (isDefaultFilters.value) {
    console.log("🌱 - cs().filters === defaultFilters:", isDefaultFilters.value)
  }
  loaded.value = true
})
</script>

<template>
  <motion.div
    :key="k"
    :variants
    :initial="loaded ? 'loaded' : 'unloaded'"
    :animate="loaded ? 'loaded' : 'unloaded'"
    exit="unloaded"
    layout="position">
    <UPopover v-model:open="open">
      <UButton
        v-bind="$attrs"
        :class="
          cn(
            'target group relative grid aspect-square size-full cursor-context-menu! rounded-lg ring-pc/50 ring-offset-p0 transition-all duration-300 **:cursor-context-menu open:ring open:ring-offset-3 hover:ring-2 focus:ring focus:ring-offset-3',
            className
          )
        "
        tabindex="0">
        <Champion class="size-full" :k role="button" @loaded="loaded = true" />
      </UButton>
      <PocketChampionMenu v-if="open" :pocket :k />
    </UPopover>
  </motion.div>
</template>
