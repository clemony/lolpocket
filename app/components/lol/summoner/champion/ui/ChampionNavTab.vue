<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, tabTransform } = defineProps<{
  tabTransform: any
  routeName: string
  class?: HTMLAttributes['class']
  justifyStart?: boolean
}>()
const route = useRoute()
const { stickyRaw, tabPaddingX, translateY } = await tabTransform()
</script>

<template>
  <motion.button
    role="tab"
    tabindex="0"
    :style="{
      paddingLeft: tabPaddingX,
      paddingRight: tabPaddingX,
    }"
    :class="
      cn('pointer-events-auto tabs-lift relative tabs flex w-fit min-w-26 grow origin-bottom cursor-pointer items-start gap-0! self-end border-b-0! tabs-lg transition-none has-[:hover]:**:opacity-100',
         {
           'grow': stickyRaw.get() <= 0.5,
           '!px-5 min-w-32 shrink-0 grow': justifyStart,
         },
      )
    ">
    <FakeTab />

    <div
      :class="
        cn('tab absolute bottom-0! left-0 w-full grow origin-bottom border-b-0!',
           {
             ' ': stickyRaw.get() > 0.5,
             'bg-b1/90': stickyRaw.get() > 0.5 && routeName === route.name,
             'tab-active': routeName === route.name,
           },
        )
      " />

    <motion.div
      :class="
        cn('relative z-3 flex h-10 w-fit flex-nowrap items-center text-2 font-medium whitespace-nowrap text-bc/90 capitalize transition-[opacity,transform] duration-100 ease-out after:absolute after:h-16 after:w-full hover:text-bc hover:underline',
           {
             'opacity-60': routeName !== route.name,
             'opacity-100': routeName === route.name,
             'justify-start! px-0! min-w-32': justifyStart,
           },
        )
      "
      :style="{
        translateY,
      }">
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
