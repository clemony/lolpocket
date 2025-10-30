<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{
  editor: Editor | null
}>()

const shortcuts = [
  {
    key: 'at',
    description: 'Mention or tag other lolpocket users.'
  },
  {
    key: 'picon:colon',
    description: 'Search and insert emoji.'
  },
  {
    key: 'hash',
    description: 'Search and insert champion or item badges.'
  },
]
</script>

<template>
  <Popover>
    <PopoverTrigger
      ref="triggerEl"
      size="sq"
      class="size-7"
      variant="ghost"
      active="inset"
      hover="inset"
      @click.stop>
      <icon
        name="i"
        class="!size-5 opacity-60 transition-all duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90" />
    </PopoverTrigger>

    <LazyPopoverContent
      ref="target"
      data-theme="base"
      align="start"
      class="tippy-box w-58 -translate-x-2 rounded-xl px-0 pt-px pb-1">
      <table class="table pr-0 [&_th]:pr-1 [&_th]:pb-1">
        <!-- head -->
        <thead class="border-b-b3 mb-0 border-b pb-0">
          <tr>
            <th>
              Key
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="pr-0">
          <!-- row -->
          <tr
            v-for="item, i in shortcuts"
            :key="i"
            class="py-0 pr-0">
            <th class="grid items-start py-2 pt-4">
              <Kbd
                class=""
                size="sq-xxs">
                <icon
                  :name="item.key"
                  class="absolute size-3.5 opacity-90" />
              </Kbd>
            </th>
            <td class="text-2 py-2 pr-0 leading-5 ">
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </LazyPopoverContent>
  </Popover>
</template>