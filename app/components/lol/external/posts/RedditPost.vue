<script lang="ts" setup>
import type { BadgeProps, BlogPostProps } from "@nuxt/ui"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"
import { postAuthorUi, postBadge } from "./postProps"

const { post: p, index } = defineProps<{
  post?: Post
  index: number
}>()

const emit = defineEmits(["setIndex"])
const post = computed(() => safeObject(p))

const hasImage = computed(
  () => post.value?.preview_image_url || post.value?.thumbnail_url
)

const badgeColor: Record<string, BadgeProps["color"]> = {
  Discussion: "pre",
  RiotOfficial: "neutral",
  Esports: "sorc",
  Gameplay: "insp",
  News: "dom"
}

function open() {
  emit("setIndex", index)
}
</script>

<template>
  <UBlogPost
    :key="post.source_id"
    variant="naked"
    :title="post?.title"
    :ui="{
      root: 'group/post h-full max-h-98 min-h-full grow cursor-pointer overflow-hidden',
      title: cn(
        post.metadata?.isVideo || hasImage
          ? 'line-clamp-2 font-bold'
          : !post.metadata?.isVideo && !hasImage!
            ? 'line-clamp-4 max-h-1/2 shrink-0 truncate overflow-hidden text-[1.6rem] font-bold tracking-tight'
            : ''
      ),
      header: post.metadata?.isVideo
        ? 'pointer-events-auto! z-3!'
        : !hasImage
          ? 'hidden'
          : '',
      body: cn(
        'max-h-full pb-2!',
        !post.metadata?.isVideo
          ? 'z-0! flex min-h-0 flex-1 grow flex-col overflow-hidden px-0!'
          : 'px-2!'
      ),
      authors: 'mt-full justify-self-end',
      description: cn(
        'mt-2 line-clamp-8! block min-h-0 truncate bg-transparent leading-6',
        post.metadata?.isVideo || hasImage ? 'hidden!' : ''
      ),
      footer: 'shrink-0'
    }"
    :description="
      post.excerpt?.toString().length ? post.excerpt : undefined
    "
    :date="post.source_created_at"
    :badge="post?.flair ? postBadge(post?.flair) : undefined"
    :authors="[
      {
        name: post?.subreddit ? `/r/${post.subreddit}` : undefined,
        description: post?.author ? `/u/${post.author}` : undefined,
        avatar: uiRedditAvatar,
        ui: postAuthorUi,
        size: 'xs'
      }
    ]"
    :image="
      hasImage
        ? {
            fetchpriority: 'high',
            crossorigin: 'anonymous',
            loading: 'eager',
            src: post.preview_image_url || post.thumbnail_url || undefined,
            preset: 'card'
          }
        : undefined
    "
    @click.stop.prevent="open">
    <template v-if="post?.metadata?.isVideo" #header>
      <button
        class="group/card relative grid size-full cursor-pointer place-items-center overflow-hidden bg-neutral/90">
        <NuxtImg
          :src="(post.preview_image_url || post.thumbnail_url) ?? undefined"
          :alt="post.title"
          fetchpriority="high"
          crossorigin="anonymous"
          loading="eager"
          preset="card"
          class="transition-scale pointer-events-none z-0 size-full object-cover duration-200 group-hover/card:scale-120" />

        <LazyPlayIcon class="opacity-50 drop-shadow-sm" />

        <LazyIcon
          name="i-open"
          class="pointer-events-none absolute top-3 right-3 z-1 size-5.5 text-nc/80 opacity-0 group-hover/card:opacity-100" />
      </button>
    </template>
  </UBlogPost>
</template>
