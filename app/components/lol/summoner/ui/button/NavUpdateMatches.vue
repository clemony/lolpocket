<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, variant = 'shadow' } = defineProps<{
  class?: HTMLAttributes['class']
  text?: boolean | string | null
  variant?: any
}>()

const { loading, loadNewer, summoner } = useSummonerInject()

const {
  cooldown,
  isLoading,
  throttled: update,
} = throttleFunction(
  () => loadNewer(),
  120_000,
  summoner.value.puuid.toString(),
  'match-refresh',
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
        cn('relative flex h-11 w-full max-w-full flex-row flex-nowrap items-center justify-start gap-3 p-0',
           {
             'pointer-events-none w-full !bg-b2/80 btn-active cursor-not-allowed':
               cooldown,
           },
        )
      "
      @click="update()">
      <TransitionScalePop
        class="
          relative grid aspect-square h-full shrink-0 place-items-center
          place-self-center overflow-hidden
        ">
        <icon
          v-if="!cooldown"
          name="mingcute:refresh-2-line"
          :class="
            cn('absolute size-5 dst transition-all duration-200 group-hover/load:opacity-100',
               {
                 'animate-rotate': loading,
               },
            )
          " />

        <div
          v-if="cooldown"
          class="
            radial-progress absolute place-self-center border-2 border-neutral
            bg-neutral text-xxs font-semibold text-nc opacity-90 shadow-sm
            **:text-nc
          "
          :style="{
            '--value': cooldown?.seconds,
            '--size': '2rem',
            '--thickness': '2px',
          }"
          :aria-valuenow="cooldown?.percent"
          role="progressbar">
          <span
            class="grid size-full place-items-center rounded-full bg-neutral">
            {{ cooldown?.seconds }}
          </span>
        </div>
      </TransitionScalePop>

      <motion.div
        :variants="variants"
        class="
          inline-flex w-full flex-nowrap items-center justify-between gap-3
          self-center overflow-hidden text-nowrap
        ">
        {{ cooldown ? `${cooldown?.formatted} cd` : "Update" }}
      </motion.div>
    </MButton>
    <!--
    <motion.span
      :variants="variants"
      :transition="{ delay: 200 }"
      class="text-xxs absolute italic align-baseline grow right-5 translate-y-0.5 text-right inline justify-self-end">
      {{ `${formatTimeAgo(state.summoner.value.updated.match, 'short').replace('ago', 'old')}` }}
    </motion.span> -->
  </NavigationMenuItem>
</template>
