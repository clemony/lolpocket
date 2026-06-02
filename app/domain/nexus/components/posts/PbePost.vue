<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { formatDate } from "@vueuse/core"
const props = withDefaults(
  defineProps<
    BlogPostProps & {
      class?: HTMLAttributes["class"]
      size?: "md" | "lg"
    }
  >(),
  {
    size: "md",
    variant: "naked"
  }
)

const delegated = reactiveOmit(props, ["class"])

const sizes: Record<string, Record<string, HTMLAttributes["class"]>> = {
  md: {},
  lg: {
    header: "max-w-120"
  }
}
</script>

<template>
  <!--  <UBlogPost
    v-if="data"
    v-bind="delegated"
    :badge="{
      size: 'sm',
      variant: 'solid',
      color: 'neutral',
      ui: {
        base: '-translate-x-0.5',
        label: '  text-xs'
      }
    }"
    :ui="{
      root: cn(
        'pointer-events-auto! flex! h-full min-h-full max-w-320 cursor-pointer flex-row! flex-nowrap items-center px-1! py-4! **:text-start'
      ),
      title: 'mb-2! tracking-tight group-hover/post:underline',
      image:
        'transition-scale duration-200 ease-out group-hover/post:scale-110',
      header: cn('mt-0 w-120 max-w-120 overflow-hidden rounded-3xl'),
      body: cn('max-h-70 justify-start')
    }"
    title=
    :to="data.url"
    external
    target="_blank"
    :image="{
      fetchpriority: 'high',
      crossorigin: 'anonymous',
      loading: 'eager',
      src,
      preset: 'card'
    }">
  </UBlogPost> -->d
</template>
