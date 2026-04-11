<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"
import { useVideoModal } from "~/composables/ui/useVideoModal"
const { post } = defineProps<{
  post: Post
}>()

const badgeColor: Record<string, BadgeProps["color"]> = {
  Discussion: "pre",
  RiotOfficial: "neutral",
  Esports: "sorc",
  Gameplay: "insp",
  News: "dom"
}
const { openVideoModal } = useVideoModal(post)
</script>

<template>
  <!-- shadow-sm shadow-black/5 drop-shadow-sm drop-shadow-black/5 -->
  <Post :post>
    <template #header>
      <button
        class="group/card relative grid size-full cursor-pointer place-items-center overflow-hidden bg-neutral/90"
        @click.stop.prevent="openVideoModal(post)">
        <NuxtImg
          :src="(post.preview_image_url || post.thumbnail_url) ?? ''"
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
  </Post>
</template>
