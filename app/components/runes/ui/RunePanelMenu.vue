<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  set?: RuneSet
}>()

const pocket = ref(props.pocket)

function handleDelete() {
  rs().selectedRuneSet = 0
  deleteRuneSet(props.pocket, props.set)
}

/* function handleNewSet() {
  const a = newRuneSet(pocket.value.key)
  nextTick(() => {
    const b = pocket.value.runes.findIndex(s => s === a)
    rs().selectedRuneSet = b
  })
} */

// @todo MOVE
</script>

<template>
  <div class="flex items-center gap-2">
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
<<<<<<< HEAD
      class="btn btn-sm btn-ghost hover:bg-b3/5 b3/4 *:dst rounded-lg hover:border"
      @click="handleDelete()">
      <icon
        name="trash"
        class="text-nc size-5 shrink-0 opacity-70" />
=======
      class="btn rounded-lg btn-sm btn-ghost hover:bg-b3/5 hover:border b3/4 *:dst"
      @click="handleDelete()">
      <icon
        name="trash"
        class="opacity-70 shrink-0 size-5 text-nc" />
>>>>>>> refs/remotes/origin/main
    </button>
  </div>
</template>

<style scoped></style>
