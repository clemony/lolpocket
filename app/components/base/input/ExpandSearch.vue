<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string
  query?: string
}>()


const variants = {
  collapsed: {
    borderRadius: '100%',
    gap: 0,
    padding: 0
  },
  expanded: {
    width: '220px',
    borderRadius: '1.2rem',
    padding: '10px',
    gap: '10px'
  },
}

const inputVariants = {
  collapsed: {
    width: 0,
    opacity: 0,
  },
  expanded: {
    width: '200px',
    opacity: 100,
  },
}

const emit = defineEmits(['update:reset'])

const query = ref(null)

function reset(){
  query.value = null
emit('update:reset')
}

onMounted (() => {
query.value = props.query
})
</script>

<template>
  <motion.div
    :class="cn('border !border-b3/70 btn-circle relative flex btn   rounded-full items-center', props.class)"
    :variants="variants"
    initial="collapsed"
    :transition="{
      duration: 0.3,
      type: 'easeOut' }"
    while-hover="expanded"
    :animate="props.query != null ? 'expanded' : 'collapsed'">
    <motion.div :variants="inputVariants">
      <slot>
      <Input v-model="query" type="text" class="size-full border-0 shadow-none py-0 m-0" :placeholder="props.placeholder" />
      </slot>
    </motion.div>
    <button @click="reset()" :disabled="props.query == null" class="btn btn-ghost btn-circle btn-xs  hover:bg-b3/40 absolute  z-2 left-2 pointer-events-auto">
      <icon name="x-sm" v-if="props.query" class="size-5.5 shrink-0 text-bc/70 absolute dst"/>
      <icon v-else   name="search" class="size-4.75 shrink-0 text-bc/70 absolute   dst" />
    </button>


    
  </motion.div>
</template>