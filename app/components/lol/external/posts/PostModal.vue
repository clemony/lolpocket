<script lang="ts" setup>
import type { ButtonProps, CarouselProps } from "@nuxt/ui"
import { VisuallyHidden } from "reka-ui"
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
  "ring shadow-black/12 ring-p0/10 backdrop-blur-md bg-transparent inset-shadow-[1px_1px_0px] inset-shadow-p3/6  drop-shadow-black/20 bg-p0/3 "

const btnUi = {
  base: cn(
    bgClass,
    "w-i8! anchor pointer-events-auto my-auto h-22! translate-x-0 rounded-2xl mix-blend-screen shadow-sm inset-ring-0 ring-p0/8 drop-shadow-sm fx-1! hover:bg-p0/40! hover:ring-p0/40 disabled:bg-transparent"
  ),
  leadingIcon:
    "scale-130 text-p0/30 text-shadow-p0 text-shadow-sm group-hover/btn:text-pc/80"
}

type Skip<T extends string> = "next" | "prev"
const ctrls: Record<Skip<string>, string> = {
  prev: "i-caret-left",
  next: "i-caret-right"
}

function onClick(e: MouseEvent, dir: Skip<string> = "next") {
  e.preventDefault()
  e.stopPropagation()
  handleSelect(dir === "next" ? activeIndex.value + 1 : activeIndex.value - 1)
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="{ onClick: () => closeModal(), ui: { base: bgClass } }"
    :title="post?.title"
    scrollable
    :ui="{
      footer: 'pointer-events-none fixed top-0 right-0 w-screen!',
      header: 'pointer-events-none fixed inset-0 flex size-full',
      overlay: 'size-screen overflow-x-hidden p-3',
      content: cn(
        'relative max-w-[min(100vw-1.5rem,100rem)] grow divide-none overflow-visible bg-transparent! shadow-none ring-0'
      ),
      title: 'sr-only',
      description: 'sr-only',
      close: 'absolute'
    }"
    :description="String(post?.excerpt ?? '')">
    <!-- transition-[height] duration-300 -ms-4 flex w-full shrink-0 flex-row items-center
    <template #title>
      <VisuallyHidden>{{ post?.title }}</VisuallyHidden>
    </template>-->
    <template #header>
      <div
        class="absolute my-auto flex w-full flex-nowrap items-center justify-between px-24">
        <UButton
          v-for="[k, v] in Object.entries(ctrls)"
          :key="k"
          variant="ghost"
          :ui="btnUi"
          :icon="v"
          @click.stop.prevent="onClick($event, k as Skip<string>)" />
      </div>
    </template>
    <template #body>
      <div
        :class="
          cn(
            'flex h-max w-full shrink-0 grow items-center justify-center rounded-8xl p-6 transition-[height] duration-300 ease-in-out',
            bgClass
          )
        ">
        <UCarousel
          v-slot="{ item }"
          ref="carousel"
          auto-height
          prev-icon=""
          next-icon="i-tabler-caret-right-filled"
          :slides-to-scroll="1"
          as="div"
          :items="items"
          fade
          :start-index="index"
          data-theme="light"
          :ui="{
            root: 'w-full bg-transparent',
            viewport: 'w-full grow overflow-hidden bg-transparent!',
            container: '',
            item: cn(
              'relative min-w-0 shrink-0 basis-1/1 shadow-sm drop-shadow-md'
            ),
            arrows: 'translate-y-0',
            controls:
              'pointer-events-none fixed inset-x-0 z-10 translate-y-0 px-26'
          }"
          @select="handleSelect">
          <div class="size-full overflow-hidden rounded-6xl bg-p0">
            <div v-if="hasVideo(item)" class="" :style>
              <LazyYoutubePlayer
                v-if="
                  open && item.video_provider === 'youtube' && item?.video_id
                "
                :key="String(item.video_id)"
                ref="video"
                :video-id="String(item.video_id)"
                :title="item.title" />

              <LazyVideo
                v-else-if="
                  (open &&
                    item.video_provider === 'reddit' &&
                    item.video_url) ||
                  item?.video_hls_url
                "
                v-slot="{ state }"
                ref="video"
                :key="
                  String(item.video_url || item?.video_hls_url || undefined)
                "
                :style
                :loop="false"
                :src="
                  String(item.video_url || item?.video_hls_url || undefined)
                ">
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
              :class="cn('pointer-events-auto mx-auto w-full max-w-3xl')">
              <UPageHeader
                :title="post?.title"
                :description="item?.author ? `u/${item.author}` : ''"
                :ui="{
                  title:
                    'font-display text-[3rem]! font-black tracking-tight drop-shadow-sm'
                }">
                <template #headline>
                  <UUser
                    size="2xs"
                    :to="getSubRedditUrl(item?.subreddit)"
                    :avatar="uiRedditAvatar"
                    :name="item?.source"
                    :ui="{
                      root: 'gap-1',
                      description: 'group-hover/user:underline'
                    }"
                    :description="`/r/${item?.subreddit}`" />
                </template>

                <template #description>
                  <template v-if="item?.source_created_at">
                    posted {{ useTimeAgo(item?.source_created_at) }}
                  </template>
                  <template v-if="item?.author">
                    by {{ `u/${item.author}` }} at
                  </template>
                  <template v-if="item?.updated_at">
                    (edited {{ item?.updated_at }})
                  </template>
                </template>
              </UPageHeader>

              <UPageBody>
                <NuxtImg
                  v-if="post.preview_image_url || post.thumbnail_url"
                  :src="
                    (post.preview_image_url || post.thumbnail_url) ?? undefined
                  "
                  :alt="post.title"
                  fetchpriority="high"
                  class="w-full rounded-3xl object-cover shadow-md drop-shadow-md"
                  crossorigin="anonymous"
                  loading="eager" />
                <div
                  v-if="item?.text"
                  class="whitespace-pre-line text-pc"
                  v-html="item.text" />

                <p v-else-if="item?.excerpt">
                  {{ item.excerpt }}
                </p>
              </UPageBody>
            </article>
          </div>
        </UCarousel>
      </div>
      <!--         <template #placeholder>
          <VideoPlaceholder
            v-if="(!ready && post?.preview_image_url) || post?.thumbnail_url"
            :thumbnail-src="post?.preview_image_url || post?.thumbnail_url" />
        </template>  -->
    </template>
  </UModal>
</template>
