<script lang="ts" setup>
const ts = useTempStore()

const api = shallowRef(ts.itemGridApi)
const columns = computed (() => {
  const a = api.value.getColumns()
  return a
})
</script>

<template>
  <div>
    <ul class="flex flex-col gap-2">
      <template v-for="(column, index) in columns" :key="index">
        <OneColumn :column="column" />
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>