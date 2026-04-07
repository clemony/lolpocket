<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"
import { itemKey } from "../build/useCommandGroups"

const { groups } = defineProps<{
  groups: Record<string, CommandGroup | undefined>
}>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
</script>

<template>
  <div class="w-full max-w-full px-3">
    <div v-if="groups.reference" class="py-2 pl-1">
      <UUser
        size="xl"
        :ui="{ root: 'mb-2 py-2', name: 'mb-1', wrapper: 'pr-6' }"
        :description="groups.reference.description"
        :name="groups.reference.label" />

      <div class="grid w-full grid-cols-2 gap-x-1.5 gap-y-2 pr-7 pl-1">
        <UButton
          v-for="item in groups.reference.items"
          :key="itemKey(item)"
          color="neutral"
          data-command-menu-item="true"
          :label="item.label"
          :icon="item.icon"
          trailing-icon="i-right"
          :ui="{
            base: cn(
              'noise relative flex size-full h-11! w-full justify-start gap-2.5! overflow-hidden rounded-xl border-0 bg-neutral p-3! text-nc shadow-sm **:text-nc! hover:bg-neutral/80'
            ),
            label: 'flex text-lg leading-none font-bold',
            trailingIcon:
              'right-2.5 bottom-3 size-4! opacity-80 **:stroke-[3.1] group-hover/btn:opacity-100',
            leadingIcon: cn('size-4.5!')
          }"
          @click="emit('update:open', item)" />
      </div>
    </div>
    <CommandGroup
      v-if="groups.library"
      class="w-full items-start"
      :ui="{
        itemTrailingIcon: 'size-3.25! -translate-y-px **:stroke-[2.4]'
      }"
      :items="groups.library"
      @update:open="(item) => emit('update:open', item)" />
  </div>
</template>
