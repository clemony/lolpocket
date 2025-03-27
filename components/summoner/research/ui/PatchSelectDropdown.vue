<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:patch'])
const ans = useAnalysisStore()
const ds = useDataStore()
const sortedPatches = computed(() => {
  return getPatchList()
    .sort((a, b) => b.localeCompare(a))
})
const modelValue = ref(ans.patchSelect ?? ds.currentPatch)
</script>

<template>
  <Select v-model:model-value="modelValue" class="p-0" @update:model-value="(e) => ans.patchSelect = e">
    <SelectTrigger class="text-left bg-b1/60 shadow-none border-b3/80 inset-shadow-xs rounded-lg align-bottom h-12 flex items-center text-4 tracking-tight font-medium" :class="cn('', props.class)">
      <div class="flex">
        <span class="w-16"> &nbsp;Patch &nbsp;</span>
        <SelectValue :placeholder="ds.currentPatch" class="text-left w-20" />
      </div>
    </SelectTrigger>
    <SelectContent position="popper" class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>
        <SelectItem v-for="patch in sortedPatches" :key="patch" :value="patch">
          {{ patch }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>