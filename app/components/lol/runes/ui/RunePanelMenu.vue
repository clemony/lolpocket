<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  set?: RuneSet
}>()

const pocket = ref(props.pocket)

function handleDelete() {
  rs().selectedRuneSet = 0
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
      v-tippy="'New Rune Set'"
      class="btn btn-md btn-square"
      @click="handleNewSet()">
      <icon
        name="add"
        class=" size-6 shrink-0 dst" />
    </button> -->

    <button
      v-tippy="'Delete Current Set'"
      class="p3/4 btn rounded-lg btn-ghost btn-sm *:dst hover:border hover:bg-p3/5"
      @click="handleDelete()">
      <icon class="size-5 shrink-0 text-nc opacity-70" name="trash" />
    </button>
  </div>
</template>
