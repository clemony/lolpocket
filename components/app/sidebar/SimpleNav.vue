<script setup lang="ts">
const props = defineProps<{
  modelValue: Array<SidebarItem>
}>()
const translateY = ref()

const ss = useSidebarStore()

const nav = ref(null)
const button = ref(null)
</script>

<template>
  <div class="grid grid-cols-[18px_auto] items-center my-5 px-4">
    <div class="h-[87%] row-span-full flex items-center  mt-3">
      <div class="duration-700 transition-all h-full text-3 dst" :style="{ transform: translateY }">
        <icon name="right-sm" class="size-4.5 shrink-0" />
      </div>
    </div>
    <ul ref="nav" class=" pointer-events-none justify-center items-center relative self-center w-fit py-0 ">
      <SimpleNavButton v-for="page in props.modelValue" ref="button" :key="page.link" :page="page" :model-value="props.modelValue" @update:translate="(e) => translateY = e" />
    </ul>
  </div>
</template>

<style scoped>
</style>