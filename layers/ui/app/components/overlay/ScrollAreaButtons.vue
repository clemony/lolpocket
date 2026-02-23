<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    scrollAreaClass?: HTMLAttributes["class"]
    contentClass?: HTMLAttributes["class"]
    scrollStep?: number
    topButtonClass?: HTMLAttributes["class"]
    bottomButtonClass?: HTMLAttributes["class"]
    topIcon?: string
    bottomIcon?: string
    buttonVariant?:
      | "ghost"
      | "outline"
      | "solid"
      | "link"
      | "highlight"
      | "ring"
    buttonSize?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  }>(),
  {
    scrollStep: 120,
    topIcon: "up",
    bottomIcon: "down",
    buttonVariant: "ghost",
    buttonSize: "xs",
  }
)

type ScrollAreaExpose = ComponentPublicInstance & { $el?: HTMLElement }

const scrollAreaRef = ref<ScrollAreaExpose | null>(null)
const contentRef = useTemplateRef<HTMLElement>("contentRef")

const canScrollUp = shallowRef(false)
const canScrollDown = shallowRef(false)

function getScrollEl() {
  return scrollAreaRef.value?.$el ?? null
}

function updateScrollState() {
  const el = getScrollEl()
  if (!el) {
    canScrollUp.value = false
    canScrollDown.value = false
    return
  }

  const maxTop = Math.max(0, el.scrollHeight - el.clientHeight)
  canScrollUp.value = el.scrollTop > 1
  canScrollDown.value = maxTop - el.scrollTop > 1
}

function scrollByAmount(top: number) {
  const el = getScrollEl()
  if (!el) return
  el.scrollBy({ top, behavior: "smooth" })
}

function scrollUp() {
  scrollByAmount(-props.scrollStep)
}

function scrollDown() {
  scrollByAmount(props.scrollStep)
}

watch(
  () => scrollAreaRef.value?.$el,
  (el, _, onCleanup) => {
    if (!el) return

    const onScroll = () => updateScrollState()
    el.addEventListener("scroll", onScroll, { passive: true })

    nextTick(updateScrollState)
    onCleanup(() => el.removeEventListener("scroll", onScroll))
  },
  { immediate: true }
)

useResizeObserver(
  () => scrollAreaRef.value?.$el,
  () => updateScrollState()
)
useResizeObserver(contentRef, () => updateScrollState())

onMounted(() => nextTick(updateScrollState))

defineExpose({
  get $el() {
    return getScrollEl()
  },
  updateScrollState,
  scrollUp,
  scrollDown,
})
</script>

<template>
  <div :class="cn('relative w-full', props.class)">
    <slot
      v-if="canScrollUp"
      name="top-button"
      :can-scroll-up="canScrollUp"
      :can-scroll-down="canScrollDown"
      :scroll-up="scrollUp">
      <div v-auto-animate class="absolute -top-px left-0 z-[4] h-7! w-full">
        <UButton
          icon="i-up"
          variant="ghost"
          :ui="{
            base: 'w-full! h-full! border-x-none! border-t-none! border-b border-b-p2/80 rounded-none bg-p0',
            leadingIcon: '**:stroke-[2.4] text-n5/80 group-hover/btn:text-pc',
          }"
          @click="scrollUp" />
      </div>
    </slot>
    <ScrollArea as-child>
      <UScrollArea
        ref="scrollAreaRef"
        :class="cn('max-h-full', props.scrollAreaClass)"
        :ui="{
          root: 'overflow-y-auto overflow-x-hidden',
          viewport: 'flex-col',
        }">
        <div
          ref="contentRef"
          :class="cn('relative w-full', props.contentClass)">
          <slot :can-scroll-up="canScrollUp" :can-scroll-down="canScrollDown" />
        </div>
        <ScrollBar />
      </UScrollArea>
    </ScrollArea>
    <slot
      v-if="canScrollDown"
      name="bottom-button"
      :can-scroll-up="canScrollUp"
      :can-scroll-down="canScrollDown"
      :scroll-down="scrollDown">
      <div v-auto-animate class="absolute -bottom-px left-0 z-[4] h-7! w-full">
        <UButton
          icon="i-down"
          variant="ghost"
          :ui="{
            leadingIcon: '**:stroke-[2.4] text-n5/80 group-hover/btn:text-pc',
            base: 'w-full! h-full!   rounded-none bg-p0 border-x-none! border-b-none! border-t border-t-p2/80 ',
          }"
          @click="scrollDown" />
      </div>
    </slot>
  </div>
</template>
