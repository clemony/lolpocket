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
  trailingSlash: 'remove',
  prefetch: true,
  prefetchedClass: '',
  prefetchOn: {
    visibility: false,
    interaction: true,
  },
})
</script>

<template>
  <NuxtLink
    :class="
      cn(
        ' transition-all hover:opacity-30 duration-250 inline-block underline text-nowrap',
        className,
      )
    "
    v-bind="$attrs"
    :to="to">
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
