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

const container = ref(null)

function scroll() {
  scrollContainerToTop(container.value)
}

provide<Scroll>('scroll-top', { top: scroll })
</script>

<template>
  <div class="size-full bg-b1">
    <article
      ref="container"
      class="overflow-x-hidden absolute inset-0 overflow-y-auto top-0 bg-tint-b2/40 grid auto-rows-max">
      <!-- background after:w-full after:h-50 after:top-56 after:absolute after:mask-t-from-20% after:mask-t-to-80%    after:bg-b1 -->
      <slot name="background" />

      <header
        class="w-full z-2 grid min-h-84 h-84 max-w-[1280px] items-center size-full justify-self-center ')">
        <!-- large header welcome wrapper -->
        <slot name="header" />
      </header>

      <!-- page -->
      <div class="size-full min-h-[80vh] grow z-1 isolate bg-b1">
        <slot name="page" />
      </div>
      <!-- nav -->
      <slot
        name="mini-nav"
        :show />
      <slot name="footer" />
    </article>
  </div>
</template>
