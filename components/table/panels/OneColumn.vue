<script lang="ts" setup>
const props = defineProps<{
  grid: string
  column: any
}>()

const ts = useTempStore()
const ps = usePocketStore()

const api = shallowRef()

function findState(column) {
  const allState = api.value.getColumnState()
  const sortState = allState.map(state => ({
    colId: state.colId,
    hide: state.hide,
  }))
  const a = allState.find(col => col.colId == column.colId)
  if (a) {
    return a.hide
  }
}
const checked = ref(true)
function handleChange(e, column) {
  api.value.applyColumnState({
    state: [
      {
        colId: column.getColId(),
        hide: e,
      },
    ],
    defaultState: {
      hide: null,
    },
  })
}

const columnName = computedAsync (() => {
  return props.grid == 'item'
    ? props.column.colDef.headerTooltip
    : props.grid == 'pocket' && props.column.groupId
      ? props.column.groupId
      : props.grid == 'pocket' ? props.column.colDef.headerName : ''
})

const id = computedAsync (() => {
  return props.grid == 'item' || (props.grid == 'item' && props.column.groupId.match(/\d/)) ? props.column.getColId() : props.grid == 'item' ? props.column.getGroupId() : ''
})

onMounted (async () => {
  if (props.grid == 'item') {
    api.value = ts.itemGridApi
  }
  else if (props.grid == 'pocket') {
    api.value = ps.pocketGridApi
  }
  await api.value
  console.log('💠 - column:', props.column)
})
</script>

<template>
  <li v-if="columnName">
    <label class="btn btn-ghost btn-md hover:bg-b2/50 hover:border-b2 gap-5 !text-3 justify-start w-full">
      <Switch :checked="checked" :value="id" @update:checked="handleChange($event, column)" />
      {{ columnName }}
    </label>
  </li>
</template>

<style scoped>

</style>