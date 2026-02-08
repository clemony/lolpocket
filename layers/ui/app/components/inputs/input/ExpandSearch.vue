<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string
  query?: string
}>()

const emit = defineEmits(['update:reset'])

const variants = {
  collapsed: {},
  expanded: {},
}

const inputVariants = {
  collapsed: {
    width: '30px',
  },
  expanded: {
    width: '220px',
  },
}

const query = ref<string>(null)

function reset() {
  query.value = null
  emit('update:reset')
}

onMounted(() => {
  query.value = props.query
})
</script>

<template>
  <motion.div
    class="relative grid size-9.5"
    :variants="variants"
    initial="collapsed"
    while-hover="expanded"
    :animate="props.query !== null ? 'expanded' : 'collapsed'">
    <div
      class="pointer-events-none absolute z-1 grid size-9.5 place-items-center">
      <icon
        class="size-4.75 shrink-0 text-nc/80 dst"
        name="search" />
    </div>

    <motion.div
      :variants="inputVariants"
      :class="
        cn(
          'btn absolute flex btn-circle items-center rounded-full border border-p3/70!',
          props.class,
        )
      ">
      <slot />

      <button
        class="btn pointer-events-auto absolute left-2 z-2 btn-circle btn-ghost btn-xs hover:bg-p3/40"
        :disabled="props.query === null"
        @click="reset()">
        <icon
          v-if="props.query"
          class="absolute size-5.5 shrink-0 text-pc/70 dst"
          name="x-sm" />
      </button>
    </motion.div>
  </motion.div>
</template>
