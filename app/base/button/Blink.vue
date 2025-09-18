<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const {
  class: className,
  hover,
  shape,
  size,
  to,
  variant,
} = defineProps<{
  to: any
  class?: HTMLAttributes['class']
  variant?: any
  size?: any
  hover?: any
  shape?: any
}>()

defineNuxtLink({
  componentName: 'Blink',
  exactActiveClass: 'btn-active',
  externalRelAttribute: 'noreferrer',
  prefetch: false,
  prefetchedClass: '',
  prefetchOn: {
    interaction: false,
    visibility: false,
  },
  trailingSlash: 'remove',
})
</script>

<template>
  <Button
    as-child
    :class="cn('duration-50', className)"
    v-bind="{ variant, size, shape, hover }">
    <NuxtLink
      v-bind="$attrs"
      :to="to">
      <slot />
    </NuxtLink>
  </Button>
</template>
