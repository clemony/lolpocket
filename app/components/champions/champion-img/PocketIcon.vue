<script setup lang="ts">
const { class: className, url, size, transparent } = defineProps<{
  url: string
  class?: HTMLAttributes['class']
  size?: string
  transparent?: boolean
}>()
console.log('💠 - size:', size)
</script>

<template>
  <label :class="cn(' size-full overflow-hidden', { 'shadow-sm drop-shadow-sm': !transparent || (transparent && url != '/img/lp/192.webp') }, className)">

    <Img v-if="url != '/img/lp/192.webp'" :img="url" alt="pocket icon" class=" pointer-events-none  size-full " />
    <NuxtImg v-else-if="size && size == '29-2x'" src="/img/lp/29-2x.png" class="size-full aspect-square scale-102" />
    <div v-else-if="transparent" class="grid place-items-center size-full font-semibold text-4 dst">
      LP
    </div>
    <div v-else class="size-full bg-gradient-to-br from-neutral/80 to-neutral grid place-items-center text-nc font-semibold text-4 dst">
      LP
    </div>

  </label>
</template>

<style scoped></style>
