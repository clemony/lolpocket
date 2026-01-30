<script setup lang="ts">
import { useTransform } from 'motion-v'

const {
  class: className,
  slice,
  src: i,
} = defineProps<{
  class?: HTMLAttributes['class']
  src: string | null | undefined
  slice?: boolean
}>()

const img = useImage()
const { scrollY } = useScrollInject()

const fallback = useMotionValue(0)
const source = scrollY ?? fallback

// numeric only
const yPx = useTransform(source, [0, 200], [0, 24])

const bg = computed(() => {
  if (!i) return undefined
  try {
    return `url('${img(i, { quality: 100 })}')`
  }
  catch {
    return undefined
  }
})
</script>

<template>
  <div
    :class="
      cn(
        'bg-tint-b2/30 dss absolute -top-16 isolate flex h-[80vh] w-screen justify-end',
        {},
        className,
      )
    "
  >
    <div
      :class="
        cn(
          'before:from-bg-tint-b2/60 pointer-events-none relative top-0 bottom-32 -mr-14 flex h-full w-screen grid-rows-1 flex-nowrap justify-end justify-items-end before:absolute before:z-1 before:size-full before:bg-linear-to-r before:to-transparent',
          {
            'mask-l-from-20% mask-l-to-66% before:from-0% before:to-75%': slice,
            'mask-l-from-30% mask-l-to-70% before:from-45% before:to-75%':
              !slice,
          },
        )
      "
    >
      <!--
          '--bg-y': yPx,
          'backgroundPositionY': 'calc(var(--bg-y) * 1px)', -->
      <div
        v-if="!slice"
        :style="{
          backgroundPositionX: '0',
          backgroundImage: bg,
          backgroundSize: 'cover',
        }"
        :class="
          cn(
            'z-0 size-full w-[36%] -translate-x-[30%] -scale-x-100 bg-auto bg-fixed bg-no-repeat blur-sm duration-100',
          )
        "
      />
      <!--
          translateY: yPx, -->
      <div
        :style="{
          backgroundPositionX: '100%',
          backgroundSize: 'cover',
          backgroundImage: bg,
        }"
        :class="
          cn(
            'z-0 size-full mask-l-from-98% bg-no-repeat contrast-110 grayscale-10 duration-100',
          )
        "
      />
      <div
        class="via-b2/60 to-b2 absolute z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%] from-transparent from-24% via-42% to-60%"
      />
    </div>
  </div>
</template>
