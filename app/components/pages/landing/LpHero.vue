<script setup lang="ts">
import { heroDisplays } from "~/domain/riot/media/video"

const video = heroDisplays[0] ?? { url: "", class: "" }
</script>

<template>
  <UPageSection class="relative h-screen w-screen overflow-hidden">
    <ClientOnly>
      <div class="relative h-screen">
        <Video
          :style="{
            display: 'block',
            height: '100vh'
          }"
          :src="video.url"
          :class="
            cn('absolute block h-screen opacity-50 grayscale', video.class)
          "
          loop
          playsinline
          disablepictureinpicture
          autoplay
          muted />
      </div>
    </ClientOnly>
    <UPageHero
      class="absolute inset-0 top-0 left-0 z-1 grid grid-cols-2 place-items-center bg-linear-to-r from-p0 from-25% to-transparent to-90%">
      <div class="justify-self-start pl-44">
        <div class="relative grid size-full w-140 max-w-140 items-center">
          <LolpocketDefinition>
            <UButton
              variant="outline"
              size="lg"
              label="log in"
              :class="
                cn(
                  'pointer-events-auto relative mt-3 w-28 place-self-end overflow-hidden border-p3 text-sm shadow-xs transition-all duration-200 hover:bg-neutral hover:text-nc'
                )
              "
              to="/login">
            </UButton>
          </LolpocketDefinition>
        </div>

        <div
          class="absolute bottom-5 mx-auto grid w-full justify-center self-end">
          <div class="grid place-items-center">
            <icon class="size-9 opacity-30" name="down" />
          </div>
        </div>
      </div>
      <!--
        <HeroControls
          :api="api"
          :is-visible="isVisible"
          @restart-timer="start()" /> -->
    </UPageHero>
  </UPageSection>
</template>
