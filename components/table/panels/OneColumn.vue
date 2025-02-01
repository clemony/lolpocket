<script lang="ts" setup>
const ts = useTempStore()


const api = shallowRef(ts.itemGridApi)
const props = defineProps<{
column: any
}>()


function findState(column) {
  const allState = api.value.getColumnState();
  const sortState = allState.map((state) => ({
    colId: state.colId,
    hide: state.hide
  }));
  const a = allState.find((col) => col.colId == column.colId)
  if(a){
    return a.hide
  }
}
const checked = ref(true)
function handleChange(e, column){
  api.value.applyColumnState({
    state: [
        {
            colId: column.getColId(),
            hide: e
        }
    ],
    defaultState: {
        hide: null
    }
})
//e ? checked.value  = false : !e ? checked.value = true : ''
}

</script>

<template>
<li  v-if="column.getColDef().headerTooltip">
        <label class="btn btn-ghost btn-md hover:bg-b2/50 hover:border-b2 gap-5 !text-3 justify-start w-full">
          <Switch :checked="checked" :value="column.getColId()"  @update:checked="handleChange($event, column)"/>
    {{column.getColDef().headerTooltip}}
    </label>
      </li>
</template>

<style scoped>

</style>