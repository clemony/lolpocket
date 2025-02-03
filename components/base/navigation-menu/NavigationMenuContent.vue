<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from 'radix-vue'
import { NavigationMenuContent, useForwardPropsEmits } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

/* data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 */
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="
      cn(
        ' top-0 left-0 w-full md:absolute md:w-auto bg-b1/90 !backdrop-blur-md',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuContent>
</template>
