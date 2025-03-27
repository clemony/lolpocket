<script lang="ts" setup>
import {
  EditableArea,
  EditableCancelTrigger,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const props = defineProps<{
  pocket: pocket
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['submit'])

const pocket = computed (() => {
  return props.pocket
})

const pocketName = ref(pocket.value.name)
</script>

<template>
  <EditableRoot v-slot="{ isEditing }" v-model:model-value="pocketName" activation-mode="focus" placeholder="Pocket Name..." required name="name" submit-mode="both" class=" group/edit" @update:model-value="e => pocket.name = e">
    <EditableArea class="items-center justify-center flex *:w-full *:items-center *:justify-center *:flex w-full py-2 *:text-center rounded-box focus-within:bg-b2 tldr-20 border border-transparent hover:border-b3/40 focus-within:border-b3/40 hover:bg-b2/70 z-0 cursor-text">
      <EditablePreview :class="cn('', props.class)">
        {{ pocket.name }}
      </EditablePreview>
      <EditableInput :class="cn(' ', props.class)" spellcheck="false">
        {{ pocket.name }}
      </EditableInput>
    </EditableArea>
    <transition-slide group class="absolute flex gap-3 px-4 *:text-2 w-full flex-nowrap justify-end z-1">
      <EditableEditTrigger class="opacity-0 tldr-20 group-hover/edit:opacity-100">
      </EditableEditTrigger>
      <button v-if="isEditing" class="cursor-pointer" @click="pocketName = generateShortString()">
        Randomize
      </button>

      <button v-if="isEditing" class="cursor-pointer" @click="pocketName = ''">
        Clear
      </button>
    </transition-slide>
  </EditableRoot>
</template>