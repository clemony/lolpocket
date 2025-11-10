<script lang="ts" setup>
const {
  alt,
  class: className,
  skinUrl,
} = defineProps<GlareCardProps & {
  class?: HTMLAttributes['class']
  alt: any
  skinUrl: string | null
  text?: string
}>()

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
      refElement.value.style.setProperty('--duration', '0s')
    }
  }, 300)
}

function handlePointerLeave() {
  isPointerInside.value = false
  if (refElement.value) {
    refElement.value.style.removeProperty('--duration')
    state.value.rotate = { x: 0, y: 0 }
  }
}
</script>

<template>
  <div
    ref="refElement"
    class=""
    :class="cn(
      `
        container-style relative isolate container transition-transform
        delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)]
        will-change-transform
        [contain:layout_style]
        [perspective:600px]
      `, '')"
    @pointermove="handlePointerMove"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave">
    <BasicCard
      :class="cn(`
        grid h-full origin-center
        [transform:rotateY(var(--r-x))_rotateX(var(--r-y))]
        overflow-hidden rounded-lg transition-transform delay-[var(--delay)]
        duration-[var(--duration)] ease-[var(--easing)] will-change-transform
        group-hover/photo:filter-none group-hover/photo:[--duration:200ms]
        group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0.6]
      `,
                 `
                   group/photo grid aspect-7/8 h-auto w-full min-w-32 shrink-0
                   cursor-pointer grid-rows-[1fr_0.25fr] border-b3 !bg-b1 p-2
                   inset-shadow-xxs
                 `,

      )">
      <div
        :class="cn(`
          grid h-full origin-center
          [transform:rotateY(var(--r-x))_rotateX(var(--r-y))]
          overflow-hidden rounded-lg transition-transform delay-[var(--delay)]
          duration-[var(--duration)] ease-[var(--easing)] will-change-transform
          group-hover/photo:filter-none group-hover/photo:[--duration:200ms]
          group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0.6]
        `,

        )">
        <div
          class="
            grid size-full mix-blend-soft-light
            [grid-area:1/1]
          ">
          <transition-scale
            group
            class="
              pointer-events-none relative grid size-full shrink-0
              place-items-center overflow-hidden !rounded-md bg-black/90
              shadow-sm drop-shadow-sm
              **:text-white
            ">
            <Champion
              v-if="skinUrl"
              :alt="alt"
              :img="skinUrl.replace('uncentered', 'tile').replace('centered', 'tile')"
              class="absolute z-0 size-full"></Champion>
            <div
              v-else
              class="z-0 size-8 opacity-40">
              <i-lol-champ class="absolute size-8" />
              <icon
                name="material-symbols:edit"
                class="absolute -right-4 -bottom-2 size-6" />
            </div>

            <slot name="img-container" />
          </transition-scale>
        </div>
        <div
          class="
            transition-background will-change-background grid size-full
            opacity-[var(--opacity)] mix-blend-soft-light transition-opacity
            delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)]
            [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]
            [clip-path:inset(0_0_1px_0_round_var(--radius))]
            [grid-area:1/1]
          " />
        <div
          class="
            background-style will-change-background
            after:grid-area-[inherit] after:bg-repeat-[inherit]
            after:bg-attachment-[inherit] after:bg-origin-[inherit]
            after:bg-clip-[inherit]
            relative grid size-full opacity-[var(--opacity)]
            [background-blend-mode:hue_hue_hue_overlay]
            mix-blend-color-dodge transition-opacity
            [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)]
            [clip-path:inset(0_0_1px_0_round_var(--radius))]
            [grid-area:1/1]
            after:bg-[inherit]
            after:[background-size:var(--foil-size),_200%_400%,_800%,_200%]
            after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)]
            after:[background-blend-mode:soft-light,_hue,_hard-light]
            after:mix-blend-exclusion after:content-[\'\']
          " />
      </div>

      <div class="relative grid size-full items-center">
        <slot name="crest" />
        <slot>
          <div
            class="
              relative mt-1.5 grid h-5 max-h-5 w-34 w-full items-center px-0.5
            ">
            <span
              class="
                absolute flex size-fit flex-wrap items-center text-1
                leading-none italic
              ">
              {{ text }}
            </span>
          </div>
        </slot>
      </div>
    </BasicCard>
  </div>
</template>

<style scoped>
.background-style {
  --step: 5%;
  --foil-svg: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E");
  --pattern: var(--foil-svg) center/100% no-repeat;
  --rainbow: repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(var(--step) * 1),
      rgba(255, 237, 95, 1) calc(var(--step) * 2),
      rgba(168, 255, 95, 1) calc(var(--step) * 3),
      rgba(131, 255, 247, 1) calc(var(--step) * 4),
      rgba(120, 148, 255, 1) calc(var(--step) * 5),
      rgb(216, 117, 255) calc(var(--step) * 6),
      rgb(255, 119, 115) calc(var(--step) * 7)
    )
    0% var(--bg-y) / 200% 700% no-repeat;
  --diagonal: repeating-linear-gradient(
      128deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 10%, 60%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    )
    var(--bg-x) var(--bg-y) / 300% no-repeat;
  --shade: radial-gradient(
      farthest-corner circle at var(--m-x) var(--m-y),
      rgba(255, 255, 255, 0.1) 12%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.25) 120%
    )
    var(--bg-x) var(--bg-y) / 300% no-repeat;
  background-blend-mode: hue, hue, hue, overlay;
}
.container-style {
  --m-x: v-bind(`${state.glare.x}%`);
  --m-y: v-bind(`${state.glare.y}%`);
  --r-x: v-bind(`${state.rotate.x}deg`);
  --r-y: v-bind(`${state.rotate.y}deg`);
  --bg-x: v-bind(`${state.background.x}%`);
  --bg-y: v-bind(`${state.background.y}%`);
  --duration: 300ms;
  --foil-size: 100%;
  --opacity: 0;
  --easing: ease;
  --radius: var(--radius-md);
  --transition: var(--duration) var(--easing);
}
</style>
