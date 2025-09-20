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
