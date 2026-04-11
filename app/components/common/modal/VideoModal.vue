<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const { post } = defineProps<{
  post?: Post | null
}>()

const emit = defineEmits<{ close: [boolean] }>()
const open = defineModel<boolean>("open", { default: false })

const isYouTubeVideo = computed(
  () => post?.video_provider === "youtube" && !!post.video_id
)
const isRedditVideo = computed(
  () =>
    post?.video_provider === "reddit" &&
    !!(post.video_url || post.video_hls_url)
)
const redditVideoSrc = computed(
  () => post?.video_url || post?.video_hls_url || undefined
)

function closeModal() {
  open.value = false
  emit("close", false)
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="{ onClick: () => closeModal() }"
    :title="post?.title"
    :ui="{
      content: cn(
        'aspect-video max-w-(--ui-container) rounded-6xl bg-neutral/60 p-1.5 shadow-sm shadow-black/30 ring-(--ui-n3)/50 ring-offset-1 ring-offset-(--ui-n2)/70 drop-shadow-md backdrop-blur-md'
      )
    }"
    :description="String(post?.excerpt ?? '')">
    <template #content>
      <div
        data-theme="light"
        class="min-size-full relative grid aspect-video size-full w-full grow overflow-hidden rounded-6xl shadow-sm drop-shadow-sm">
        <LazyYoutubePlayer
          v-if="open && isYouTubeVideo && post?.video_id"
          :key="String(post.video_id)"
          ref="video"
          :video-id="String(post.video_id)"
          :title="post.title" />

        <LazyVideo
          v-else-if="open && isRedditVideo && redditVideoSrc"
          v-slot="{ state }"
          ref="video"
          :key="String(redditVideoSrc)"
          :loop="false"
          :src="String(redditVideoSrc)">
          <VideoControls
            :state
            :title="post?.title"
            :source="`/r/${post?.source}/${post?.subreddit}`"
            :author="post?.author ?? ''"
            :to="post?.url" />
        </LazyVideo>
        <div
          class="pointer-events-none absolute z-5 size-full rounded-6xl inset-shadow-[0_2px_0_1px_rgba(0,0,0,0.4)]"></div>
      </div>
      <!--         <template #placeholder>
          <VideoPlaceholder
            v-if="(!ready && post?.preview_image_url) || post?.thumbnail_url"
            :thumbnail-src="post?.preview_image_url || post?.thumbnail_url" />
        </template>  -->
    </template>
  </UModal>
</template>
