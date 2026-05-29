<script lang="ts" setup>
const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))
console.log("🥸 - pocket:", pocket)
</script>

<template>
  <div class="inset-0 flex size-full flex-col">
    {{ pocket?.label }}
  </div>
</template>
