<script setup lang="ts">
import type {
  MenubarCheckboxItemEmits,
  MenubarCheckboxItemProps,
} from 'reka-ui'
import {
  MenubarCheckboxItem,
  MenubarItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(defineProps<MenubarCheckboxItemProps & {
  class?: HTMLAttributes['class']
  checkboxType?: 'tick' | 'switch' | 'checkbox' | 'tick-end'
}>(), {
  checkboxType: 'tick'
})

const emits = defineEmits<MenubarCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm gap-2.5 py-1.5 px-2 text-2 outline-none focus:bg-b2 font-medium focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50', { ' pl-8': !props.checkboxType || props.checkboxType === 'tick' },
        props.class,
      )
    ">
    <span :class="cn('absolute right-1.5 flex w-fit h-fit items-center justify-center', { 'left-2': !props.checkboxType || props.checkboxType === 'tick' })">

      <Switch
        v-if="props.checkboxType === 'switch'"
        v-model:model-value="forwarded.modelValue as boolean"
        class="scale-70 justify-self-end" />
      <MenubarItemIndicator
        v-else>
        <icon
          name="tick-sm"
          class="size-6 mr-1" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarCheckboxItem>
</template>
