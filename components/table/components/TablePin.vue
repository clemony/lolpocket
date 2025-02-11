<script setup lang="ts">
const props = defineProps<{
  params: any
}>()

const ps = usePocketStore()
// Get the pocket by its key
const pocket = getPocket(props.params.data.key)

function select(e) {
  props.params.node.setSelected(e.target.checked)
  console.log(e)
}

const pinned = ref()
/*
function handlePin(pocket) {
  if (pinned.value) {
    pocket.location.pinned = true
    console.log('💠 - handlePin - pocket.location.pinned :', pocket.location.pinned)
  }
  else if (!pinned.value) {
    pocket.location.folder = false
    console.log('💠 - handlePin - pocket.location.folder:', pocket.location.folder)
  }
} */
</script>

<template>
  <div class="size-full">
    <label class="grid size-full place-items-center">
      <input
        v-model="ps.pinnedTopRowData"
        type="checkbox"
        :value="pocket"
        class="checkbox checkbox-sm border-neutral/60 rounded-sm border"
      />
    </label>
  </div>
</template>

<style scoped></style>
