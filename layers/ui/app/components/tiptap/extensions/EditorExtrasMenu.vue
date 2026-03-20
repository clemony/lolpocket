<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3"

const { editor } = defineProps<{
  editor: Editor | null
}>()

const shortcuts = [
  {
    key: "at",
    description: "Mention or tag other lolpocket users.",
  },
  {
    key: "picon:colon",
    description: "Search and insert emoji.",
  },
  {
    key: "hash",
    description: "Search and insert champion or item badges.",
  },
]
</script>

<template>
  <UPopover>
    <UButton
      square
      size="xs"
      variant="ghost"
      on="inset"
      hover="inset"
      @click.stop>
      <icon
        class="size-5! opacity-60 transition-all duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90"
        name="i" />
    </UButton>

    <LazyPopoverContent
      class="w-58 -translate-x-2 rounded-xl px-0 pt-px pb-1"
      data-theme="base"
      align="start">
      <table class="table pr-0 [&_th]:pr-1 [&_th]:pb-1">
        <!-- head -->
        <thead class="mb-0 border-b border-b-p3 pb-0">
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="pr-0">
          <!-- row -->
          <tr v-for="(item, i) in shortcuts" :key="i" class="py-0 pr-0">
            <th class="grid items-start py-2 pt-4">
              <Kbd class="" size="sq-6">
                <icon class="absolute size-3.5 opacity-90" :name="item.key" />
              </Kbd>
            </th>
            <td class="py-2 pr-0 text-sm/5">
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </LazyPopoverContent>
  </UPopover>
</template>
