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
  <div class="absolute top-0 left-0 inset-0 pt-24 px-12">

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
          'handle': '.handle'
        },
      ]"
      group
      class="z-0 h-full min-w-110 w-full pt-2 flex-wrap flex-col items-center gap-8 flex">
      <Field
        v-for="set, in pocket.items.sets"
        :key="set.name" class="  group/set">
        <input v-model="is.selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" />
        <EditableInputBox :model-value="set.name" class="*:font-semibold *:tracking-tight focus-within:btn focus-within:btn-sm z-0focus-within:rounded-md focus-within:justify-start focus-within:px-2 focus-within:ring focus-within:ring-neutral/60 max-w-90 h-10 cursor-pointer focus-within:-top-4 focus-within:left-3 transition-colors duration-300 focus-within:text-start focus-within:bg-b1 focus-within:hover:bg-b1 field-legend  [&_.edit-trigger]:opacity-0 " @update:model-value="(e) => set.name = e " />

        <DropdownMenu>
          <DropdownMenuTrigger class="group/trig z-2 top-2.5 absolute right-4  data-[state=open]:!bg-neutral/85 hover:border-b2 btn btn-sm btn-ghost !pointer-events-auto dst hover:!bg-b1/90  rounded-lg btn-square">
            <icon name="more" class="size-5 shrink-0 group-data-[state=open]/trig:!text-nc" />
          </DropdownMenuTrigger>
          <LazyContrastDropdownContent align="end" :side-offset="1" class="w-64">
           <LazyItemSetMenu :pocket="pocket" :set="set"  />
          </LazyContrastDropdownContent>
        </DropdownMenu>

        <div v-tippy="'Move Set'" class="absolute bottom-2 right-3 opacity-0 group-hover/set:opacity-40 tldr-30 btn btn-ghost hover:opacity-100 btn-circle handle">
          <icon name="ph:caret-circle-up-down-light" class="rotate-180 size-7 shrink-0"/>
        </div>
        <div class="pl-4 pr-14 pt-2 pb-2 **:select-none">
          <ItemSet
            :pocket="pocket"
            :set="set" />
        </div>
      </Field>
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
