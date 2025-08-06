<!-- "[----------------------]"

 'Slot Index'

#backdrop

[@ - Title Section]

#icon
#icon-badge
#text
#header
#header-badge

[@ - Sticky Section]
#collapsed-header
#tab-bar-buttons
#tabs

#page

"[-----------------------]" -->

<script lang="ts" setup>
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
const stuck = ref(false)

watch(() => stuck.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    scrollRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

useIntersectionObserver(
  sentinel,
  ([entry]) => {
    // When the sentinel leaves the viewport, we are stuck
    stuck.value = !entry.isIntersecting
  },
  {
    root: scrollRef, // your scroll container
    threshold: 0,
  },
)

watch(() => stuck.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})

const img = useImage()

const bgClass = computed (() => `before:bg-url('${img(background)}')`)
</script>

<template>
  <div
    class="size-full">
    <!-- scroll container -->

    <main
      id="scrollRef"
      ref="scrollRef"
      class="size-full  overscroll-none overflow-y-auto flex flex-col auto-cols-max scroll-smooth relative items-end z-auto">
      <!-- top section hiding container -->

      <!-- splash -->

      <header
        :style="{
          backgroundImage: `url('${img(background)}')`,
        }"
        :class="cn('sticky col-start-1 row-start-1 bg-fixed bg-no-repeat w-screen  bg-position-[160%_-3%] bg-size-[80%] z-2 -top-[199px] grid grid-rows-[190px_1px_54px] pt-16',
                   'before:size-full before:absolute before:z-1 before:bg-linear-to-r  before:from-[color-mix(in_oklab,var(--color-b2)_60%,white_40%)]  before:from-45%   before:to-75% before:to-transparent',
        )">
        <div
          :class="cn('grid  z-3 grow items-center self-center gap-0.5 items-end grid-cols-[1fr_repeat(2,551px)_1fr] size-full justify-start px-2')">
          <!-- large header welcome wrapper -->

          <div
            v-show="!stuck"
            class="relative col-start-2 gap-6 pt-8 pl-4 flex self-center items-center flex-nowrap  w-fit max-w-120 max-h-22 items-center">
            <!-- icon -->

            <span class="size-fit relative">
              <AsChild
                class="size-20">
                <slot name="icon" />
              </AsChild>
              <slot name="icon-badge" />
            </span>

            <!-- header name -->

            <div class="flex flex-col gap-3">
              <div class="flex gap-8 items-center  max-h-12">
                <AsChild class="font-bold dst text-shadow-xs  antialiased  !text-12">
                  <slot name="header" />
                </AsChild>
                <slot name="header-badge" />
              </div>

              <!-- header sub-text -->

              <div
                class="inline-flex h-4   **:text-3   dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
                <slot name="text" />
              </div>
            </div>
          </div>
        </div>

        <!-- sentintel -->

        <motion.div
          ref="sentinel"
          class="h-px w-full -translate-y-14 " />

        <!-- sticky section  -->

        <div
          :class="cn(

            'gap-0.5 z-3  top-0 left-0 max-h-18 h-18 min-h-18 items-end  size-full transition-all duration-200 justify-start  **:not-[.sepRef]:z-4 ',
            bgClass)">
          <div class="grid size-full overflow-hidden  grid-cols-[1fr_1102px_1fr]">
            <div class="size-full flex pr-2 pl-3.5 pb-1 ">
              <!-- collapsed header -->

              <div
                v-show="stuck"
                :class="cn('size-full transition-opacity duration-200 items-end col-start-1 flex-nowrap gap-2 flex', { 'opacity-0 slide-out-to-bottom animate-out fade-out ': !stuck, 'animate-in fade-in slide-in-from-bottom opacity-100': stuck })">
                <slot name="collapsed-header" />
              </div>

              <!-- tab-bar-buttons -->

              <span class="flex gap-1.5   h-8 items-start justify-self-end">
                <slot name="tab-bar-buttons" />
              </span>
            </div>
            <!-- tabs -->

            <div
              class="flex col-start-2  items-end mb-2">
              <slot name="tabs" />
            </div>
          </div>
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
            <PopoverContent
              :hide-when-detached="false"
              position-strategy="absolute"
              class="w-124 h-full overflow-hidden justify-center relative grid items-start"
              as-child
              @escape-key-down.prevent
              @open-auto-focus.prevent
              @pointer-down-outside.prevent
              @interact-outside.prevent>
              <motion.div
                class="w-124 h-full overflow-hidden justify-center relative grid items-start">
                <aside
                  id="asideRef"
                  class="w-full h-[90vh] grid items-start justify-center overflow-y-auto min-h-[90vh] scrollbar-hidden" />
              </motion.div>
            </PopoverContent>
          </Popover>
        </div>
      </header>

      <!-- page -->
      <article :class="cn('flex col-start-2 row-start-2 flex-col justify-center items-start  h-fit w-full z-1 ', className)">
        <slot
          name="page"
          :stuck />

        <!-- footer -->
      </article>
      <!--       <HomeFooter class="z-10 h-26 min-h-26 py-5 border-t border-t-2 border-t-neutral" />
 -->
    </main>
  </div>
</template>
