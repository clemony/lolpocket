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

const { fetchNewMatches, summoner } = useSummonerInject()

const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => fetchNewMatches(),
  120_000,
  summoner.value.puuid,
  'match-refresh',
)

const tippy = computed(() =>
  !cooldown.value?.seconds
    ? summoner.value.updatedMatch
      ? `Last updated ${summoner.value.updatedMatch}`
      : 'Not updated yet'
    : `${cooldown.value?.seconds} cd`,
)
</script>

<template>
  <Button
    v-tippy="{ content: tip ? tippy : null, theme: 'neutral' }"
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
    <TransitionScalePop class="relative grid size-full overflow-hidden">
      <span
        v-if="!cooldown"
        :class="
          cn(
            `
              flex items-center place-self-center font-semibold antialiased
              opacity-68
              group-hover/load:opacity-100
            `,
            { 'text-1': size === 'xs' },
          )
        ">
        <icon
          v-if="showIcon"
          name="reset"
          class="mr-3 -ml-2 size-5" />
        <span class="text-2">
          {{
            typeof text === "string"
              ? text
              : typeof text === "boolean"
                ? "update"
                : ""
          }}
        </span>
      </span>
      <div
        v-if="cooldown"
        :class="
          cn(
            `
              pointer-events-none z-0 grid size-full grid-rows-2
              place-items-center gap-1.5 overflow-hidden p-2
              *:overflow-hidden
            `,
            { 'gap-0': size === 'xs' },
          )
        ">
        <div
          v-if="size !== 'xs'"
          class="
            grid inline w-full grid-flow-col grid-cols-2 items-center
            justify-between pr-0.25 text-end align-bottom text-1 font-semibold
            text-nowrap dst
          ">
          <span :class="cn('text-2 font-bold')">
            {{ cooldown?.formatted }}
          </span>
          <span> cd </span>
        </div>

        <Progress
          :model-value="cooldown?.percent"
          class="bg-transparent"
          :class="
            cn(
              `
                relative h-2.75 w-full scale-y-60 rounded-[3px] border border-b4
                bg-b3
              `,
              { 'h-2.5 mt-1.5': size === 'xs' },
            )
          "
          :value="cooldown?.percent"
          :max="100">
          <ProgressIndicator
            class="bg-transparent!"
            :value="cooldown?.percent">
            <motion.div
              class="
                relative h-full origin-right
                after:absolute after:inset-0 after:top-0 after:right-0
                after:size-full after:bg-red-500 after:from-neutral
                after:via-neutral/80 after:to-neutral
              "
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
