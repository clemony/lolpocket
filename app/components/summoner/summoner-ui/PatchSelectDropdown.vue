<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:patch'])
const ms = useMatchStore()
// TRASH
</script>

<template>
  <!--   <Select v-model:model-value="modelValue" class="" @update:model-value="(e) => ms.mf.patch = e">
    <CustomSelectTrigger :class="cn('', props.class)"> -->
  <!--       <div class="relative">
        <span class="w-16 pt-0.75 absolute left-7 font-semibold"> &nbsp;Patch &nbsp;</span> -->
  <!--       <SelectValue :placeholder="ds.currentPatch" class=" w-20  mt-0.5 font-semibold " />
    </CustomSelectTrigger>
    <CustomSelectContent position="popper" class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>
        <CustomSelectItem v-for="patch in sortedPatches" :key="patch" :value="patch">
          {{ patch }}
        </CustomSelectItem>
      </SelectGroup>
    </CustomSelectContent> -->
  h
</template>