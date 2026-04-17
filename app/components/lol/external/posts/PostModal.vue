<script lang="ts" setup>
import type { UsePostModalReturn } from "./post.types"

defineOptions({
  inheritAttrs: false
})

const { post, ctrls } = defineProps<{
  post: Post | null
  ctrls: UsePostModalReturn["ctrls"]
}>()

const emit = defineEmits<{ close: [boolean] }>()

const open = defineModel<boolean>("open", { default: false })
const currentPost = computed(() => post)

const hasVideo = (item?: Post | null) =>
  item?.video_id ||
  item?.video_hls_url ||
  (item?.video_provider === "reddit" && item?.video_url)

function closeModal() {
  open.value = false
  emit("close", false)
}

const style = computed(() => ({
  aspectRatio:
    currentPost.value?.video_width && currentPost.value?.video_height
      ? `${currentPost.value.video_width} / ${currentPost.value.video_height}`
      : "16 / 9"
}))

const bgClass =
  "ring shadow-black/12 ring-p0/10 backdrop-blur-md bg-transparent inset-shadow-[1px_1px_0px] inset-shadow-p3/6  drop-shadow-black/20 bg-p0/3 "

const btnUi = {
  base: cn(
    bgClass,
    "anchor pointer-events-auto my-auto translate-x-0 rounded-full mix-blend-screen shadow-sm inset-ring-0 ring-p0/8 drop-shadow-sm fx-1! hover:bg-p0/40! hover:ring-p0/40 focus-visible:bg-p0/8! focus-visible:hover:bg-p0/40! disabled:hidden"
  ),
  leadingIcon:
    "scale-130 text-p0/30 text-shadow-p0 text-shadow-sm group-hover/btn:text-pc/80"
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="{ onClick: () => closeModal(), ui: { base: bgClass } }"
    :title="currentPost?.title"
    :ui="{
      footer: 'pointer-events-none fixed top-0 right-0 w-screen!',
      header:
        'pointer-events-none absolute mx-auto flex size-px justify-center justify-self-center',
      overlay: 'size-screen max-h-screen overflow-hidden p-3',
      content: cn(
        'fx-noise grid max-h-full items-center divide-none overflow-visible rounded-8xl p-0 shadow-none',
        bgClass,
        hasVideo(currentPost) ? 'max-w-[min(100vw-1.5rem,100rem)]' : 'max-w-4xl'
      ),
      body: 'max-h-[92vh]',
      title: 'sr-only',
      description: 'sr-only',
      close: 'absolute'
    }"
    :description="String(currentPost?.excerpt ?? '')">
    <!-- transition-[height] duration-300 -ms-4 flex w-full shrink-0 flex-row items-center-->
    <template #header>
      <div
        :aria-hidden="false"
        class="absolute my-auto flex w-screen flex-nowrap items-center justify-between justify-self-center px-24">
        <UButton
          v-for="ctrl in ctrls"
          :key="ctrl.label"
          variant="ghost"
          :disabled="ctrl.disabled?.value"
          :ui="btnUi"
          size="xl"
          :icon="ctrl.icon"
          @click.stop.prevent="ctrl.onClick" />
      </div>
    </template>
    <template #body>
      <div :key="String(currentPost?.id ?? currentPost?.source_id ?? '')">
        <div
          :class="
            cn(
              'relative size-full max-h-[88vh] overflow-hidden rounded-6xl shadow-sm drop-shadow-md',
              hasVideo(currentPost)
                ? 'aspect-video inset-ring inset-ring-neutral'
                : ''
            )
          ">
          <template v-if="currentPost && hasVideo(currentPost)">
            <LazyYoutubePlayer
              v-if="
                open &&
                currentPost.video_provider === 'youtube' &&
                currentPost.video_id
              "
              :key="String(currentPost.video_id)"
              ref="video"
              :video-id="String(currentPost.video_id)"
              :title="currentPost.title" />

            <LazyVideo
              v-else-if="
                (open &&
                  currentPost.video_provider === 'reddit' &&
                  currentPost.video_url) ||
                currentPost.video_hls_url
              "
              v-slot="{ state }"
              ref="video"
              :key="
                String(
                  currentPost.video_url ||
                    currentPost.video_hls_url ||
                    undefined
                )
              "
              :style
              :loop="false"
              :src="
                String(
                  currentPost.video_url ||
                    currentPost.video_hls_url ||
                    undefined
                )
              ">
              <VideoControls
                :state
                :title="currentPost.title"
                :source="`${currentPost.source} /r/${currentPost.subreddit}`"
                :author="currentPost.author ?? ''"
                :to="currentPost.url">
                <template #header>
                  <VideoHeader :post="currentPost" />
                </template>
              </VideoControls>
            </LazyVideo>
          </template>
          <TextPost v-else-if="currentPost" :post="currentPost" />
        </div>
      </div>
      <!--         <template #placeholder>
          <VideoPlaceholder
            v-if="(!ready && post?.preview_image_url) || post?.thumbnail_url"
            :thumbnail-src="post?.preview_image_url || post?.thumbnail_url" />
        </template>  -->
    </template>
  </UModal>
</template>
