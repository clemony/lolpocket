<script lang="ts" setup>
import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const { name = '', class: className, wrapperClass, buttonClass } = defineProps<{
  name?: string
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['submit', 'update:model-value'])

const modelValue = ref('')

function update(e) {
  modelValue.value = e
  emit('update:model-value', modelValue.value)
}
onMounted (() => {
  modelValue.value = name ?? ''
})

const editableRef = ref()

function activateEdit(e: MouseEvent, editFn: () => void) {
  if ((e.target as HTMLElement)?.closest('button'))
    return
  editFn()
}
</script>

<template>
  <!-- -->
  <EditableRoot
    ref="editableRef"
    v-slot="{ isEditing, edit }"
    :model-value="modelValue"
    activation-mode="none"
    placeholder="Pocket Name..."
    required
    name="name"
    submit-mode="both"
    class="group/edit h-fit w-full"
    :class="cn(
      'flex items-center justify-between px-2.5 py-0.75 rounded-box border border-transparent hover:border-b3/40 focus-within:border-b3/40 hover:bg-b2/70 focus-within:bg-b2 cursor-text',
      wrapperClass,
    )"
    as-child @update:model-value="modelValue = $event">
    <!-- Name Input/Preview -->
    <div class="w-full flex items-center justify-between gap-2" @click="e => activateEdit(e, edit)">
      <EditableArea class="flex-grow min-w-0">
        <div class="w-full min-w-0">
          <EditablePreview
            :class="cn('w-full truncate min-w-0', className)">
            {{ name }}
          </EditablePreview>
          <EditableInput
            :class="cn('w-full truncate min-w-0', className)"
            spellcheck="false" />
        </div>
      </EditableArea>

      <!-- Icon Buttons -->
      <div
        class="relative flex items-center justify-end h-full w-10 min-w-10 max-w-10 pointer-events-none"
        :class="cn('', buttonClass)">
        <!-- Show edit icon only when not editing -->
        <EditableEditTrigger
          v-show="!isEditing"
          as="button"
          class="opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-auto">
          <icon name="edit" class="text-bc/50 mr-2 size-4" />
        </EditableEditTrigger>

        <!-- Show action icons when editing -->
        <div
          v-show="isEditing"
          class="absolute inset-0 flex items-center justify-end gap-1 px-1 pointer-events-auto">
          <button
            class="btn btn-ghost btn-xs btn-square hover:!bg-b3/40 hover:border-b3/80 hover:inset-shadow-xxs"
            @click="generateShortString().then(r => modelValue = r)">
            <icon name="shuffle" class="size-3 dst" />
          </button>

          <button
            class="btn btn-ghost btn-xs btn-square hover:!bg-b3/40 hover:border-b3/80 hover:inset-shadow-xxs"
            @click="modelValue = ''">
            <icon name="x-sm" class="dst" />
          </button>
        </div>
      </div>
    </div>
  </EditableRoot>
</template>