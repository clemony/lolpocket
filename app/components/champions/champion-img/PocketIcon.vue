<script setup lang="ts">
const { class: className, url, size, transparent } = defineProps<{
  url?: string
  class?: HTMLAttributes['class']
  size?: string
  transparent?: boolean
}>()
</script>

<template>
  <label :class="cn(' size-full overflow-hidden grid place-items-center', { 'shadow-sm drop-shadow-sm': !transparent || (transparent && !url) }, className)">

    <Img v-if="url" :img="url" alt="pocket icon" class=" pointer-events-none  size-full  scale-160 mt-1.5 shrink-0" />
    <NuxtImg v-else-if="size && size == '29-2x'" src="/img/lp/29-2x.png" class="size-full aspect-square scale-102" />
    <div v-else-if="transparent" class="grid place-items-center size-full font-semibold text-4 dst">
      LP
    </div>
    <NuxtImg v-else class="size-full object-cover object-center place-self-center" src="img/lp/192.webp" />
    <slot />
  </label>
</template>

<style scoped></style>
