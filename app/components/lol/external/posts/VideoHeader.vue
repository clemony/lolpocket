<script lang="ts" setup>
import type { BlogPostProps } from "@nuxt/ui"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"
import { postAuthorUi } from "./postProps"

const { post, class: className } = defineProps<{
  post: Post
  class?: HTMLAttributes["class"]
}>()

const bind = computed(() => ({
  variant: "naked" as BlogPostProps["variant"],
  source_id: post.source_id,
  title: post.title,
  description: "",
  to: post.permalink,
  badge: "",
  authors: [
    {
      name: post?.subreddit ? `r/${post.subreddit}` : "",
      description: post?.author ? `u/${post.author}` : "",
      ui: mergeUi(postAuthorUi, {
        description: "text-nc",
        name: "text-nc  "
      }),
      avatar: uiRedditAvatar,
      size: "xs"
    }
  ] as BlogPostProps["authors"]
}))
console.log("🥸 - bind:", post.source)
</script>

<template>
  <div
    :class="cn('absolute top-0 left-0 h-max max-w-1/2 px-6 py-4', className)">
    <!--   <Tooltip
      :interactive="false"
      as="div"
      label="View on Reddit"
      side="top"
      :flip="false"> -->
    <UBlogPost
      v-bind="bind"
      :to="post.permalink"
      class="text-nc"
      :ui="{
        root: 'group/root pointer-events-auto size-max w-full opacity-70 drop-shadow-sm transition-opacity duration-200 ease-in-out hover:opacity-100',
        body: 'w-full',
        title:
          'pointer-events-none line-clamp-2 text-2xl text-wrap text-nc group-hover/root:underline',
        authors: 'inline-flex items-center text-nc',
        badge: 'text-nc'
      }">
      <template #title>
        {{ post.title }}
        <Icon name="i-external" class="inline scale-70 align-icon text-nc" />
      </template>
    </UBlogPost>
    <!--  </Tooltip> -->
  </div>
</template>
