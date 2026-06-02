<script lang="ts" setup>
import type { UsePostModalReturn } from "~/domain/nexus/types/post.types"

defineOptions({
  inheritAttrs: false
})

const { post, ctrls } = defineProps<{
  post: Post | null
  ctrls: UsePostModalReturn["ctrls"]
}>()
const emit = defineEmits<{ close: [boolean] }>()

console.log("🥸 - post:", post)

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

const textOpen = shallowRef<boolean>(false)
const openPost = useToggle(textOpen)

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

const videoComponent = computed(() => {
  if (!currentPost.value || !hasVideo(currentPost.value)) return null
  const reddit = defineAsyncComponent(
    () => import("~~/layers/ui/app/components/media/player/Video.vue")
  )
  const youtube = defineAsyncComponent(
    () => import("~~/layers/ui/app/components/media/player/YoutubePlayer.vue")
  )

  if (
    currentPost.value.video_provider === "youtube" &&
    currentPost.value.video_id
  )
    return youtube
  else if (
    (currentPost.value.video_provider === "reddit" &&
      currentPost.value.video_url) ||
    currentPost.value.video_hls_url
  )
    return reddit

  return null
})
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
          class="relative size-full max-h-[88vh] scrollbar-none overflow-x-hidden overflow-y-auto rounded-6xl">
          <div
            v-if="currentPost && hasVideo(currentPost)"
            class="aspect-video rounded-6xl shadow-sm inset-ring inset-ring-neutral drop-shadow-md">
            <component
              :is="videoComponent"
              v-if="open && videoComponent"
              ref="video"
              :key="
                String(
                  currentPost.video_url ||
                    currentPost.video_hls_url ||
                    String(currentPost.video_id) ||
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
              "
              :video-id="String(currentPost.video_id)"
              :title="currentPost.title">
              <VideoControls
                :thumbnail-src="
                  currentPost.preview_image_url ?? currentPost.thumbnail_url
                "
                :title="currentPost.title"
                :source="`${currentPost.source} /r/${currentPost.subreddit}`"
                :author="currentPost.author ?? ''"
                :to="currentPost.url">
                <template #header>
                  <VideoHeader :post="currentPost" />
                </template>
              </VideoControls>
            </component>
          </div>
          <UCollapsible
            v-if="hasVideo(currentPost) && currentPost?.text"
            v-model:open="textOpen"
            :ui="{
              root: 'z-auto mt-5 flex w-full grow flex-col gap-6',
              content:
                'order-first rounded-6xl bg-p0/90 shadow-sm drop-shadow-md'
            }">
            <template #content>
              <TextPost :post="currentPost" />
            </template>
          </UCollapsible>

          <TextPost
            v-else-if="!hasVideo(currentPost) && currentPost"
            :post="currentPost"
            class="bg-p0/90 shadow-sm drop-shadow-md" />
        </div>

        <div
          v-if="hasVideo(currentPost) && currentPost?.text"
          class="flex h-12 min-h-12 w-full shrink-0">
          <UButton
            leading-icon="i-right"
            :ui="{
              base: 'w-fit rounded-xl px-6',
              leadingIcon: cn('transition-all duration-200', {
                '-rotate-90': textOpen
              })
            }"
            color="neutral"
            :label="!textOpen ? 'Read Post...' : 'Collapse Post'"
            @click="openPost()" />
        </div>
      </div>
    </template>
  </UModal>
</template>
