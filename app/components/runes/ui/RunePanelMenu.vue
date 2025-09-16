<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  set?: RuneSet
}>()

const rs = useRuneStore()
const pocket = ref(props.pocket)

function handleDelete() {
  rs.selectedRuneSet = 0
  deleteRuneSet(props.pocket, props.set)
}

/* function handleNewSet() {
  const a = newRuneSet(pocket.value.key)
  nextTick(() => {
    const b = pocket.value.runes.findIndex(s => s == a)
    rs.selectedRuneSet = b
  })
} */

// TODO MOVE
</script>

<template>
  <div class="flex gap-2 items-center">
    <!--     <button
      v-tippy="'New Rune Set'"
      class="btn btn-md btn-square"
      @click="handleNewSet()">
      <icon
        name="add"
        class=" size-6 shrink-0 dst" />
    </button> -->

    <button
      v-tippy="'Delete Current Set'"
      class="btn rounded-lg btn-sm btn-ghost hover:bg-b3/5 hover:border b3/4 *:dst"
      @click="handleDelete()">
      <icon
        name="trash"
        class="opacity-70 shrink-0 size-5 text-nc" />
    </button>
  </div>
</template>

<style scoped></style>
