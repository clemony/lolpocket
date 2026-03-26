<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"
import {
  isExternal,
  itemKey,
  itemTarget,
  itemTrailingIcon
} from "../build/useCommandGroups"

const { groups } = defineProps<{
  groups: Record<string, CommandGroup | undefined>
}>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
</script>

<template>
  <div class="grid w-full max-w-168 grid-cols-[0.8fr_1fr]">
    <CommandGroup
      v-if="groups.library"
      :items="groups.library"
      @update:open="(item) => emit('update:open', item)" />
    <div v-if="groups.reference" class="h-full py-3 pl-5">
      <UUser
        size="xl"
        :ui="{ root: 'mb-3', name: 'mb-1' }"
        :description="groups.reference.description"
        :name="groups.reference.label" />

      <div class="grid w-full grid-cols-2 gap-x-0.5 gap-y-2">
        <UButton
          v-for="item in groups.reference.items"
          :key="itemKey(item)"
          data-command-menu-item="true"
          :label="item.label"
          :icon="item.icon"
          size="custom"
          trailing-icon="i-right"
          :ui="{
            base: cn(
              'noise relative flex size-full h-17.5 w-full items-end justify-start gap-0! overflow-hidden border-0 bg-neutral p-2.5! text-nc shadow-sm drop-shadow-sm **:text-nc! even:ml-1 hover:bg-neutral/80'
            ),
            label:
              'flex size-full items-end px-0 pb-0.25 text-xl leading-none font-bold',
            trailingIcon:
              'absolute right-3.5 bottom-3 size-5! opacity-80 **:stroke-[2] group-hover/btn:opacity-100',
            leadingIcon: cn(
              'absolute top-2.5 left-2.5 size-4.5! text-nc! **:text-nc'
            )
          }"
          @click="emit('update:open', item)" />
      </div>
    </div>
  </div>
</template>
