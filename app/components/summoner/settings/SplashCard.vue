<script lang="ts" setup>
const {
  class: className,
  alt,
  skinUrl,
} = defineProps<{
  class?: HTMLAttributes['class']
  alt: any
  skinUrl: string | null
  text?: string
}>()
</script>

<template>
  <Card
    :class="
      cn(
        'rounded-lg shrink-0 h-full aspect-7/8 w-auto  !bg-b1  bg-noise cursor-pointer parallax photo inset-shadow-xxs p-2 border-b3 group/photo grid grid-rows-[1.5fr_0.3fr]',
        className,
      )
    ">
    <slot name="banner" />
    <transition-scale
      group
      class="relative rounded-md overflow-hidden drop-shadow-sm shadow-sm shrink-0 size-full pointer-events-none bg-black/90 **:text-white grid place-items-center">
      <PocketIcon
        v-if="skinUrl"
        :alt="alt"
        :img="skinUrl.replace('uncentered', 'tile').replace('centered', 'tile')"
        class="size-full z-0"></PocketIcon>
      <div
        v-else
        class="opacity-40  z-0 size-8">
        <i-lol-champ class="size-8 absolute" />
        <icon
          name="material-symbols:edit"
          class="absolute size-6 -right-4 -bottom-2" />
      </div>
      <LazyPrismaticShine
        class="scale-x-112  z-1 scale-y-104 !opacity-0 group-hover/photo:!opacity-100 transition duration-450" />
    </transition-scale>

    <slot>
      <div
        class="w-full h-5 max-h-5 w-34 max-w-34 mt-1.5 px-0.5 grid items-center">
        <span class=" italic  items-center  text-1 flex-wrap flex absolute  leading-none size-fit">
          {{ text }}
        </span>
      </div>
    </slot>
  </Card>
</template>
