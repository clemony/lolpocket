<script lang="ts" setup>
import { deleteRuneSet } from "~/domain/pocket/modifyPocket"

const props = defineProps<{
  pocket: Pocket
  set?: RuneSet
}>()

const pocket = ref(props.pocket)

function handleDelete() {
  if (props.set) deleteRuneSet(props.pocket, props.set)
}

/* function handleNewSet() {
  const a = newRuneSet(pocket.value.key)
  nextTick(() => {
    const b = pocket.value.runes.findIndex(s => s === a)
    rs().selectedRuneSet = b
  })
} */

// todo MOVE
</script>

<template>
  <div class="flex items-center gap-2">
    <!--     <button
      label="'New Rune Set'"
      class="btn btn-md btn-square"
      @click="handleNewSet()">
      <icon
        name="add"
        class=" size-6 shrink-0 drop-shadow-2xs" />
    </button> -->

    <button
      label="'Delete Current Set'"
      class="p3/4 btn rounded-lg btn-ghost btn-sm *:ds-2xs hover:border hover:bg-p3/5"
      @click="handleDelete()">
      <icon class="size-5 shrink-0 text-nc opacity-70" name="trash" />
    </button>
  </div>
</template>
