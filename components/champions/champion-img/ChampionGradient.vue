<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  champion: Champion
}>()
</script>

<template>
  <div
    :class="cn(' place-self-center size-full absolute z-0 overflow-hidden', props.class)" :style="{
      backgroundImage:
        `url(/img/champion/centered/${props.champion.apiname}_0.jpg)`,
      backgroundSize: '250%',
      backgroundPositionX: '64%',
      backgroundPositionY: '11%',
    }">
    <div class="py-3 px-4 size-full bg-radial-[at_30%_60%] from-b1/2 from-15% via-b1/90 via-50% to-b1 to-80% absolute scale-y-200 scale-x-170 -left-20 " />
  </div>
</template>