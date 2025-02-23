<script setup lang="ts">
const ts = useTempStore()

const props = defineProps<{
item?: Item
}>()
const item = ref(ts.selectedItem)
watch(
  () => item.value,
  (newVal) => {
    item.value = newVal
    console.log('💠 - newVal:', newVal)
  },
)


</script>

<template>
  <div
    key="id"
    :item="item"
    class="relative h-screen w-130 p-9 justify-self-center backdrop-blur-md min-h-screen bg-b1 shadow-pretty overflow-hidden rounded-r-md inset-shadow-sm"
  >
    <div
      :key="item"
      class="drawer"
    >
      <input
        id="item-drawer"
        type="checkbox"
        class="drawer-toggle"
      />

      <div class="drawer-side z-60">
        <label
          for="item-drawer"
          aria-label="close sidebar"
          class="drawer-overlay !bg-black/70"
        ></label>
        <ItemInfo />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
