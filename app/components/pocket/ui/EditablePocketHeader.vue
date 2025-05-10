<script lang="ts" setup>
import { motion, AnimatePresence, LayoutGroup } from 'motion-v'

import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
  icons?: boolean
}>()

const emit = defineEmits(['submit'])

const pocket = computed (() => {
  return props.pocket
})

const pocketName = ref(pocket.value.name)
</script>

<template>
  <EditableRoot v-slot="{ isEditing }" v-model:model-value="pocketName" activation-mode="focus" placeholder="Pocket Name..." required name="name" submit-mode="both" class="h-fit group/edit" @update:model-value="e => pocket.name = e" >
    <LayoutGroup >
    <EditableArea :class="cn('items-center **:!justify-start !justify-start flex *:w-full pl-2.5 pr-2.5*:items-center *:justify-center *:flex w-full py-0.75 *:text-start rounded-box focus-within:bg-b2 tldr-20 border border-transparent hover:border-b3/40 focus-within:border-b3/40 hover:bg-b2/70 z-0 cursor-text', {'pr-16': props.icons}, props.wrapperClass)">
      <EditablePreview :class="cn(props.class)">
        {{ pocket.name }}
      </EditablePreview>
      <EditableInput :class="cn(props.class)" spellcheck="false">
        {{ pocket.name }}
      </EditableInput>
    </EditableArea>

    <!-- icons -->

     <transition-fade group v-if="props.icons" class="absolute right-0 top-0 flex px-4 items-center *:text-2 h-full w-16 flex-nowrap justify-end z-1" :class="cn('', props.buttonClass)">

        <EditableEditTrigger v-if="!isEditing"  :layout="true"  as="button" class="opacity-0 tldr-20 group-hover/edit:opacity-100">
 
          <icon name="edit" class="text-bc/50 mr-2 size-4"/>

        </EditableEditTrigger>


        <button v-if="isEditing"  class="btn btn-ghost btn-sm btn-square  hover:!bg-b3/40 btn-xs btn-square hover:border-b3/80 hover:inset-shadow-xxs" as="button" @click="pocketName = generateShortString().toString()">
   <icon name="shuffle" class="size-3 dst"/>
        </button>

        <button v-if="isEditing"  as="button" class="btn btn-ghost hover:!bg-b3/40 btn-xs btn-square hover:border-b3/80 hover:inset-shadow-xxs" @click="pocketName = ''">
  <icon name="x-sm" class="dst"/>
        </button>
    </transition-fade>


    <!-- text -->

    <div v-else class="absolute flex gap-3 px-4 *:text-2 w-full flex-nowrap justify-end z-1" :class="cn('', props.buttonClass)">
      <AnimatePresence as="div" mode="popLayout" multiple >

          <motion.div :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }">
        <EditableEditTrigger v-if="!isEditing"  :layout="true"  as="button" class="opacity-0 tldr-20 group-hover/edit:opacity-100">
 
              Edit

        </EditableEditTrigger>
          </motion.div>

        <motion.button v-if="isEditing"  :layout="true" :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }" class="cursor-pointer px-1" as="button" @click="pocketName = generateShortString().toString()">
          Randomize
        </motion.button>

        <motion.button v-if="isEditing"  :layout="true" :animate="{ opacity: [0, 1] }" :exit="{ opacity: [1, 0] }" as="button" class="cursor-pointer px-1" @click="pocketName = ''">
          Clear
        </motion.button>
      </AnimatePresence>
    </div>
    </LayoutGroup>
  </EditableRoot>
</template>