<script setup lang="ts">
import { NavigationMenuViewport, type NavigationMenuViewportProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="absolute top-full flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center bg-b1/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg border border-b3/60 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-md md:w-(--radix-navigation-menu-viewport-width)',
          props.class,
        )
      "
    />
  </div>
</template>
