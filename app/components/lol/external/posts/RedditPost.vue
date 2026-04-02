<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"
import { postAuthorUi, postBadge } from "./postProps"

const { post } = defineProps<{
  post: RedditPost
}>()

const badgeColor: Record<string, BadgeProps["color"]> = {
  Discussion: "pre",
  RiotOfficial: "neutral",
  Esports: "sorc",
  Gameplay: "insp",
  News: "dom"
}
const WWW = /^www\./
function getYouTubeVideoId(url?: string | null) {
  if (!url) return null

  const parsed = new URL(url)
  const host = parsed.hostname.replace(WWW, "")

  if (host === "youtu.be") return parsed.pathname.slice(1) || null

  if (["youtube.com", "m.youtube.com"].includes(host)) {
    if (parsed.pathname === "/watch") return parsed.searchParams.get("v")
    if (parsed.pathname.startsWith("/shorts/"))
      return parsed.pathname.split("/")[2] || null
    if (parsed.pathname.startsWith("/embed/"))
      return parsed.pathname.split("/")[2] || null
  }

  return null
}

const youtubeVideoId = computed(() => getYouTubeVideoId(post.url))
console.log("🥸 - youtubeVideoId:", youtubeVideoId)
</script>

<template>
  <!-- shadow-sm shadow-black/5 drop-shadow-sm drop-shadow-black/5 -->
  <UBlogPost
    :key="post.source_id"
    variant="naked"
    :ui="{
      root: 'group/post h-full min-h-full grow',
      title: cn(
        'shrink-0 overflow-hidden',
        !post.preview_image_url && !post.thumbnail_url
          ? 'tracking-tight text-2xl font-bold line-clamp-4'
          : !post.preview_image_url && !post.thumbnail_url && !post.excerpt
            ? 'text-[1.6rem] line-clamp-none'
            : 'line-clamp-2'
      ),
      header: 'pointer-events-auto! z-3!',
      body: cn(
        'z-0! flex min-h-0 flex-1 grow flex-col overflow-hidden pb-2!',
        !post.preview_image_url && !post.thumbnail_url ? 'px-0!' : 'px-2!'
      ),
      authors: 'mt-full justify-self-end',
      description:
        'mt-2 line-clamp-8! block min-h-0 truncate bg-transparent leading-6',
      footer: 'shrink-0'
    }"
    :title="post?.title"
    :description="
      post.preview_image_url || post.thumbnail_url
        ? undefined
        : (post.excerpt as string | undefined)
    "
    :date="post.source_created_at"
    :to="post.permalink"
    external
    target="_blank"
    :badge="post?.flair ? postBadge(post?.flair) : undefined"
    :authors="[
      {
        name: post?.subreddit ? `r/${post.subreddit}` : undefined,
        description: post?.author ? `u/${post.author}` : undefined,
        avatar: {
          icon: 'i-ui-reddit-square',
          ui: {
            icon: 'text-white scale-90',
            root: 'bg-[#FF5700] '
          }
        },
        ui: postAuthorUi,
        size: 'xs'
      }
    ]"
    :image="post.preview_image_url || post.thumbnail_url || undefined">
    <template v-if="youtubeVideoId" #header>
      <VideoModal :post :video-id="youtubeVideoId">
        <UCard
          as="button"
          :ui="{
            root: 'group/card grid size-full cursor-pointer overflow-hidden bg-neutral/90 p-0',
            body: 'grid size-full place-items-center overflow-hidden'
          }">
          <NuxtImg
            :src="(post.preview_image_url || post.thumbnail_url) ?? ''"
            :alt="post.title"
            :width="400"
            :height="300"
            :quality="50"
            format="webp"
            class="transition-scale pointer-events-none z-0 size-full object-cover duration-200 group-hover/card:scale-120" />

          <PlayIcon />

          <Icon
            name="i-open"
            class="pointer-events-none absolute top-3 right-3 z-1 size-5.5 text-nc/80" />
        </UCard>
      </VideoModal>
    </template>
  </UBlogPost>
</template>
