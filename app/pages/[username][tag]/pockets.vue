<script lang="ts" setup>
definePageMeta({
  title: "Pockets",
  description: "Configure all of your public pockets in one spot.",
  icon: "i-folders",
  class: "scale-90",
  order: 3,
  search: false,
})

const { summoner } = storeToRefs(sSession())
watch(
  () => summoner.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <div class="w-full">
    <NuxtLayout name="sticky-aside-layout">
      <template #left> </template>
    </NuxtLayout>
  </div>
</template>
