<script setup lang="ts">
  const ts = useTempStore()
  const props = defineProps<{
    item: Item
  }>()

  const thisItem = computed(() => {
    return props.item
  })
</script>

<template>
  <label class="shadow-warm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border-none inset-shadow-sm ring-1 hover:ring-offset-2">
    <input
      type="checkbox"
      v-model="ts.itemDrawerTrigger"
      class="hidden" />
    <LittleTip :content="thisItem.name">
      <img
        :src="`/img/item/${thisItem.id}.webp`"
        :alt="thisItem.name + ' Image'"
        class="aspect-square size-full rounded-lg" />
    </LittleTip>
  </label>
</template>

<style scoped></style>
