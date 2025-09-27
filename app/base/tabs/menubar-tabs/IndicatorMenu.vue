<script setup lang="ts">
import type {
  MenubarMenuProps,
  MenubarTriggerProps,
  TabsTriggerProps,
} from 'reka-ui'
import { MenubarMenu, TabsTrigger } from 'reka-ui'

const props = defineProps<
  MenubarTriggerProps
  & MenubarMenuProps
  & TabsTriggerProps & { class?: HTMLAttributes['class'] }
>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <MenubarMenu
    as-child
    :value="props.value">
    <TabsTrigger
      v-bind="forwarded"
      :class="
        cn(
          'inline-flex gap-3 items-center justify-center whitespace-nowrap  px-3  py-1.25 text-3 z-2 cursor-pointer  hover:text-bc hover:**:text-bc **:text-bc text-bc ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ringneutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20  data-[state=active]:bg-transparent font-medium  data-[state=active]:shadow-none data-[state=active]:text-bc data-[state=active]:**:text-bc ',
          props.class,
        )
      ">
      <slot />
    </TabsTrigger>
  </MenubarMenu>
</template>
