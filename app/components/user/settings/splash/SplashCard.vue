<script lang="ts" setup>
//import "#layers/ui/app/assets/css/animation/foil.css"
const {
  alt,
  class: className,
  skinUrl,
} = defineProps<
  GlareCardProps & {
    class?: HTMLAttributes["class"]
    alt: any
    skinUrl: string | null
    text?: string
  }
>()

interface GlareCardProps {
  class?: string
}

const isPointerInside = ref(false)
const refElement = ref<HTMLElement | null>(null)

const state = ref({
  background: { x: 50, y: 50 },
  glare: { x: 50, y: 50 },
  rotate: { x: 0, y: 0 },
})

function handlePointerMove(event: PointerEvent) {
  const rotateFactor = 0.4
  const rect = refElement.value?.getBoundingClientRect()
  if (rect) {
    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y,
    }
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
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
  isPointerInside.value = true
  useTimeoutFn(() => {
    if (isPointerInside.value && refElement.value) {
      refElement.value.style.setProperty("--duration", "0s")
    }
  }, 300)
}

function handlePointerLeave() {
  isPointerInside.value = false
  if (refElement.value) {
    refElement.value.style.removeProperty("--duration")
    state.value.rotate = { x: 0, y: 0 }
  }
}
</script>

<template>
  <div
    ref="refElement"
    :class="
      cn(
        'foil-card container-style relative isolate container transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform contain-[layout_style] perspective-[600px]',
        ''
      )
    "
    @pointermove="handlePointerMove"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave">
    <UCard
      :class="
        cn(
          'border-outset border-p3 grid h-full origin-center transform-[rotateY(var(--r-x))_rotateX(var(--r-y))] overflow-hidden rounded-md border transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/photo:filter-none group-hover/photo:[--duration:200ms] group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0.6]',

          'group/photo border-p3 bg-p0! inset-shadow-xxs grid aspect-7/8 h-auto w-full min-w-32 shrink-0 cursor-pointer grid-rows-[1fr_0.2fr] p-2'
        )
      ">
      <div
        :class="
          cn(
            `grid h-full origin-center transform-[rotateY(var(--r-x))_rotateX(var(--r-y))] overflow-hidden rounded-md transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/photo:filter-none group-hover/photo:[--duration:200ms] group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0.6]`
          )
        ">
        <div class="grid size-full mix-blend-soft-light [grid-area:1/1]">
          <transition-scale
            class="pointer-events-none relative grid size-full shrink-0 place-items-center overflow-hidden rounded-md! bg-black/90 shadow-sm drop-shadow-sm **:text-white"
            group>
            <Champion
              v-if="skinUrl"
              class="absolute z-0 size-full"
              :alt="alt"
              :src="
                skinUrl
                  .replace('uncentered', 'tile')
                  .replace('centered', 'tile')
              " />
            <div v-else class="z-0 size-8 opacity-40">
              <Icon class="absolute size-8" name="lp:champ" />
              <icon
                class="absolute -right-4 -bottom-2 size-6"
                name="material-symbols:edit" />
            </div>

            <slot name="img-container" />
          </transition-scale>
        </div>
        <div
          class="transition-background will-change-background grid size-full opacity-(--opacity) mix-blend-soft-light transition-opacity delay-(--delay) duration-(--duration) ease-(--easing) [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),rgba(255,255,255,0.8)_10%,rgba(255,255,255,0.65)_20%,rgba(255,255,255,0)_90%)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1]" />
        <div
          class="background-style will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative grid size-full opacity-(--opacity) [background-blend-mode:hue_hue_hue_overlay] mix-blend-color-dodge transition-opacity [background:var(--pattern),var(--rainbow),var(--diagonal),var(--shade)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1] after:bg-inherit after:bg-size-[var(--foil-size),200%_400%,800%,200%] after:bg-position-[center,0%_var(--bg-y),calc(var(--bg-x)*-1)_calc(var(--bg-y)*-1),var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,hue,hard-light] after:mix-blend-exclusion after:content-[\'\']" />
      </div>

      <div class="relative grid size-full items-center">
        <slot name="crest" />
        <slot>
          <div
            class="relative mt-1.5 grid h-5 max-h-5 w-full items-center px-0.5">
            <span
              class="absolute flex size-fit flex-wrap items-center pl-1 text-xs leading-none font-medium italic">
              {{ text }}
            </span>
          </div>
        </slot>
      </div>
    </UCard>
  </div>
</template>
