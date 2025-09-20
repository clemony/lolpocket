<script lang="ts" setup>
import { statIndex } from '#shared/appdata'
import {
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
} from 'reka-ui'
</script>

<template>
  <ListboxRoot
    v-model:model-value="is().filters.stats"
    class="w-full overflow-y-scroll overscroll-auto px-1.5 h-120 max-h-90"
    :multiple="true"
    @entry-focus.prevent>
    <ListboxContent class="w-full pt-px pb-6">
      <ListboxItem
        v-for="stat in Object.values(statIndex).filter(
          (s) => s.id !== 'msflat' && s.id !== 'mpenflat',
        )"
        :key="stat.id"
        as-child
        :value="stat.id">
        <Button
          variant="ghost"
          size="sm"
          :class="
            cn('justify-start capitalize', {
              'btn-active': is().filters.stats.includes(stat.id),
            })
          ">
          {{ stat.name }}
          <ListboxItemIndicator
            class="w-fit justify-self-end justify-end bg-neutral">
            <input
              type="checkbox"
              class="checkbox checkbox-xs pointer-events-none checkbox-neutral"
              :checked="true" />
          </ListboxItemIndicator>
        </Button>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
