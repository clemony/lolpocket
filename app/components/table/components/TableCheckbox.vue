<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      key: string
      name: string
      notes?: string // Notes can be undefined
    }
    api
    node
  }
}>()
const ps = usePocketStore()
// Get the pocket by its key
const pocket = getPocket(props.params.data.key)

function select(e) {
  props.params.node.setSelected(e.target.checked)
  console.log(e)
}

const selected = ref(props.params.node.isSelected())

watch(
  () => ps.tableSelectAll,
  (newVal) => {
    console.log('hi', newVal)
    selected.value = newVal
  },
)
</script>

<template>
  <div class="size-full">
    <label class="grid size-full place-items-center">
      <input
        v-model="selected"
        type="checkbox"
        class="checkbox checkbox-sm border-n1/60 rounded-sm border"
        @change="select($event)" />
    </label>
  </div>
</template>

<style scoped></style>
