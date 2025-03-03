<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  isCollapsed?: boolean
  set: RuneSet
}>()

const emit = defineEmits(['clicked'])

const pocket = ref(props.pocket)
const isCollapsed = computed (() => {
  return props.isCollapsed
})

const ts = useTempStore()
function handleDelete() {
  ts.selectedRuneSet = props.pocket.runes.sets[0]
  deleteRuneSet(props.pocket, props.set)
}

function handleNewSet() {
  const a = newRuneSet(pocket.value.key)
  /*  nextTick(() => {
    ts.selectedRuneSet = a
  }) */
}
</script>

<template>
  <Field class="  **:pointer-events-auto h-28.5 pt-3.25 pb-4 px-4 w-fit">
    <div class="grid grid-cols-2 gap-2 p-i-c">
      <button
        v-tippy="isCollapsed ? 'Expand Rune Panel' : 'Collapse Rune Panel'"
        class="btn  btn-md btn-square join-item bg-b1 group"
        @click="emit('clicked')">
        <Hamburger :is-shrunk="isCollapsed" />
      </button>
      <button
        v-tippy="'New Rune Set'"
        class="btn btn-md btn-square bg-b1  "
        @click="handleNewSet()">
        <icon
          name="add-sm"
          class=" size-6 shrink-0 dst" />
      </button>

      <label v-tippy="set.key == pocket.runes.default ? 'Default Set' : 'Set as Default'" class="btn bg-b1 col-start-1  btn-md btn-square rounded-lg  *:dst" @click="set.key == pocket.runes.default">
        <input type="checkbox" :checked="set.key == pocket.runes.default" class="peer checkbox dst checkbox-neutral checkbox-sm" />

      </label>
      <button v-tippy="'Delete Current Set'" class="btn btn-square *:dst bg-b1  btn-md rounded-lg" @click="handleDelete()">
        <icon name="trash" class="opacity-70 shrink-0  size-5" />
      </button>
    </div>
  </Field>
</template>

<style scoped>

</style>