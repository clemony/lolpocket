<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    NuxtLinkProps & {
      class?: HTMLAttributes['class']

      size?: ButtonVariants['size']
      variant?: ButtonVariants['variant']
    }
  >(),
  {
    base: 'btn',
    hover: 'link',
    on: 'btn',
    size: 'md',
  }
)

const delegated = omitUIProps(props)
const forwarded = useForwardProps(delegated)
</script>

<template>
  <NuxtLink
    v-bind="forwarded"
    exact-active-class="btn-active"
    trailing-slash="remove"
    no-prefetch
    external-rel-attribute="noopener noreferrer"
    :class="
      cn(
        'overflow-hidden capitalize duration-50',
        props.class,
      )
    ">
    <slot />
  </NuxtLink>
</template>
