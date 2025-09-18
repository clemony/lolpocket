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
    :animate="props.query != null ? 'expanded' : 'collapsed'">
    <div
      class="grid place-items-center size-9.5 z-1 pointer-events-none absolute">
      <icon
        name="search"
        class="size-4.75 shrink-0 text-nc/80 dst" />
    </div>

    <motion.div
      :variants="inputVariants"
      :class="
        cn(
          'border !border-b3/70 btn-circle absolute flex btn   rounded-full items-center',
          props.class,
        )
      ">
      <slot />

      <button
        :disabled="props.query == null"
        class="btn btn-ghost btn-circle btn-xs hover:bg-b3/40 absolute z-2 left-2 pointer-events-auto"
        @click="reset()">
        <icon
          v-if="props.query"
          name="x-sm"
          class="size-5.5 shrink-0 text-bc/70 absolute dst" />
      </button>
    </motion.div>
  </motion.div>
</template>
