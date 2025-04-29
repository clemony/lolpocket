<script lang="ts" setup>
import { useForwardPropsEmits, type RadioGroupRootEmits, type RadioGroupRootProps } from 'reka-ui'

const props = defineProps<RadioGroupRootProps & {
  class?: HTMLAttributes['class']
  contrast?: boolean}>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

</script>

<template>

  <div v-bind="forwarded"  :class="cn('flex flex-col', props.class)">
    <slot />
  </div>
</template>