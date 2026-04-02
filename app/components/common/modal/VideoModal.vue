<script lang="ts" setup>
import { modalXlClass } from "~~/layers/ui/app/variants/modal"
const { post, videoId } = defineProps<{
  post: RedditPost
  videoId: string
}>()

const emit = defineEmits<{ close: [boolean] }>()

const open = ref(false)
const isLoaded = shallowRef<boolean>(false)
const { proxy } = useScriptYouTubePlayer({})

const { YT } = await proxy
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
        <ScriptYouTubePlayer
          v-if="open"
          :video-id="videoId"
          trigger="immediate"
          :player-vars="{
            autoplay: 1,
            playsinline: 1,
            rel: 0
          }"
          @ready="onReady" />
      </div>
    </template>
  </UModal>
</template>
