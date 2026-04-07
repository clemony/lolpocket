<script lang="ts" setup>
import { modalXlClass } from "~~/layers/ui/app/variants/modal"
const { post } = defineProps<{
  post: RedditPost
}>()

const emit = defineEmits<{ close: [boolean] }>()

const open = ref(false)
const isLoaded = shallowRef<boolean>(false)
const { proxy } = useScriptYouTubePlayer({})

function onReady() {
  isLoaded.value = true
}
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title="post.title"
    fullscreen
    :ui="modalXlClass"
    :description="String(post.excerpt)">
    <slot />
    <template #content>
      <div class="aspect-video w-full overflow-hidden rounded-xl bg-black">
        <LazyScriptYouTubePlayer
          v-if="open && post.video_provider === 'youtube' && post.video_id"
          hydrate-on-visible
          :video-id="String(post.video_id)"
          trigger="immediate"
          loading="async"
          crossorigin="anonymous"
          :player-vars="{
            autoplay: 1,
            playsinline: 1,
            rel: 0,
            crossOrigin: 'anonymous'
          }"
          @ready="onReady" />
        <LazyVideo
          v-else-if="
            open &&
              post.video_provider === 'reddit' &&
              (post.video_url || post.video_hls_url)
          "
          hydrate-on-visible
          :src="String(post.video_url || post.video_hls_url)" />
      </div>
    </template>
  </UModal>
</template>
