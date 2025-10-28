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
        class="!size-5 group-focus-within/text:opacity-90 group-hover/text:opacity-90 transition-all duration-100 opacity-60" />
    </PopoverTrigger>

    <LazyPopoverContent
      ref="target"
      data-theme="base"
      align="start"
      class="-translate-x-2 tippy-box rounded-xl w-68 px-0 py-px">
      <table class="table [&_th]:pr-1 [&_th]:pb-1">
        <!-- head -->
        <thead class="mb-0 pb-0">
          <tr>
            <th>
              Key
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row -->
          <tr
            v-for="item, i in shortcuts"
            :key="i">
            <th>
              <Kbd
                class="-translate-y-1"
                size="sq-xxs">
                <icon
                  :name="item.key"
                  class="size-3.5 opacity-90 absolute" />
              </Kbd>
            </th>
            <td class="text-2">
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </LazyPopoverContent>
  </Popover>
</template>