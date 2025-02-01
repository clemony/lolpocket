<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const component = shallowRef(ts.pocketBarComponent)
watch(
  () => component.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

onMounted (async () => {
  const a = ts.pocketBarComponent
  await a
  component.value = a
})
</script>

<template>
  <component :is="component" :pocket="pocket" />
</template>

<style scoped>

</style>
