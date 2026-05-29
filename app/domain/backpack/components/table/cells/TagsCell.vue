<script lang="ts" setup>
import type { ListboxItem, PopoverProps, TableRow } from "@nuxt/ui"
import type { MaybeElementRef } from "@vueuse/core"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()

const store = pocketStore()
const { settings } = storeToRefs(user())

const tagItems = computed(() => [
  ...new Set([...(settings.value?.pocket_tags ?? []), ...store.tags])
])

const modelValue = computed<string[]>({
  get: () => row.original?.tags ?? [],
  set: (value) => store.setPocketTags(String(row.original?.key), value)
})

function onCreate(item: string) {
  if (!settings.value) return
  settings.value.pocket_tags = [...(toValue(settings)?.pocket_tags ?? []), item]

  modelValue.value = [...modelValue.value, item]
}

const pocketTags = computed<ListboxItem[]>(() =>
  (row.getValue("tags") as string[]).map((tag) => ({
    label: tag,
    value: tag
  }))
)

const input = useTemplateRef<{
  inputRef?: HTMLInputElement | { value?: HTMLInputElement | null } | null
}>("input")

const { focused } = useFocus(
  computed(() => input.value?.inputRef) as MaybeElementRef
)

const content: Partial<PopoverProps["content"]> = {
  side: "top",
  align: "end",
  sideOffset: 0,
  onOpenAutoFocus: (e: Event) => {
    e.preventDefault()
    nextTick(() => {
      focused.value = true
    })
  }
}
</script>

<template>
  <div
    class="group/cell z-auto grid size-full min-h-[60px] min-w-48 place-items-center gap-1 p-1"
    @click.stop
    @pointerdown.stop>
    <UInputMenu
      ref="input"
      v-model="modelValue"
      :items="tagItems"
      multiple
      placeholder="new tag..."
      trailing-icon="i-add"
      :ui="{
        root: 'w-full',
        base: cn(
          'h-19 items-end rounded-lg bg-transparent pt-0 text-xs ring-transparent group-hover/cell:bg-p0 has-focus-visible:bg-p0'
        ),
        tagsInput:
          'placeholder:opacity-0 group-focus-within/cell:placeholder:opacity-100 group-hover/cell:placeholder:opacity-100',
        trailingIcon:
          'absolute size-3.5 **:stroke-[14%]! group-hover/btn:text-nc',
        trailing:
          'group/btn btn inset-y-auto right-2 bottom-2 grid! btn-square size-6 place-items-center rounded-md border-0 btn-ghost duration-0! hover:btn-neutral',
        tagsItem: 'badge border-0 bg-n1 badge-neutral',
        tagsItemText: 'font-semibold text-nc',
        tagsItemDeleteIcon: 'text-nc'
      }"
      @create="onCreate" />
  </div>
</template>
