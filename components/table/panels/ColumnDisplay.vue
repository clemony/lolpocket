<script lang="ts" setup>
const props = defineProps<{
  grid: string
}>()
const ts = useTempStore()
const ps = usePocketStore()
const api = shallowRef()

onMounted (async () => {
  if (props.grid == 'item') {
    api.value = ts.itemGridApi
  }
  else if (props.grid == 'pocket') {
    api.value = ps.pocketGridApi
  }
  await api.value
})

const columns = computedAsync (() => {
  const a = api.value.getColumns()
  const c = []
  a.forEach((element) => {
    if (element.originalParent && element.originalParent.groupId.match(/\d/)) {
      c.push(element)
    }
    else {
      c.push(element.originalParent)
    }
  })

  const b = useArrayUnique(c)
  return b.value
})
watch(
  () => columns.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div>
    <ul class="flex flex-col gap-2">
      <template v-for="(column, index) in columns" :key="index">
        <OneColumn :column="column" :grid="props.grid" />
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>