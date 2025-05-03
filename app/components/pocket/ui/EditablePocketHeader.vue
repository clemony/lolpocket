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
  wrapperClass?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['submit'])

const pocket = computed (() => {
  return props.pocket
})

const pocketName = ref(pocket.value.name)
</script>

<template>
  <EditableRoot v-slot="{ isEditing }" v-model:model-value="pocketName" activation-mode="focus" placeholder="Pocket Name..." required name="name" submit-mode="both" class=" group/edit" @update:model-value="e => pocket.name = e">
    <EditableArea class="" :class="cn('items-center justify-center flex *:w-full *:items-center *:justify-center *:flex w-full py-2 *:text-center rounded-box focus-within:bg-b2 tldr-20 border border-transparent hover:border-b3/40 focus-within:border-b3/40 hover:bg-b2/70 z-0 cursor-text', props.wrapperClass)">
      <EditablePreview :class="cn('', props.class)">
        {{ pocket.name }}
      </EditablePreview>
      <EditableInput :class="cn(' ', props.class)" spellcheck="false">
        {{ pocket.name }}
      </EditableInput>
    </EditableArea>

    <LayoutGroup >
    <div class="absolute flex gap-3 px-4 *:text-2 w-full flex-nowrap justify-end z-1" :class="cn('', props.buttonClass)">
      <AnimatePresence mode="popLayout">
        <EditableEditTrigger v-if="!isEditing"  :layout="true"  as="button" class="opacity-0 tldr-20 group-hover/edit:opacity-100">
          <Motion as="div" :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }">
            <div>
              Edit
            </div>
          </Motion>
        </EditableEditTrigger>
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        <Motion v-if="isEditing"  :layout="true" :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }" class="cursor-pointer" as="button" @click="pocketName = generateShortString().toString()">
          Randomize
        </Motion>

        <Motion v-if="isEditing"  :layout="true" :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }" as="button" class="cursor-pointer" @click="pocketName = ''">
          Clear
        </Motion>
      </AnimatePresence>
    </div>
    </LayoutGroup>
  </EditableRoot>
</template>