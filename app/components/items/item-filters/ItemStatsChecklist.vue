<script lang="ts" setup>
import { ListboxContent,  ListboxItem, ListboxRoot } from 'reka-ui'
const is = useItemStore()

</script>

<template>
  <Field title="stats" class="p-0 max-h-90 overflow-hidden h-120 max-h-90">
    <ListboxRoot v-model:model-value="is.itemFilter.stats" class="w-full overflow-y-scroll overscroll-auto px-1.5  h-120 max-h-90 " :multiple="true" @entry-focus.prevent>
            <ListboxContent class="w-full py-4 ">
       <ListboxItem
          v-for="stat in itemStats.filter(s => s.id != 'msflat' && s.id != 'mpenflat')"
          :key="stat.id" :value="stat.id" class=" grid grid-cols-[4fr_repeat(2,1fr)] gap-3 rounded-lg cursor-pointer  focus:outline-0 hover:border-b3 px-5 hover:bg-b3/30  py-1.5  grid shrink-0 w-full items-center  **:font-medium *:text-bc  dst" :class="{ 'bg-b3/40 border-b3 shadow-xs inset-shadow-sides bg-noise inset-shadow-b3/10': is.itemFilter.stats && is.itemFilter.stats.includes(stat.id) }">

          {{ stat.displayName }}
       </ListboxItem>
            </ListboxContent>
    </ListboxRoot>
  </Field>
</template>