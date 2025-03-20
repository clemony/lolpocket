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
    <!--
    <SelectTrigger class="w-full text-left  align-bottom flex items-end text-4 tracking-tight font-medium" :class="cn('', props.class)">
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
    </SelectContent>not-data-[state=open]:border-0 hover:bg-b2/40 rounded-lg not-data-[state=open]:inset-shadow-none not-data-[state=open]:shadow-none data-[state=open]:bg-b2/80 btn-square size-10  btn btn-ghost  justify-center    -->

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
              <icon v-if="ans.patchSelect == patch" name="tick-sm" class="size-4.5 dst" /></span> {{ patch }}
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>