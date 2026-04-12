<script lang="ts" setup>
import type { ButtonProps, CarouselProps } from "@nuxt/ui"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"

defineOptions({
  inheritAttrs: false
})

const { index, postList, onSelect } = defineProps<{
  index: number
  onSelect?: (index: number) => void
  postList?: Post[]
}>()

const emit = defineEmits<{ close: [boolean] }>()
const activeIndex = shallowRef(index)
const items = computed<Post[]>(() => postList ?? [])
const post = computed(() => safeObject(items.value[activeIndex.value]))
const open = defineModel<boolean>("open", { default: false })

const hasVideo = (item?: Post | null) =>
  !!(
    item?.video_id ||
    item?.video_hls_url ||
    (item?.video_provider === "reddit" && item?.video_url)
  )

function closeModal() {
  open.value = false
  emit("close", false)
}

function handleSelect(selectedIndex: number) {
  activeIndex.value = selectedIndex
  onSelect?.(selectedIndex)
}

const style = computed(() => ({
  aspectRatio:
    post.value.video_width && post.value.video_height
      ? `${post.value.video_width} / ${post.value.video_height}`
      : "16 / 9"
}))

const bgClass =
  "ring shadow-black/12 ring-p0/10 backdrop-blur-md bg-transparent inset-shadow-[1px_1px_2px] inset-shadow-p3/6  drop-shadow-black/20"

const btnUi: ButtonProps["ui"] = {
  base: cn(
    bgClass,
    "w-i8! anchor h-22! translate-x-0 rounded-6xl bg-transparent shadow-sm ring-p0/8 drop-shadow-sm backdrop-blur-md! hover:bg-p0/50 hover:ring-p0/30 disabled:bg-transparent"
  ),
  leadingIcon: "scale-130 text-shadow-p0 text-shadow-sm **:text-p0/30 "
}

function onClick(e: MouseEvent, dir: "next" | "prev" = "next") {
  e.preventDefault()
  e.stopPropagation()
  handleSelect(dir === "next" ? activeIndex.value + 1 : activeIndex.value - 1)
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="{ onClick: () => closeModal() }"
    :title="post?.title"
    scrollable
    :ui="{
      overlay: 'size-screen overflow-x-hidden',
      content: cn(
        'relative w-full max-w-[min(100vw-1.5rem,100rem)] overflow-visible bg-transparent! shadow-none ring-0'
      )
    }"
    :description="String(post?.excerpt ?? '')">
    <template #content>
      <UCarousel
        v-slot="{ item }"
        ref="carousel"
        arrows
        auto-height
        :prev="{
          onClick: (e: MouseEvent) => onClick(e, 'prev'),
          ui: btnUi
        }"
        :next="{
          onClick: (e: MouseEvent) => onClick(e, 'next'),
          ui: btnUi
        }"
        prev-icon="i-caret-left"
        next-icon="i-tabler-caret-right-filled"
        :slides-to-scroll="1"
        as="div"
        fade
        :items="items"
        :start-index="index"
        data-theme="light"
        :ui="{
          root: 'w-full bg-transparent',
          viewport: 'p-20',
          container: cn(
            'w-full shrink-0 grow justify-center rounded-8xl p-6 shadow-lg drop-shadow-md transition-[height] duration-300 ease-in-out',
            bgClass
          ),
          item: 'flex shrink-0 grow basis-full bg-p0',
          arrows: 'translate-y-0',
          controls:
            'pointer-events-none absolute inset-y-0 right-0 left-0 z-10 translate-y-0 px-3 sm:px-6'
        }"
        @click="closeModal()"
        @select="handleSelect">
        <div
          v-if="hasVideo(item)"
          class="relative w-full overflow-hidden rounded-6xl shadow-sm drop-shadow-md"
          :style>
          <LazyYoutubePlayer
            v-if="open && item.video_provider === 'youtube' && item?.video_id"
            :key="String(item.video_id)"
            ref="video"
            :video-id="String(item.video_id)"
            :title="item.title" />

          <LazyVideo
            v-else-if="
              (open && item.video_provider === 'reddit' && item.video_url) ||
              item?.video_hls_url
            "
            v-slot="{ state }"
            ref="video"
            :key="String(item.video_url || item?.video_hls_url || undefined)"
            :style
            :loop="false"
            :src="String(item.video_url || item?.video_hls_url || undefined)">
            <VideoControls
              :state
              :title="item?.title"
              :source="`${item?.source} /r/${item?.subreddit}`"
              :author="item?.author ?? ''"
              :to="item?.url">
              <template #header>
                <VideoHeader :post="item" />
              </template>
            </VideoControls>
          </LazyVideo>
          <div
            class="pointer-events-none absolute inset-0 z-5 rounded-6xl inset-shadow-[0_2px_0_1px_rgba(0,0,0,0.4)]"></div>
        </div>

        <article
          v-else
          class="pointer-events-auto mx-auto w-full max-w-(--ui-container) rounded-8xl bg-p0 p-6 shadow-lg drop-shadow-md">
          <UPageHeader
            :title="post?.title"
            :description="item?.author ? `u/${item.author}` : ''"
            :ui="{ title: 'font-display text-[3rem]!' }">
            <template #headline>
              <UUser
                size="xs"
                :to="getSubRedditUrl(item?.subreddit)"
                :avatar="uiRedditAvatar"
                :name="item?.source"
                :ui="{
                  description: 'group-hover/user:underline'
                }"
                :description="`/r/${item?.subreddit}`" />
            </template>
          </UPageHeader>

          <UPageBody>
            <div v-if="item?.text" class="text-nc" v-html="item.text" />

            <p v-else-if="item?.excerpt">
              {{ item.excerpt }}
            </p>
          </UPageBody>
        </article>
      </UCarousel>

      <!--         <template #placeholder>
          <VideoPlaceholder
            v-if="(!ready && post?.preview_image_url) || post?.thumbnail_url"
            :thumbnail-src="post?.preview_image_url || post?.thumbnail_url" />
        </template>  -->
    </template>
  </UModal>
</template>
