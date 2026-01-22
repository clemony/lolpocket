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

const props = withDefaults(
  defineProps<
    MenubarCheckboxItemProps & {
      class?: HTMLAttributes['class']
      checkboxType?: 'tick' | 'switch' | 'checkbox' | 'tick-end'
    }
  >(),
  {
    checkboxType: 'tick',
  },
)

const emits = defineEmits<MenubarCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    :class="
      cn('relative flex cursor-default items-center gap-2.5 rounded-sm px-2 py-1.5 text-sm font-medium outline-none select-none focus:bg-b2 focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        { ' pl-8': !props.checkboxType || props.checkboxType === 'tick' },
        props.class,
      )
    ">
    <span
      :class="
        cn('absolute right-1.5 flex h-fit w-fit items-center justify-center',
          { 'left-2': !props.checkboxType || props.checkboxType === 'tick' },
        )
      ">
      <Switch
        v-if="props.checkboxType === 'switch'"
        v-model:model-value="forwarded.modelValue as boolean"
        class="scale-70 justify-self-end" />
      <MenubarItemIndicator v-else>
        <icon
          name="tick-sm"
          class="mr-1 size-6" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarCheckboxItem>
</template>
