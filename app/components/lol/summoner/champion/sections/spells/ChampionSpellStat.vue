<script lang="ts" setup>
const { k, v } = defineProps<{
  k: string
  v: StatDetail
}>()
</script>

<template>
  <div
    :key="k"
    :data-id="k"
    data-tip="spell"
    class="flex h-fit flex-col items-center gap-2">
    <Spell
      :id="parseInt(k)"
      :data-id="k"
      data-tip="spell"
      data-size="lg"
      data-interactive="true"
      :class="cn('size-16 cursor-default opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0', { 'opacity-100 grayscale-0': v?.games })" />
    <slot />
  </div>
</template>