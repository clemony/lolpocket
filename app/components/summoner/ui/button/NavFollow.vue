<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, variant = 'shadow' } = defineProps<{
  class?: HTMLAttributes['class']
  text?: boolean | string | null
  variant?: VariantStyleProps['variant']
}>()

const state = useSummonerInject()

const isYou = computed (() => as().userAccount?.riot?.puuid == state.summoner?.value.puuid)
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
    class=" overflow-hidden p-0 ml-px"
    as-child>
    <MButton
      label
      :variant="variant"
      :variants="buttVariants"
      :class="cn('max-w-full h-11 flex flex-row flex-nowrap items-center w-full gap-3  justify-start p-0  relative', { 'pointer-events-none ': isYou })">
      <div
        class=" aspect-square h-full place-self-center grid place-items-center shrink-0 relative overflow-hidden ">
        <input
          v-model="isFollowed"
          type="checkbox"
          class="peer hidden" />

        <icon
          v-if="isYou"
          name="lucide:house"
          class="size-5.5 -ml-0.5" />
        <icon
          v-else
          name="ph:heart-straight-fill"
          :class="cn(

            ' group-hover/follow:text-tint-domination/40 dst   group-hover/follow:opacity-90 group-hover/follow:scale-120 absolute transition-all duration-300 drop-shadow-b2 drop-shadow-sm size-5.5 text-b4 ',
            { 'text-domination group-hover/follow:**:text-domination opacity-60 group-hover/follow:opacity-100': isFollowed })" />
      </div>

      <motion.div
        :variants="variants"
        class="inline-flex text-nowrap gap-3 w-full justify-between  flex-nowrap overflow-hidden  items-center self-center ">
        {{ isYou ? 'You' : isFollowed ? 'Unfollow' : 'Follow' }}
      </motion.div>
    </MButton>
  </NavigationMenuItem>
</template>
