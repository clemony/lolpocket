<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { MenubarItemIndicator, MenubarRadioItem, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<MenubarRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'text-3 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <icon
          name="radix-icons:dot-filled"
          class="size-4 fill-current"
        />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
