<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  set: RuneSet
}>()

const pocket = ref(props.pocket)

const items = computed(() => {
  const s
  /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ = pocket.value.items.default
  return s
})
</script>

<template>
  <div class="relative flex w-full justify-evenly rounded-full p-2 inset-shadow-sm backdrop-brightness-95 backdrop-saturate-130">
  </div>
</template>

<style scoped></style>
