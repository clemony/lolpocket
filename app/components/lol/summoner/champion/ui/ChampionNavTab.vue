<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className } = defineProps<{
  routeName: string
  class?: HTMLAttributes['class']
  justifyStart?: boolean
}>()
const route = useRoute()
// const { stickyRaw, tabPaddingX, translateY } = await tabTransform()
</script>

<template>
  <motion.button
    role="tab"
    tabindex="0"
    :class="
      cn(
        'group/tab tabs-lift tabs tabs-lg pointer-events-auto relative flex w-max min-w-42 origin-bottom cursor-pointer items-start self-end border-b-0! transition-none *:pointer-events-none',
      )
    "
  >
    <FakeTab />

    <div
      :class="
        cn(
          'tab absolute bottom-0! left-0 w-full grow origin-bottom border-b-0!',
          {
            'tab-active':
              routeName === route.name
              || (routeName === 'summoner-region-slug-champions'
                && route.name === 'summoner-region-slug-champion_key'),
          },
        )
      "
    />

    <motion.div
      :class="
        cn(
          'd text-bc/90 z-3 flex h-10 w-full grow flex-nowrap items-center justify-center text-sm font-medium capitalize transition-[opacity,transform] duration-100 -translate-y-1 ease-out group-hover/tab:underline',
          {
            'opacity-60': routeName !== route.name,
            'opacity-100': routeName === route.name,
            'min-w-32 justify-start! px-0!': justifyStart,
          },
        )
      "
    >
      <slot>
        {{ routeName }}
      </slot>
    </motion.div>

    <FakeTab />
    <slot name="btn" />
  </motion.button>
</template>

<style scoped>
.tabs {
  --tabs-height: 30px;
}
.tab {
  --tab-radius-min: 0.65rem !important;
  --tab-paddings: 4px 20px !important;
  --tab-border-color: var(--color-b3) !important;
  --tab-border-colors: var(--color-b3) !important;
  text-transform: capitalize;
}
</style>
