<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const { class: className, to } = defineProps<{
  to: any
  class?: HTMLAttributes['class']
}>()

defineNuxtLink({
  componentName: 'InlineLink',
  externalRelAttribute: 'noreferrer',
  prefetch: true,
  prefetchedClass: '',
  prefetchOn: {
    interaction: true,
    visibility: false,
  },
  trailingSlash: 'remove',
})
</script>

<template>
  <NuxtLink
    v-bind="$attrs"
    :class="
      cn(
        'inline-block text-nowrap underline transition-all duration-250 hover:opacity-30',
        className,
      )
    "
    :to="to"
  >
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
