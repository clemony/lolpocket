<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
}>()
const is = useItemStore()

const pocket = ref(props.pocket)

const items = ref<any[]>([])

watch(items, (newItemSets) => {
  if (pocket.value) {
    pocket.value.items.sets = newItemSets
  }
})

/* function updateChildIndex(evt) {
  const { oldIndex, newIndex } = evt

  if (!pocket.value) {
    return
  }

  if (pocket.value.items.default === oldIndex) {
    pocket.value.items.default = newIndex
  }
  else if (pocket.value.items.default > oldIndex && pocket.value.items.default <= newIndex) {
    pocket.value.items.default--
  }
  else if (pocket.value.items.default < oldIndex && pocket.value.items.default >= newIndex) {
    pocket.value.items.default++
  }
} */
</script>

<template>
  <div class="absolute top-0 left-0 inset-0 pt-28 px-12">

   <div class="[&_svg]:shrink-0 justify-self-end absolute top-30 right-6 *:btn-square *:hover:bg-b2/40 *:rounded-md  *:btn-ghost *:btn-md flex gap-2 ">
      <button
        v-tippy="'Add Set'"
        class="btn  "
        @click="newItemSet(props.pocket.key)">
        <icon
          name="add"
          class="size-4 stroke-[1.5] dst" />
      </button>
   </div>
    <ItemsHeader :pocket="pocket" />

    <div
      v-draggable="[
        pocket.items.sets,
        {
          'group': {
            name: 'sets',
          },
          'sort': true,
          'bubbleScroll': false,
          'scroll': false,
          'delay': 0,
          'animation': 300,
          'force-fallback': true,
          'fallbackTolerance': 0,
          'fallbackOnBody': true,
          'prevent-on-filter': true,
          'ghostClass': 'set-ghost',
          'dragClass': 'set-drag',
        },
      ]"
      group
      class="z-0 h-full min-w-110 w-full pt-2 flex-wrap flex-col items-center gap-8 flex">
      <label
        v-for="set, in pocket.items.sets"
        :key="set.name"
        drag-class="setDrag"
        class="field">
        <input v-model="is.selectedItemSet" type="radio" name="selected-set" class="!hidden" />
        <EditableInputBox :model-value="set.name" class="*:font-semibold *:tracking-tight focus-within:btn focus-within:btn-sm focus-within:rounded-md focus-within:justify-start focus-within:px-2 focus-within:ring focus-within:ring-neutral/60  h-10 cursor-pointer focus-within:-top-4 focus-within:left-3 transition-colors duration-300 focus-within:text-start focus-within:bg-b1 focus-within:hover:bg-b1 field-legend  [&_.edit-trigger]:opacity-0 " @update:model-value="(e) => set.name = e " />
        <DropdownMenu>
          <DropdownMenuTrigger class="group  top-2 .5 absolute right-4 data-[state=open]:!bg-b1/90 hover:border-b2 btn btn-sm btn-ghost  dst hover:!bg-b1/90  rounded-lg btn-square">
            <icon name="more" class="size-5 shrink-0" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem @click="resetItems(set)">
              <icon name="reset" />
              Reset Set Items
            </DropdownMenuItem>

            <DropdownMenuItem @click="deleteItemSet(pocket, set)">
              <icon name="trash" />
              Delete Set
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div class="pl-4 pr-14 pt-2 pb-2 **:select-none">
          <ItemSet
            :pocket="pocket"
            :set="set" />
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.set-drag {
  display: flex;
  width: 100%;

  & div {
    display: flex;
    width: 100%;
  }
}

.set-ghost {
  display: flex;
  width: 100%;
}
</style>
