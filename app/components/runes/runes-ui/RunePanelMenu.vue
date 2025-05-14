<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  set?: RuneSet
}>()

const emit = defineEmits(['clicked'])
const rs = useRuneStore()
const pocket = ref(props.pocket)

const ts = useTempStore()
function handleDelete() {
  pocket.value.runes[rs.selectedRuneSet] = props.pocket.runes[0]
  deleteRuneSet(props.pocket, props.set)
}

function handleNewSet() {
  const a = newRuneSet(pocket.value.key)
  /*  nextTick(() => {
    rs.selectedRuneSet = a
  }) */
}
</script>

<template>
  <div class="flex gap-2 items-center">
    <button
      v-tippy="'New Rune Set'"
      class="btn btn-md btn-square"
      @click="handleNewSet()">
      <icon
        name="add-sm"
        class=" size-6 shrink-0 dst" />
    </button>

    <button v-tippy="'Delete Current Set'" class="btn btn-square *:dst  " @click="handleDelete()">
      <icon name="trash" class="opacity-70 shrink-0  size-5" />
    </button>
  </div>
</template>

<style scoped>

</style>