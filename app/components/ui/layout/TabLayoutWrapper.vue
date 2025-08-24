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
⁡⁣⁣⁢⁡⁣⁢⁣
 * collapsed-header
 * tab-bar-buttons
 * tabs⁡
⁡
 * page

 *========================================================================*
 */
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})

const scrollRef = ref(null)
const route = useRoute()
const sentinel = ref<HTMLElement | null>(null)
const show = ref(false)

watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    us().showMiniNav = false
    scrollRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

useIntersectionObserver(
  sentinel,
  ([entry]) => {
    // When the sentinel leaves the viewport, we are show
    us().showMiniNav = !entry.isIntersecting
  },
  {
    root: scrollRef, // your scroll container
    threshold: 0,
  },
)

const { scrollY } = useScroll({
  container: scrollRef,
})

onBeforeRouteUpdate(() => {
  us().showMiniNav = false
})
watch(() => us().showMiniNav, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div class="size-full overflow-hidden  bg-b1">
    <article class=" w-full max-w-inherit overflow-x-hidden absolute inset-0 overflow-y-auto top-0 bg-tint-b2/40 flex flex-col">
      <!-- background -->
      <slot name="background" />

      <section
        class="w-full z-2 grid grid-rows-[190px_1px_54px] pt-16">
        <div
          :class="cn('relative  z-3 flex max-w-[1100px] items-center size-full justify-self-center ')">
          <!-- large header welcome wrapper -->

          <slot
            name="header" />

          <!-- sentintel -->
          <motion.div
            ref="sentinel"
            class="h-px w-full absolute bottom-0 " />
        </div>

        <!-- tabs section  -->

        <div class="grid-cols-[1fr_1102px_1fr]  grid z-3  max-h-18 h-18 min-h-18 items-end  overflow-hidden grid-flow-col size-full *:first:z-4 relative items-end">
          <!-- separators / bottom header border -->
          <Separator
            class="my-0 bottom-0  z-0 bg-linear-to-r self-start from-b2/20 from-60% to-b4  absolute  w-full" />

          <!-- tabs -->

          <slot name="tabs" />
        </div>
      </section>

      <!-- page -->
      <div class="size-full bg-b1 isolate z-1">
        <slot
          name="page" />
      <!-- footer -->
      <!-- <slot name="footer" /> -->
      </div>
    </article>
    <!-- nav -->
    <slot
      name="mini-nav"
      :show />
  </div>
</template>
