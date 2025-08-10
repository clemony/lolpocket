<script lang="ts" setup>
import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const { pocket: p, class: className, wrapperClass, buttonClass } = defineProps<{
  pocket?: Pocket
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['submit', 'update:model-value'])
const pocket = computed(() => p)
const modelValue = ref(null)

function update(e) {
  modelValue.value = e
  emit('update:model-value', modelValue.value)
}

const editableRef = ref()

function activateEdit(e: MouseEvent, editFn: () => void) {
  if ((e.target as HTMLElement)?.closest('button'))
    return
  editFn()
}

onMounted (async () => {
  modelValue.value = pocket.value.name
})
</script>

<template>
  <!-- -->
  <EditableRoot
    v-if="pocket && modelValue"
    ref="editableRef"
    v-slot="{ isEditing, edit }"
    v-model:model-value="pocket.name"
    :max-length="25"
    :select-on-focus="true"
    activation-mode="none"
    placeholder="Pocket Name..."
    required
    name="name"
    submit-mode="both"
    :class="cn(
      'group/edit h-14  max-w-160   w-160 flex items-center justify-between px-2.5 py-0 rounded-box border border-transparent hover:border-b3 overflow-hidden focus-within:border-b3 hover:bg-b1 focus-within:bg-b1 cursor-text',
      wrapperClass,
    )"
    as-child
    @update:model-value="modelValue = $event">
    <!-- Name Input/Preview -->
    <div
      class="w-full relative flex w-160  pr-20  items-center truncate justify-between gap-2"
      @click="e => activateEdit(e, edit)">
      <EditableArea class="w-160 overflow-hidden ">
        <div class="w-160 pr-18 overflow-hidden *:tracking-tight *:font-serif *: *:font-black **:truncate *:text-nowrap  *:dst ">
          <EditablePreview
            :class="cn('', className)">
            {{ pocket.name || 'Pocket' }}
          </EditablePreview>

          <EditableInput
            :class="cn('text-bc/30', className)"
            spellcheck="false" />
        </div>
      </EditableArea>

      <!-- Icon Buttons -->
      <div
        class=" absolute right-3 flex items-center justify-end h-full w-10 min-w-10 max-w-10 pointer-events-none"
        :class="cn('', buttonClass)">
        <!-- Show edit icon only when not editing -->
        <EditableEditTrigger
          v-show="!isEditing"
          as="button"
          class="opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-auto">
          <icon
            name="edit"
            class="text-bc/50 mr-2 size-4" />
        </EditableEditTrigger>

        <!-- Show action icons when editing -->
        <div
          v-show="isEditing"
          class="absolute  flex items-center justify-end gap-1 px-1 pointer-events-auto">
          <button
            class="btn btn-ghost btn-xs btn-square hover:!bg-b3/40 hover:border-b3/80 hover:inset-shadow-xxs"
            @click="pocket.name = generateName()">
            <icon
              name="shuffle"
              class="size-3 dst" />
          </button>

          <button
            class="btn btn-ghost btn-xs btn-square hover:!bg-b3/40 hover:border-b3/80 hover:inset-shadow-xxs"
            @click="modelValue = ''">
            <icon
              name="x-sm"
              class="dst" />
          </button>
        </div>
      </div>
    </div>
  </EditableRoot>
</template>