<script setup lang="ts">
interface CardProps {
  class?: HTMLAttributes["class"]
  mask?: string
  ui?: {
    root?: HTMLAttributes["class"]
    container?: HTMLAttributes["class"]
    imageWrapper?: HTMLAttributes["class"]
  }
  opacity?: number | string
  disabled?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  disabled: false
})

const delegated = reactiveOmit(props)

const maskUrl = computed(() => (props.mask ? `url(${props.mask})` : undefined))
</script>

<template>
  <div
    ref="refElement"
    v-bind="delegated"
    :class="
      cn(
        'foil-card container-style relative isolate container transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform contain-[layout_style]',
        props.ui?.root
      )
    ">
    <div
      :class="
        cn(
          'group/photo grid h-full overflow-hidden transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/photo:filter-none group-hover/photo:[--duration:200ms] group-hover/photo:[--easing:linear] group-hover/photo:[--opacity:0]',
          props.ui?.container
        )
      ">
      <div
        class="grid h-full overflow-hidden rounded-md transition-transform delay-(--delay) duration-(--duration) ease-(--easing) will-change-transform group-hover/hover-card:filter-none group-hover/hover-card:[--duration:200ms] group-hover/hover-card:[--easing:linear] group-hover/hover-card:[--opacity:0.6]">
        <div
          :class="
            cn(
              'grid size-full mix-blend-soft-light [grid-area:1/1]',
              props.ui?.imageWrapper
            )
          ">
          <slot />
        </div>
        <div
          v-if="!props.disabled"
          class="mask-source transition-background will-change-background grid size-full opacity-(--opacity) mix-blend-soft-light transition-opacity delay-(--delay) duration-(--duration) ease-(--easing) [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),rgba(255,255,255,0.8)_10%,rgba(255,255,255,0.65)_20%,rgba(255,255,255,0)_90%)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1]" />
        <div
          v-if="!props.disabled"
          class="mask-source background-style will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative grid size-full opacity-(--opacity) [background-blend-mode:hue_hue_hue_overlay] mix-blend-color-dodge transition-opacity [background:var(--pattern),var(--rainbow),var(--diagonal),var(--shade)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1] after:bg-inherit after:bg-size-[var(--foil-size),200%_400%,800%,200%] after:bg-position-[center,0%_var(--bg-y),calc(var(--bg-x)*-1)_calc(var(--bg-y)*-1),var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,hue,hard-light] after:mix-blend-exclusion after:content-[\'\']" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "#layers/ui/app/css/animation/foil.css";

.mask-source {
  /*   position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  z-index: 2; */
  mask-image: v-bind("maskUrl");
  mask-size: cover;
  mask-position: center;
  mask-composite: add;
  mask-mode: alpha;
  mask-repeat: no-repeat;
}

.foil-layer {
  --opacity: 0;
}

:global(.group\/hover-card:hover) .foil-layer {
  --duration: 200ms;
  --easing: linear;
  --opacity: var(--foil-layer-opacity);
}
</style>
