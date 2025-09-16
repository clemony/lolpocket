<script lang="ts" setup>
const route = useRoute()
const researchNav = ref('/research/champions')

onMounted(() => {
  researchNav.value = route.path
})
</script>

<template>
  <Tabs
    v-model:model-value="researchNav"
    class="w-full"
    @update:model-value="(e) => navigateTo(e.toString())">
    <TabsList class="w-full grid grid-cols-2">
      <TabsTrigger value="/research/champions">
        Champions
      </TabsTrigger>

      <TabsTrigger value="/research/items">
        Items
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
