<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, variant = 'shadow' } = defineProps<{
  class?: HTMLAttributes['class']
  text?: boolean | string | null
  variant?: any
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

const buttVariants = {
  hidden: {
    maxWidth: '33px',
  },
  visible: {
    maxWidth: '100%',
  },
}

const variants = {
  hidden: {
    display: 'none',
    opacity: 0,
  },
  visible: {
    display: 'inline',
    opacity: 1,
  },
}
</script>

<template>
  <NavigationMenuItem
    class="overflow-hidden p-0"
    as-child>
    <MButton
      :variant="cooldown ? 'secondary' : variant"
      :variants="buttVariants"
      :class="
        cn(
          'max-w-full h-11 flex flex-row flex-nowrap items-center w-full gap-3  justify-start p-0  relative',
          {
            'pointer-events-none w-full !bg-b2/80 btn-active cursor-not-allowed':
              cooldown,
          },
        )
      "
      @click="update()">
      <TransitionScalePop
        class="aspect-square h-full place-self-center grid place-items-center shrink-0 relative overflow-hidden">
        <icon
          v-if="!cooldown"
          name="mingcute:refresh-2-line"
          :class="
            cn(
              'absolute size-5 group-hover/load:opacity-100 dst transition-all duration-200',
              {
                'animate-rotate': state.loading,
              },
            )
          " />

        <div
          v-if="cooldown"
          class="text-3xs shadow-sm absolute border-neutral border-2 absolute bg-neutral text-nc **:text-nc radial-progress place-self-center font-semibold opacity-90"
          :style="{
            '--value': cooldown?.seconds,
            '--size': '2rem',
            '--thickness': '2px',
          }"
          :aria-valuenow="cooldown?.percent"
          role="progressbar">
          <span
            class="grid rounded-full bg-neutral size-full place-items-center">
            {{ cooldown?.seconds }}
          </span>
        </div>
      </TransitionScalePop>

      <motion.div
        :variants="variants"
        class="inline-flex text-nowrap gap-3 w-full justify-between flex-nowrap overflow-hidden items-center self-center">
        {{ cooldown ? `${cooldown?.formatted} cd` : "Update" }}
      </motion.div>
    </MButton>
    <!--
    <motion.span
      :variants="variants"
      :transition="{ delay: 200 }"
      class="text-3xs absolute italic align-baseline grow right-5 translate-y-0.5 text-right inline justify-self-end">
      {{ `${formatTimeAgo(state.summoner.value.lastMatchUpdate, 'short').replace('ago', 'old')}` }}
    </motion.span> -->
  </NavigationMenuItem>
</template>
