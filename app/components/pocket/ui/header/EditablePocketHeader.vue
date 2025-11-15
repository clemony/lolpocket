<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'
import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const {
  buttonClass,
  class: className,
  pocket: p,
  wrapperClass,
} = defineProps<{
  pocket?: Pocket
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
  buttonClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['submit', 'update:model-value'])
const pocket = computed(() => p)
const modelValue = ref<string>(null)

function update(e) {
  modelValue.value = e
  emit('update:model-value', modelValue.value)
}

const editableRef = ref<string>()

function activateEdit(e: MouseEvent, editFn: () => void) {
  if ((e.target as HTMLElement)?.closest('button'))
    return
  editFn()
}

onMounted(async () => {
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
    :class="
      cn(
        `
          group/edit flex h-14 w-160 max-w-160 cursor-text items-center
          justify-between overflow-hidden rounded-box border border-transparent
          px-2.5 py-0
          focus-within:border-b3 focus-within:bg-b1
          hover:border-b3 hover:bg-b1
        `,
        wrapperClass,
      )
    "
    as-child
    @update:model-value="modelValue = $event">
    <!-- Name Input/Preview -->
    <button
      class="
        relative flex w-160 w-full items-center justify-between gap-2 truncate
        pr-20
      "
      @click="(e) => activateEdit(e, edit)">
      <EditableArea class="w-160 overflow-hidden">
        <div
          class="
            w-160 overflow-hidden pr-18
            *:font-bold *:text-nowrap *:dst
            **:truncate **:tracking-tight
          ">
          <EditablePreview :class="cn('', className)">
            {{ pocket.name || "Pocket" }}
          </EditablePreview>

          <EditableInput
            :class="cn('text-bc/30', className)"
            spellcheck="false" />
        </div>
      </EditableArea>

      <!-- Icon Buttons -->
      <div
        class="
          pointer-events-none absolute right-3 flex h-full w-10 max-w-10
          min-w-10 items-center justify-end
        "
        :class="cn('', buttonClass)">
        <!-- Show edit icon only when not editing -->
        <EditableEditTrigger
          v-show="!isEditing"
          as="button"
          class="
            pointer-events-auto opacity-0 transition-opacity
            group-hover/edit:opacity-100
          ">
          <icon
            name="edit"
            class="mr-2 size-4 text-bc/50" />
        </EditableEditTrigger>

        <!-- Show action icons when editing -->
        <div
          v-show="isEditing"
          class="
            pointer-events-auto absolute flex items-center justify-end gap-1
            px-1
          ">
          <button
            class="
              btn btn-square btn-ghost btn-xs
              hover:border-b3/80 hover:bg-b3/40! hover:inset-shadow-xxs
            "
            @click="pocket.name = generateName()">
            <icon
              name="shuffle"
              class="size-3 dst" />
          </button>

          <button
            class="
              btn btn-square btn-ghost btn-xs
              hover:border-b3/80 hover:bg-b3/40! hover:inset-shadow-xxs
            "
            @click="modelValue = ''">
            <icon
              name="x-sm"
              class="dst" />
          </button>
        </div>
      </div>
    </button>
  </EditableRoot>
</template>
