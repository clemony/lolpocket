<script setup lang="ts">
import { MenubarCheckboxItem, type MenubarCheckboxItemEmits, type MenubarCheckboxItemProps, MenubarItemIndicator, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'text-2 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <icon
          name="teenyicons:check-outline"
          class="h-4 w-4"
        />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
