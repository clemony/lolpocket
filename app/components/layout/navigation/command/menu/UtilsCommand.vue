<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"

const { items: is } = defineProps<{
  items: CommandGroup
}>()

/*      return {
        action: ,
        label: "Backpack",
        id: String(v.label),
        items: [v?.children?.[0] as CommandItem],
        value: String(v?.children?.[0]?.label),
        slot: "backpack-command" as const,
        children: v?.children?.slice(1, -1)
      }  */

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
/* const items = computed<CommandGroup[]>(() => ({
  ...is
    .map((v: CommandItem) => {
      if (v.label !== "Backpack")
        return {
          ...v,
          value: String(v.label),
          description: v.description,
          id: String(v.label),
          items: v?.children
            ? v?.children.map((vi: CommandItem) => ({
                ...vi,
                id: String(vi.label),
                value: String(vi.label)
              }))
            : []
        }
      else return [] as unknown as CommandGroup
    })
    .filter((v) => v.id)
})) */
</script>

<template>
  n
  <!--   <div class="grid w-full gap-6 px-3 py-5">
    <div v-for="(v, i) in items" :key="i" :items="v" class="space-y-0.5">
      <h6 class="mb-1.5 ml-1.25 text-sm">
        {{ v.label }}
      </h6>

      <CommandButton :item="item" />
    </div>
  </div> -->
</template>
