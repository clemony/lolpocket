<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:patch'])
const ms = useMatchStore()
const ds = useDataStore()
const sortedPatches = computed(() => {
  return getPatchList()
    .sort((a, b) => b.localeCompare(a))
})
const modelValue = ref(ms.patchSelect ?? ds.currentPatch)
</script>

<template>
  <Select v-model:model-value="modelValue" class="p-0" @update:model-value="(e) => ms.patchSelect = e">
    <SelectTrigger class="bg-transparent border-none shadow-none focus:ring-0 focus:outline-0 px-2" :class="cn('', props.class)" no-arrow>
      <icon name="more" class="size-5 shrink-0" />
    </SelectTrigger>
    <SelectContent position="popper" class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>
        <SelectItem v-for="patch in sortedPatches" :key="patch" :value="patch" no-tick>
          <slot :value="patch.toString()" />
          <span class="flex gap-2 items-center">
            <span class="size-4.5">
              <icon v-if="ms.patchSelect == patch" name="tick-sm" class="size-4.5 dst" /></span> {{ patch }}
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>