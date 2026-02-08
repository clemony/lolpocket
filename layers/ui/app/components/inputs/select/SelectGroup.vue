<script setup lang="ts">
import type { SelectGroupProps } from 'reka-ui'
import { SelectGroup } from 'reka-ui'

const props = defineProps<
  SelectGroupProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup
    v-bind="delegatedProps"
    :class="cn('w-full', props.class)">
    <slot />
  </SelectGroup>
</template>
