<script lang="ts" setup>
import type { CSSProperties } from "vue"
import { skinNameFromUrl } from "~/domain/utils/img"

interface CardProps {
  style?: CSSProperties
  ui?: {
    root?: HTMLAttributes["class"]
    container?: HTMLAttributes["class"]
    image?: HTMLAttributes["class"]
  }
  alt?: string
  src?: string | null
  text?: string
  as?: "div" | "button" | "a"
  syncPerspective?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  alt: String((src: string) => skinNameFromUrl(src ?? "") ?? "Champion splash"),
  as: "div"
})

const delegated = reactiveOmit(props, "src", "alt", "text")

const isPointerInside = ref(false)
const refElement = ref<HTMLElement | null>(null)

const state = ref({
  background: { x: 50, y: 50 },
  glare: { x: 50, y: 50 },
  rotate: { x: 0, y: 0 }
})

const foilStyle = computed(
  (): CSSProperties =>
    props.syncPerspective
      ? {}
      : {
          "--m-x": `${state.value.glare.x}%`,
          "--m-y": `${state.value.glare.y}%`,
          "--r-x": `${state.value.rotate.x}deg`,
          "--r-y": `${state.value.rotate.y}deg`,
          "--bg-x": `${state.value.background.x}%`,
          "--bg-y": `${state.value.background.y}%`
        }
)

function resolveElement(target: unknown): HTMLElement | null {
  if (target instanceof HTMLElement) return target
  if (!target || typeof target !== "object") return null

  const candidate = (target as { $el?: unknown }).$el
  return candidate instanceof HTMLElement ? candidate : null
}

function handlePointerMove(event: PointerEvent) {
  if (props.syncPerspective) return
  const rotateFactor = 0.4
  const rect = resolveElement(refElement.value)?.getBoundingClientRect()
  if (rect) {
    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y
    }
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50
    }
    state.value.background.x = 50 + percentage.x / 4 - 12.5
    state.value.background.y = 50 + percentage.y / 3 - 16.67
    state.value.rotate.x = -(delta.x / 3.5) * rotateFactor
    state.value.rotate.y = (delta.y / 2) * rotateFactor
    state.value.glare.x = percentage.x
    state.value.glare.y = percentage.y
  }
}

function handlePointerEnter() {
  if (props.syncPerspective) return
  isPointerInside.value = true
  useTimeoutFn(() => {
    const el = resolveElement(refElement.value)
    if (isPointerInside.value && el) {
      el.style.setProperty("--duration", "0s")
    }
  }, 300)
}

function handlePointerLeave() {
  if (props.syncPerspective) return
  isPointerInside.value = false
  const el = resolveElement(refElement.value)
  if (el) {
    el.style.removeProperty("--duration")
    state.value.rotate = { x: 0, y: 0 }
  }
}
</script>

<template>
  <div
    ref="refElement"
    v-bind="delegated"
    :style="foilStyle"
    :class="
      cn(
        'foil-card container-style relative isolate container transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform contain-[layout_style]',
        {
          'perspective-[600px]': !props.syncPerspective
        },
        props.ui?.root
      )
    "
    @pointermove="handlePointerMove"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave">
    <div
      :class="
        cn(
          'grid h-full overflow-hidden rounded-md border-p4 ring-0 transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/photo:filter-none group-hover/photo:[--duration:200ms] group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0]',
          {
            'origin-center transform-[rotateY(var(--r-x))_rotateX(var(--r-y))]':
              !props.syncPerspective
          },
          'group/photo',
          props.ui?.container
          /*   border border-outset border-p3          'group/photo inset-shadow-xxs grid aspect-7/8 h-auto w-full min-w-32 shrink-0 cursor-pointer grid-rows-[1fr_0.2fr] border-p3 bg-p0! p-2' */
        )
      ">
      <div
        :class="
          cn(
            'grid h-full overflow-hidden rounded-md transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/photo:filter-none group-hover/photo:[--duration:200ms] group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0.6]',
            {
              'origin-center transform-[rotateY(var(--r-x))_rotateX(var(--r-y))]':
                !props.syncPerspective
            }
          )
        ">
        <div class="grid size-full mix-blend-soft-light [grid-area:1/1]">
          <NuxtImg
            v-if="src"
            :class="cn('z-0 size-full', props.ui?.image)"
            :alt
            :src="
              src.replace('uncentered', 'tile').replace('centered', 'tile')
            " />
        </div>
        <div
          class="transition-background will-change-background grid size-full opacity-(--opacity) mix-blend-soft-light transition-opacity delay-(--delay) duration-(--duration) ease-(--easing) [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),rgba(255,255,255,0.8)_10%,rgba(255,255,255,0.65)_20%,rgba(255,255,255,0)_90%)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1]" />
        <div
          class="background-style will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative grid size-full opacity-(--opacity) [background-blend-mode:hue_hue_hue_overlay] mix-blend-color-dodge transition-opacity [background:var(--pattern),var(--rainbow),var(--diagonal),var(--shade)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1] after:bg-inherit after:bg-size-[var(--foil-size),200%_400%,800%,200%] after:bg-position-[center,0%_var(--bg-y),calc(var(--bg-x)*-1)_calc(var(--bg-y)*-1),var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,hue,hard-light] after:mix-blend-exclusion after:content-[\'\']" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
@import "#layers/ui/app/assets/css/animation/foil.css";
</style>
