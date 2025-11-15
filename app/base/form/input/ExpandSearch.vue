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
    :variants="variants"
    initial="collapsed"
    while-hover="expanded"
    class="relative grid size-9.5"
    :animate="props.query !== null ? 'expanded' : 'collapsed'">
    <div
      class="pointer-events-none absolute z-1 grid size-9.5 place-items-center">
      <icon
        name="search"
        class="size-4.75 shrink-0 text-nc/80 dst" />
    </div>

    <motion.div
      :variants="inputVariants"
      :class="
        cn(
          `
            btn absolute flex btn-circle items-center rounded-full border
            border-b3/70!
          `,
          props.class,
        )
      ">
      <slot />

      <button
        :disabled="props.query === null"
        class="
          btn pointer-events-auto absolute left-2 z-2 btn-circle btn-ghost
          btn-xs
          hover:bg-b3/40
        "
        @click="reset()">
        <icon
          v-if="props.query"
          name="x-sm"
          class="absolute size-5.5 shrink-0 text-bc/70 dst" />
      </button>
    </motion.div>
  </motion.div>
</template>
