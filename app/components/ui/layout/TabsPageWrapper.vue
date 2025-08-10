<!-- eslint-disable jsdoc/check-alignment -->
<script lang="ts" setup>
/**
 * ========================================================================
 * SLOT INDEX

 * backdrop

 * Title Section

 * icon
 * icon-badge
 * text
 * header
 * header-badge

 * Sticky Section

 * collapsed-header
 * tab-bar-buttons
 * tabs

 * page
 *========================================================================*
 */

import { motion } from 'motion-v'
import { PopoverAnchor, PopoverContent } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})
const { class: className, background } = defineProps<{
  class?: HTMLAttributes['class']
  background: string
}>()

const scrollRef = ref(null)
const route = useRoute()
const sentinel = ref<HTMLElement | null>(null)
const show = ref(false)

watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    us().tabsSticky = false
    scrollRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

useIntersectionObserver(
  sentinel,
  ([entry]) => {
    // When the sentinel leaves the viewport, we are show
    us().tabsSticky = !entry.isIntersecting
  },
  {
    root: scrollRef, // your scroll container
    threshold: 0,
  },
)

const { scrollY } = useScroll({
  container: scrollRef,
})
const img = useImage()

const bgClass = computed (() => `before:bg-url('${img(background)}')`)

onBeforeRouteUpdate(() => {
  us().tabsSticky = false
})
watch(() => us().tabsSticky, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <section
    :class="cn(' w-full max-w-inherit z-2 -top-[199px] grid grid-rows-[190px_1px_54px] pt-16 bg-tint-b2/40   backdrop-filter-[url(assets/icons/img/noice-lg.svg)] bg-repeat ',

    )">
    <motion.div
      :style="{
        backgroundImage: `url('${img(background)}')`,
      }"
      :class="cn('inset-0 right-0 top-0 absolute  bg-fixed bg-no-repeat  bg-position-[160%_-3%]  bg-size-[80%] mask-l-from-30% mask-l-to-60%',
                 'before:size-full before:absolute before:z-1 before:bg-linear-to-r  before:from-[color-mix(in_oklab,var(--color-b2)_60%,white_40%)]  before:from-45%   before:to-75% before:to-transparent',
      )" />
    <div
      :class="cn('grid   z-3 grow items-center self-center gap-0.5 items-end grid-cols-[1fr_repeat(2,551px)_1fr] size-full justify-start px-2')">
      <!-- large header welcome wrapper -->

      <slot
        name="pre-header" />

      <slot
        name="header" />
    </div>

    <!-- sentintel -->
    <motion.div
      ref="sentinel"
      class="h-px w-full col-span-full -translate-y-14 " />

    <!-- sticky section  -->

    <div class="grid-cols-[1fr_1102px_1fr]  grid z-3  max-h-18 h-18 min-h-18 items-end  overflow-hidden grid-flow-col size-full **:not-[.sepRef]:z-4  items-end">
      <!-- tabs -->

      <slot name="tabs" />

      <!-- separators / bottom header border -->
      <Separator
        class="sepRef my-0 bottom-0  bg-linear-to-r self-start from-b2/20 from-60% to-b4  absolute  w-full" />

      <Separator
        class="sepRef my-0  -bottom-1 bg-transparent  !bg-linear-to-b from-b1/90 to-b1/0 pointer-events-none self-start h-1 absolute   w-full  " />
      <!-- aside sticky section -->
      <Popover
        :open="true"
        :default-open="true">
        <div class="w-full z-5  absolute h-px">
          <PopoverAnchor
            class="sepRef my-0  mx-auto z-3 bg-transparent  pointer-events-none self-start h-px -translate-x-120   w-120" />
        </div>

        <slot
          name="aside"
          :sticky="show" />
      </Popover>
    </div>
  </section>

  <!-- page -->

  <slot
    name="page"
    :show />

    <!-- footer -->

    <!--       <HomeFooter class="z-10 h-26 min-h-26 py-5 border-t border-t-2 border-t-neutral" />
 -->
</template>
