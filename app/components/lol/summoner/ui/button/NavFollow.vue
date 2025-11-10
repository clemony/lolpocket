<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, variant = 'shadow' } = defineProps<{
  class?: HTMLAttributes['class']
  text?: boolean | string | null
  variant?: any
}>()

const state = useSummonerInject()

const isYou = computed(() => as().account?.puuid === state.summoner?.value.puuid)
const isFollowed = ref(false)

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
    class="ml-px overflow-hidden p-0"
    as-child>
    <MButton
      label
      :variant="variant"
      :variants="buttVariants"
      :class="
        cn(
          `
            relative flex h-11 w-full max-w-full flex-row flex-nowrap
            items-center justify-start gap-3 p-0
          `,
          { 'pointer-events-none ': isYou },
        )
      ">
      <div
        class="
          relative grid aspect-square h-full shrink-0 place-items-center
          place-self-center overflow-hidden
        ">
        <input
          v-model="isFollowed"
          aria-label="follow-indicator"
          type="checkbox"
          class="peer hidden" />

        <icon
          v-if="isYou"
          name="lucide:house"
          class="-ml-0.5 size-5.5" />
        <icon
          v-else
          name="ph:heart-straight-fill"
          :class="
            cn(
              `
                absolute size-5.5 text-b4 drop-shadow-sm dst drop-shadow-b2
                transition-all duration-300
                group-hover/follow:scale-120
                group-hover/follow:text-tint-domination/40
                group-hover/follow:opacity-90
              `,
              {
                'text-domination group-hover/follow:**:text-domination opacity-60 group-hover/follow:opacity-100':
                  isFollowed,
              },
            )
          " />
      </div>

      <motion.div
        :variants="variants"
        class="
          inline-flex w-full flex-nowrap items-center justify-between gap-3
          self-center overflow-hidden text-nowrap
        ">
        {{
          isYou ? "You"
          : isFollowed ? "Unfollow"
            : "Follow"
        }}
      </motion.div>
    </MButton>
  </NavigationMenuItem>
</template>
