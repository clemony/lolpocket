<script lang="ts" setup>
import { statIndex } from '@appdata'

const { icons } = defineProps<{
  icons?: boolean
}>()
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.stats"
    class="w-full overflow-y-scroll overscroll-auto px-1.5 h-120 max-h-90"
    :multiple="true"
    @entry-focus.prevent>
    <ListboxContent as-child>
      <TransitionScalePop
        group
        class="w-full flex flex-col gap-1 pb-6">
        <ListboxItem
          v-for="stat in Object.values(statIndex).filter(s => s.type && s.type.includes('item'))"
          :key="stat.id"
          :class="
            cn('!gap-3 font-medium', {
              'btn-active text-white **:text-white  order-first': is().filters.stats.includes(stat.id),
            })
          "
          :style="{
            backgroundColor: is().filters.stats.includes(stat.id) ? stat.color : '',
          }"
          :value="stat.id">
          <Badge
            v-if="icons"
            :style="{
              backgroundColor: stat.color,
            }"
            :class="cn('badge-lg px-2 border-0', { 'shadow-none drop-shadow-none inset-shadow-none': is().filters.stats.includes(stat.id) })">
            <hicon
              :name="stat.icon"
              class="size-4 text-white" />
          </Badge>
          {{ stat.name }}
          <ListboxItemIndicator />
        </ListboxItem>
      </TransitionScalePop>
    </ListboxContent>
  </Listbox>
</template>
