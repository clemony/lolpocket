<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { useCommand } from './cindex'

const props = defineProps<
  PrimitiveProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const { filterState } = useCommand()
const isRender = computed(
  () => !!filterState.search && filterState.filtered.count === 0
)
</script>

<template>
  <Primitive
    v-if="isRender"
    v-bind="delegatedProps"
    :class="cn('py-6 text-center text-2', props.class)">
    <slot />
  </Primitive>
</template>
