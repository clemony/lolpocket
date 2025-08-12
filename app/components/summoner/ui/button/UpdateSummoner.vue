<script lang="ts" setup>
import { motion } from 'motion-v'
import { ProgressIndicator } from 'reka-ui'

const { summoner, class: className, variant = 'shadow', size = 'md', showIcon, circle, tipSide = 'top' } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
  text?: boolean | null
  variant?: any
  size?: any
  showIcon?: boolean
  circle?: boolean
  tipSide?: Side
}>()

function fakeFunction() {}
const { refreshMatches } = useSummoner(summoner.puuid)

const { throttled: refresh, cooldown, isLoading } = throttleFunction(
  () => fakeFunction(),
  120_000,
  summoner.puuid,
  'match-refresh',
)

const tip = computed (() =>
  `Updated:
        ${formatTimeAgo(summoner.matches?.lastUpdate, 'short')}
        ${cooldown.value?.seconds ? `${cooldown.value?.seconds} cd` : ''}`,
)
</script>

<template>
  <Button
    v-tippy="{ content: tip, placement: tipSide }"
    :variant="variant"
    :class="cn('p-0', { 'pointer-events-none bg-b2/80 btn-active cursor-not-allowed': cooldown }, className)"
    :size="size"
    @click="refresh()">
    <TransitionScalePop
      v-if="circle"
      class="relative grid overflow-hidden size-full place-items-center ">
      <icon
        v-if="!cooldown"
        name="mingcute:refresh-2-line"
        :class="
          cn(' size-5   shrink-0 in-[.btn-neutral]:opacity-80 not-in-[.btn-neutral]:opacity-60 group-hover/load:opacity-100 dst transition-all duration-200', {
            'animate-rotate': isLoading,
          })
        " />

      <div
        v-if="cooldown"
        class="text-0 shadow-sm  border-neutral border-2 absolute bg-neutral text-nc **:text-nc radial-progress place-self-center font-semibold opacity-90  "
        :style="{
          '--value': cooldown?.seconds,
          '--size': '2rem',
          '--thickness': '2px',
        }"
        :aria-valuenow="cooldown?.percent"
        role="progressbar">
        <span class="grid rounded-full bg-neutral size-full place-items-center">
          {{ cooldown?.seconds }}
        </span>
      </div>
    </TransitionScalePop>

    <TransitionScalePop
      v-else
      class="relative grid overflow-hidden size-full ">
      <span
        v-if="!cooldown"
        :class="cn('flex items-center place-self-center text-2 tracking-[0.24px]  antialiased font-semibold opacity-68 group-hover/load:opacity-100', { 'text-1': size == 'xs' })">
        <icon
          v-if="showIcon"
          name="mingcute:refresh-2-line"
          class="mr-3 -ml-2 size-5" />
        update
      </span>
      <div
        v-if="cooldown"
        :class="cn('size-full grid place-items-center gap-1.5 p-2 grid-rows-2 *:overflow-hidden overflow-hidden z-0 pointer-events-none', { 'gap-0': size == 'xs' })"
        class="">
        <div
          v-if="size != 'xs'"
          :class="cn('flex items-center justify-between w-full font-semibold text-1 dst text-end')">
          <span
            class="flex items-center gap-2">
            <icon
              name="svg-spinners:bars-scale-middle"
              class="size-3.5 scale-x-130 ml-1" />
          </span>
          <span class="flex flex-nowrap text-nowrap justify-self-end text-end pr-0.25  items-center inline align-bottom">
            <span :class="cn('font-mono font-bold text-2')">
              {{ cooldown?.formatted }}
            </span> cd
          </span>
        </div>

        <div class="flex gap-0.75 items-center w-full">
          <icon
            v-if="size != 'xs'"
            name="material-symbols:play-arrow-rounded"
            class="size-6 -ml-0.5 " />

          <Progress
            :model-value="cooldown?.percent"
            class="bg-transparent"

            :class="cn('relative border bg-b3 border-b4  w-full h-2.75 rounded-[3px]', { 'h-3.5 mt-1.5': size == 'xs' })"
            :value="cooldown?.percent"
            :max="100">
            <ProgressIndicator
              class="!bg-transparent"
              :value="cooldown?.percent">
              <motion.div
                class="h-full origin-right after:bg-red-500 after:from-neutral after:via-neutral/80 after:to-neutral after:inset-0 after:right-0 after:top-0 after:size-full relative after:absolute"
                :initial="{
                  scaleX: 1,
                  width: '100%',
                }"
                :animate="{
                  scaleX: `${cooldown?.percent}%`,
                }"
                :transition="{
                  ease: 'linear',
                }">
              </motion.div>
            </ProgressIndicator>
          </Progress>
        </div>
      </div>
      <slot />
    </TransitionScalePop>
  </Button>
</template>
