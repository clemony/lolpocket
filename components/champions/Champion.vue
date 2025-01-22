<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'

  const props = defineProps<{
    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
    rounded?: boolean
    removable?: boolean
    roundedMd?: boolean
  }>()

  const handleClick = () => {
    props.removable ? removeChamp(props.champion.name, props.pocket) : ''
  }
  ///console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
  <label
    @click="handleClick"
    class=""
    :class="
      cn(
        ' shadow-sm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border border-b3 inset-shadow-sm ring-1 **:select-none hover:ring-offset-2',
        { '!rounded-full': props.rounded, '!rounded-md': props.roundedMd },
        props.class
      )
    ">
    <slot />

    <LittleTip :content="champion.name">
      <div
        class="size-full overflow-hidden rounded-lg after:absolute after:top-0 after:left-0 after:pointer-events-none z-0 after:z-10 after:size-full after:rounded-lg after:place-items-center after:grid after:font-extralight after:opacity-0 after:text-7 after:content-['×']"
        :class="
          cn(
            { '!rounded-full': props.rounded },
            { '!rounded-md': props.roundedMd },
            { 'cursor-pointer  hover:after:opacity-100 after:bg-neutral/60 after:text-nc/80 after:transition-all after:duration-300': props.removable }
          )
        ">
        <img
          :key="props.champion.name"
          :src="`/img/champion/${champion.apiname}.webp`"
          :alt="props.champion.name + ' Image'"
          class="size-full scale-115" />
      </div>
    </LittleTip>
  </label>
</template>

<style scoped></style>
