<script lang="ts" setup>
import { motion } from 'motion-v'

const route = useRoute()
const { childRoutes, targetRoutes } = useRouteNavigation()
const { scrollY } = useScrollInject()

// Smooth sticky state (0 → not sticky, 1 → sticky)
const stickyRaw = useMotionValue(0)
const sticky = useSpring(stickyRaw, { damping: 18, mass: 0.7, stiffness: 180 })

useMotionValueEvent(scrollY, 'change', (latest) => {
  stickyRaw.set(latest > 220 ? 1 : 0)
})

// Nav container transforms
const gap = useTransform(sticky, [0, 1], ['0.5rem', '0rem'])
const translateY = useTransform(sticky, [0, 1], ['-6%', '-13%'])
const translateX = useTransform(sticky, [0, 1], ['0%', '8%'])
const opacity = useTransform(sticky, [0, 1], ['1', '0.95'])

// Individual tab transforms
const tabPaddingX = useTransform(sticky, [0, 1], ['3rem', '1.6rem'])
</script>

<template>
  <motion.nav
    v-if="childRoutes"
    role="tablist"
    :style="{ gap, opacity, translateX }"
    :class="
      cn('relative z-3 flex h-15 w-fit items-end self-end justify-self-end border-b-0! transition-none *:select-none **:text-2',
      )
    ">
    <motion.button
      v-for="item in childRoutes.sort((a, b) => a.meta?.order - b.meta?.order)"
      :key="item.name"
      role="tab"
      tabindex="0"
      :style="{
        paddingLeft: tabPaddingX,
        paddingRight: tabPaddingX,
      }"
      :class="
        cn('group/tab pointer-events-auto tabs-lift relative tabs flex w-max min-w-22 grow origin-bottom cursor-pointer items-start self-end border-b-0! tabs-lg transition-none *:pointer-events-none',
           {
             grow: stickyRaw.get() <= 0.5,
           },
        )
      "
      @click="navigateTo(targetRoutes[String(item.name)])">
      <FakeTab />

      <div
        :class="
          cn('tab absolute bottom-0! left-0 w-full grow origin-bottom border-b-0!',
             {
               ' ': stickyRaw.get() > 0.5,
               'bg-b1/90': stickyRaw.get() > 0.5 && item.name === route.name,
               'tab-active': item.name === route.name,
             },
          )
        " />

      <motion.div
        :class="
          cn('d z-3 flex h-10 w-full grow flex-nowrap items-center justify-center text-2 font-medium text-bc/90 capitalize transition-[opacity,transform] duration-100 ease-out group-hover/tab:underline',
             {
               'opacity-60': item.name !== route.name,
               'opacity-100': item.name === route.name,
             },
          )
        "
        :style="{
          translateY,
        }">
        <Icons
          v-if="route.fullPath.match(/backpack.*/)"
          :name="item?.meta?.icon"
          :class="cn('mr-4 size-3.75 **:stroke-2', { 'size-3.75': item.meta.icon === 'folder' })" />
        {{ item?.meta?.title || item?.name?.toString() }}
      </motion.div>

      <FakeTab />
    </motion.button>
  </motion.nav>
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
