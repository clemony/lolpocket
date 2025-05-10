<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => props.pocket)

const set = computed (() => {
  const s = pocket.value.items
  return s.default ? s.default : s.sets[0] ? s.sets[0] : newItemSet()
})
</script>

<template>
  <div class="flex items-center gap-1.5">
    <template v-for="(item, i) in set.items" :key="i">
      <img v-if=" i < 6" :alt="item.name" :src="`/img/item/${item.id}.webp`" class="size-13 shadow-sm drop-shadow-sm border-0 rounded-lg" basic />
    </template>
    <template v-if="set.items.length < 6">
      <Placeholder v-for="(box, index) in 6 - set.items.length" :key="index" class="size-13" />
    </template>
  </div>
</template>