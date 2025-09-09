<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const { class: className, variant, size, shape, hover, to } = defineProps<{
  to: any
  class?: HTMLAttributes['class']
  variant?: any
  size?: any
  hover?: any
  shape?: any
}>()

defineNuxtLink({
  componentName: 'BLink',
  externalRelAttribute: 'noreferrer',
  trailingSlash: 'remove',
  prefetch: true,
  exactActiveClass: 'btn-active',
  prefetchedClass: '',
  prefetchOn: {
    visibility: false,
    interaction: true,
  },
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