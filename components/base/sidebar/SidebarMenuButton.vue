<script setup lang="ts">
import SidebarMenuButtonChild from './SidebarMenuButtonChild.vue'
import type { SidebarMenuButtonProps } from './SidebarMenuButtonChild.vue'
import { useSidebar } from './utils'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(
  defineProps<
    SidebarMenuButtonProps & {
      tooltip?: string | Component
      size?: string
    }
  >(),
  {
    as: 'button',
    variant: 'default',
    size: 'default',
  },
)
const ts = useTempStore()
const as = useAccountStore()

// const savedState = ref(as.sidebarState)

const { isMobile, state } = useSidebar()
watch(
  () => state,
  (newVal) => {
    console.log(newVal)
  },
)
const delegatedProps = computed(() => {
  const { tooltip, ...delegated } = props
  return delegated
})
</script>

<template>
  <SidebarMenuButtonChild
    v-if="!tooltip"
    v-bind="{ ...delegatedProps, as: props.as as string, ...$attrs }"
  >
    <slot />
  </SidebarMenuButtonChild>

  <TooltipRoot v-else>
    <TooltipTrigger as-child>
      <SidebarMenuButtonChild
        v-bind="{
          ...delegatedProps,
          as: props.as as string,
          ...$attrs,
        }"
        class="cursor-pointer"
      >
        <slot />
      </SidebarMenuButtonChild>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      align="center"
      :hidden="state !== 'collapsed' || isMobile"
      class="border-b3 invisible opacity-0"
      :class="{ 'visible opacity-100': state == 'collapsed' }"
    >
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>
      <component
        :is="tooltip"
        v-else
      />
    </TooltipContent>
  </TooltipRoot>
</template>
