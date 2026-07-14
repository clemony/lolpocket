<script lang="ts" setup>
import { useFollowSummoner } from "~/domain/summoner/composables/useFollowSummoner"
import { getSummonerIcon } from "~/domain/utils/img"
import { asChipColor } from "~/types/typeAssert"
const session = sSession()
const { summoner, account } = storeToRefs(session)
const { isFavorite, isSelf, tooltipText, update } = useFollowSummoner(summoner)
const bg = computed(() => ({
  width: 1215,
  height: 717,
  src: sSession().splash || sData().mostPlayed.splash,

  class: "size-full object-cover brightness-110   saturate-90",
}))
</script>

<template>
  <div class="relative -mb-24 flex h-180 w-full shrink-0 overflow-hidden">
    <!-- -->
    <div
      class="absolute z-0 grid size-full place-items-center overflow-hidden opacity-70">
      <NuxtImg
        v-if="bg"
        v-bind="bg"
        :preload="{ fetchPriority: 'high' }"
        format="webp"
        alt="profile-splash-bg" />
      <div
        class="absolute inset-0 z-3 size-full bg-linear-to-b from-transparent via-p0/50 via-20% to-p0 to-68%" />
      <!--     <div
        :style="{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%) `,
        }"
        class="absolute inset-0 size-full" />-->
    </div>
    <div class="absolute inset-0 z-3 grid size-full place-items-center">
      <div class="absolute flex translate-y-16 flex-col">
        <!-- AVATAR -->
        <div class="grid grid-cols-[160px_110px_160px] place-items-center">
          <div class="">
            <Tooltip :content="{ side: 'bottom' }" :text="tooltipText">
              <HeartButton
                v-if="summoner"
                trailing-icon="i-heart-fill"
                square
                :ui="{
                  base: 'relative size-16! overflow-hidden! rounded-full bg-p0/80! shadow-md shadow-black/20 backdrop-blur-sm fx-0!',
                  leadingIcon: cn('absolute size-4.75!'),
                }"
                :tooltip-text="tooltipText"
                :model-value="isFavorite"
                @update:model-value="update($event)" />
            </Tooltip>
          </div>
          <div
            class="relative grid size-34 shrink-0 place-items-center rounded-full bg-pc/60 shadow-sm drop-shadow-lg drop-shadow-black/30 backdrop-blur-md">
            <NuxtImg
              class="z-1 size-full rounded-full"
              :src="getSummonerIcon(summoner?.icon)"
              :summoner="summoner ?? undefined" />
          </div>
          <div class="">
            <!-- UPDATE SUMMONER -->
            <UpdateSummoner>
              <UButton
                v-if="summoner"
                square
                icon="i-bytesize-reload"
                :ui="{
                  base: 'relative size-16! overflow-hidden! rounded-full bg-p0/80! shadow-md shadow-black/20 backdrop-blur-sm fx-0!',
                  leadingIcon:
                    'size-4.5 **:stroke-[11%] group-hover/btn:text-pc!',
                }" />
            </UpdateSummoner>
          </div>
        </div>

        <!-- SUMMONER NAME -->
        <div
          class="mt-4 flex flex-col items-center gap-2 text-center align-baseline text-pc/80">
          <h1 class="font-display text-[3.2rem] leading-none">
            {{ summoner?.name }}
          </h1>
          <span
            class="inline-flex items-center gap-px text-sm leading-none font-medium">
            <Icon
              name="i-hash"
              class="inline size-3.25 align-baseline text-pc/80" />
            {{ summoner?.tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
