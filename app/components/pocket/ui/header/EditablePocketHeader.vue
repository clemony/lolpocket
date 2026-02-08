<script lang="ts" setup>
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
  if ((e.target as HTMLElement)?.closest('button')) return
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
    v-slot="{ isEditing, edit }"
    ref="editableRef"
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
        'group/edit flex h-14 w-160 max-w-160 cursor-text items-center justify-between overflow-hidden rounded-box border border-transparent px-2.5 py-0 focus-within:border-p3 focus-within:bg-p0 hover:border-p3 hover:bg-p0',
        wrapperClass,
      )
    "
    as-child
    @update:model-value="modelValue = $event">
    <!-- Name Input/Preview -->
    <button
      class="relative flex w-160 w-full items-center justify-between gap-2 truncate pr-20"
      @click="(e) => activateEdit(e, edit)">
      <EditableArea class="w-160 overflow-hidden">
        <div
          class="w-160 overflow-hidden pr-18 *:font-bold *:text-nowrap *:dst **:truncate **:tracking-tight">
          <EditablePreview :class="cn('', className)">
            {{ pocket.name || "Pocket" }}
          </EditablePreview>

          <EditableInput
            :class="cn('text-pc/30', className)"
            spellcheck="false" />
        </div>
      </EditableArea>

      <!-- Icon Buttons -->
      <div
        class="pointer-events-none absolute right-3 flex h-full w-10 max-w-10 min-w-10 items-center justify-end"
        :class="cn('', buttonClass)">
        <!-- Show edit icon only when not editing -->
        <EditableEditTrigger
          v-show="!isEditing"
          class="pointer-events-auto opacity-0 transition-opacity group-hover/edit:opacity-100"
          as="button">
          <icon
            class="mr-2 size-4 text-pc/50"
            name="edit" />
        </EditableEditTrigger>

        <!-- Show action icons when editing -->
        <div
          v-show="isEditing"
          class="pointer-events-auto absolute flex items-center justify-end gap-1 px-1">
          <button
            class="btn btn-square btn-ghost btn-xs hover:border-p3/80 hover:bg-p3/40! hover:inset-shadow-xxs"
            @click="pocket.name = generateName()">
            <icon
              class="size-3 dst"
              name="shuffle" />
          </button>

          <button
            class="btn btn-square btn-ghost btn-xs hover:border-p3/80 hover:bg-p3/40! hover:inset-shadow-xxs"
            @click="modelValue = ''">
            <icon
              class="dst"
              name="x-sm" />
          </button>
        </div>
      </div>
    </button>
  </EditableRoot>
</template>
