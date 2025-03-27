<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed(() => props.pocket)

const set = computed (() => {
  const s = pocket.value.items
  return s.default ? s.default : s.sets[0] ? s.sets[0] : newItemSet()
})
</script>

<template>
  <div class="flex items-center gap-1">
    <template v-for="(item, i) in set.items" :key="i">
      <Item v-if=" i < 6" :item="item" class="size-15 shadow-sm drop-shadow-sm border-0" basic />
    </template>
    <template v-if="set.items.length < 6">
      <Placeholder v-for="(box, index) in 6 - set.items.length" :key="index" class="size-15" />
    </template>
  </div>
</template>