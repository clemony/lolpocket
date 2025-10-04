<script setup lang="ts">
import { motion } from 'motion-v'
import { ProgressIndicator } from 'reka-ui'

const {
  class: className,
  placement = 'top',
  shape,
  showIcon,
  size = 'md',
  tip,
} = defineProps<{
  class?: HTMLAttributes['class']
  text?: boolean | string | null
  size?: any
  showIcon?: boolean
  shape?: 'circle' | 'square' | null
  placement?: Side
  tip?: boolean
}>()

const state = useSummonerInject()

const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => state.fetchNewMatches(),
  120_000,
  state.summoner.value.puuid,
  'match-refresh'
)

const tippy = computed(
  () =>
    !cooldown.value?.seconds ? (state.summoner.value.updatedMatch ? `last updated ${state.summoner.value.updatedMatch}` : 'not updated yet') : `${cooldown.value?.seconds} cd`
)
</script>

<template>
  <Button
    v-tippy="{ content: tip ? tippy : null, theme: 'default' }"
    :shape
    :class="
      cn(
        'p-0',
        {
          'pointer-events-none bg-b2/80 btn-active cursor-not-allowed':
            cooldown,
        },
        className,
      )
    "
    @click="update()">
    <TransitionScalePop

      class="relative grid overflow-hidden size-full">
      <span
        v-if="!cooldown"
        :class="
          cn(
            'flex items-center place-self-center   antialiased font-semibold opacity-68 group-hover/load:opacity-100',
            { 'text-1': size === 'xs' },
          )
        ">
        <icon
          v-if="showIcon"
          name="reset"
          class="mr-3 -ml-2 size-5" />
        <span class="text-2">
          {{
            typeof text === "string" ? text
            : typeof text === "boolean" ? "update"
              : ""
          }}
        </span>
      </span>
      <div
        v-if="cooldown"
        :class="
          cn(
            'size-full grid place-items-center gap-1.5 p-2 grid-rows-2 *:overflow-hidden overflow-hidden z-0 pointer-events-none',
            { 'gap-0': size === 'xs' }) ">
        <div
          v-if="size !== 'xs'"
          class="grid grid-cols-2 grid-flow-col justify-between w-full font-semibold text-1 dst  text-nowrap text-end pr-0.25 items-center inline align-bottom">
          <span :class="cn(' font-bold text-2')">
            {{ cooldown?.formatted }}
          </span>
          <span>
            cd
          </span>
        </div>

        <Progress
          :model-value="cooldown?.percent"
          class="bg-transparent"
          :class="
            cn(
              'relative border bg-b3 border-b4 scale-y-60 w-full h-2.75 rounded-[3px]',
              { 'h-2.5 mt-1.5': size === 'xs' },
            )
          "
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
              }"></motion.div>
          </ProgressIndicator>
        </Progress>
      </div>
      <slot />
    </TransitionScalePop>
  </Button>
</template>