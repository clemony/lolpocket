<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    placeholder?: string
  }>(),
  {
    placeholder: '',
  }
)

const emit = defineEmits(['update:model-value'])
const target = useTemplateRef('target')
function focusInput() {
  target.value.focusInput()
}
defineExpose({
  focusInput,
})

const delegated = omitUIProps(props)
const forwarded = useForwardPropsEmits(delegated)
</script>

<template>
  <Input
    v-bind="forwarded"
    ref="target"
    data-slot="input-group-control"
    :placeholder
    :class="
      cn(
        'peer flex-1 rounded-none border-0 bg-transparent shadow-none inset-shadow-none ring-offset-transparent outline-0 focus-within:ring-0 hover:ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent',
        props.class,
      )
    "
    @update:model-value="(e) => emit('update:model-value', e)" />
</template>
