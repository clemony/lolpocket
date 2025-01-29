<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { MenubarItem, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<MenubarItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="
      cn(
        'text-3 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center gap-4 rounded-sm px-2 py-1.5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:size-4.5 [&_svg]:opacity-90',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </MenubarItem>
</template>
