<script lang="ts" setup>
import type { Easing } from "motion-v"
import { motion } from "motion-v"

import type { BadgeProps, BlogPostProps } from "@nuxt/ui"
import { description } from "valibot"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"
import { postAuthorUi, postBadge } from "./postProps"

const {
  post: p,
  index,
  orientation = "vertical"
} = defineProps<
  BlogPostProps & {
    post?: Post
    index: number
  }
>()

const emit = defineEmits<{
  openPost: [post: Post, index: number]
}>()
const post = computed(() => p ?? null)

const hasImage = computed(
  () => post.value?.preview_image_url || post.value?.thumbnail_url
)

const badgeColor: Record<string, HTMLAttributes["class"]> = {
  Discussion: "ring-insp-200! **:ring-insp-200!",
  RiotOfficial: "ring-dom",
  Esports: "ring-gold! **:ring-gold!",
  Gameplay: "ring-sorc",
  News: "ring-res"
}

function openPost() {
  if (!post.value) return

  emit("openPost", post.value, index)
}

const postVariants = {
  default: {},
  hover: {}
}

const transition = {
  duration: 0.2,
  ease: "easeOut" as Easing
}
</script>

<template>
  <UBlogPost
    v-if="post && orientation === 'vertical'"
    :key="post.source_id"
    variant="naked"
    as="button"
    :title="post?.title"
    :ui="{
      root: 'group/post h-full max-h-98 min-h-full max-w-260 grow cursor-pointer overflow-hidden **:text-start',
      title: cn({
        'line-clamp-2 font-bold': post.metadata?.isVideo || hasImage,
        'line-clamp-4 max-h-1/2 shrink-0 truncate overflow-hidden text-[1.6rem] font-bold tracking-tight':
          !post.metadata?.isVideo && !hasImage && orientation === 'vertical'
      }),
      header: cn('after:play-mask', {
        'pointer-events-auto! px-1 py-2 z-3!': post.metadata?.isVideo,
        hidden: !hasImage && orientation === 'vertical'
      }),
      image: '',
      body: cn(
        'h-full max-h-full self-start',
        !post.metadata?.isVideo
          ? 'z-0! flex min-h-0 flex-1 grow flex-col overflow-hidden px-0!'
          : 'px-2!'
      ),
      authors: 'mt-full shrink-0 justify-self-end',
      description: cn(
        'mt-2 h-full max-h-full min-h-0 truncate overflow-hidden bg-transparent leading-6',
        post.metadata?.isVideo || hasImage ? 'hidden!' : ''
      ),
      footer: cn('shrink-0')
    }"
    :description="post.excerpt?.toString().length ? post.excerpt : undefined"
    :date="useTimeAgo(post.source_created_at).value"
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
            src: post.preview_image_url || post.thumbnail_url || undefined
          }
        : undefined
    "
    @click.stop.prevent="openPost">
  </UBlogPost>

  <Motion
    as-child
    layout
    :variants="postVariants"
    while-hover="hover"
    :transition
    initial="default">
    <UBlogPost
      v-if="post && orientation === 'horizontal'"
      variant="naked"
      as="button"
      :orientation
      :title="post?.title"
      :date="useTimeAgo(post.source_created_at).value"
      :badge="{
        label: post?.flair ? post.flair : undefined,
        size: 'xs',
        icon: 'i-hash',
        variant: 'solid',
        color: 'neutral',
        ui: {
          base: cn(
            'inline-flex -translate-x-0.5 gap-px py-0.5!',
            post?.flair ? badgeColor[post?.flair] : ''
          ),
          label: 'text-xs font-semibold',
          leadingIcon: cn('align-icon')
        }
      }"
      :ui="{
        root: cn(
          'pointer-events-auto! flex! h-full min-h-full max-w-320 cursor-pointer flex-row! flex-nowrap items-center px-1! py-4! **:text-start'
        ),
        title: 'mb-2! tracking-tight group-hover/post:underline',
        image:
          'transition-scale duration-200 ease-out group-hover/post:scale-110',
        header: cn('mt-0 w-120 max-w-120 overflow-hidden rounded-3xl', {
          'relative flex flex-col h-70 w-120 p-4 origin-bottom items-end justify-end overflow-hidden bg-neutral text-start ':
            !post?.metadata?.isVideo && !hasImage
        }),
        body: cn('max-h-70 justify-start')
      }"
      :authors="[
        {
          name: post?.subreddit ? `/r/${post.subreddit}` : undefined,
          description: post?.author ? `/u/${post.author}` : undefined,
          avatar: uiRedditAvatar,
          ui: postAuthorUi,
          size: 'xs'
        }
      ]"
      :image="{
        fetchpriority: 'high',
        crossorigin: 'anonymous',
        loading: 'eager',
        src: post.preview_image_url || post.thumbnail_url || undefined,
        preset: 'card'
      }"
      :description="post.excerpt?.toString().length ? post.excerpt : undefined"
      @click.stop.prevent="openPost">
      <template v-if="!post?.metadata?.isVideo && !hasImage" #header>
        <div
          class="absolute top-28 flex translate-y-0 flex-col justify-end gap-1 overflow-hidden px-4 transition-all duration-200 ease-spring-soft group-hover/post:-translate-y-full group-hover/post:opacity-0">
          <Grow />
          <Icon name="i-mingcute-quote-left-fill" class="size-7 text-nc" />
          <h2
            class="line-clamp-3 size-full overflow-hidden border-transparent pb-1 font-serif text-6xl leading-9 font-semibold text-wrap text-nc">
            {{ post?.title }}
          </h2>
        </div>
        <div
          class="absolute top-4 size-full shrink-0 translate-y-full flex-col justify-start gap-1 overflow-hidden px-4 opacity-0 transition-all duration-200 ease-spring-soft group-hover/post:translate-y-0 group-hover/post:opacity-100">
          <Icon
            name="i-mingcute-quote-left-fill"
            class="mb-1 ml-4 size-7 text-nc" />
          <h2
            class="line-clamp-6 px-4 font-serif text-6xl leading-8.5 font-semibold text-wrap text-nc">
            {{ post?.title }}
          </h2>
        </div>
      </template>
    </UBlogPost>
  </Motion>
</template>
