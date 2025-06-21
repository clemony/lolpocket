<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ms = useMatchStore()
</script>

<template>
  <!--  <Select v-model:model-value="ms.positionSelect" class="p-0" @update:model-value="(e) => ms.positionSelect = e">
    <SelectTrigger class="text-left shadow-none border-b3/80 bg-b1/60 inset-shadow-xs rounded-lg align-bottom h-12 pl-13 relative flex items-center text-4 tracking-tight font-medium" :class="cn('', props.class)">
      <component
        :is="`i-roles-${ms.positionSelect.toString().replace(' ', '-')}`"
        class="h-5 w-auto absolute left-4 dst shrink-0" />
      <SelectValue :placeholder="ms.positionSelect.toString()" class="text-left w-20 capitalize" />
    </SelectTrigger>
    <SelectContent position="popper" class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Position</SelectLabel>
        <SelectItem v-for="position in positions" :key="position" :value="position">
          <slot :value="position.toString()" />
          <span class="flex gap-3 items-center">
            <component
              :is="`i-roles-${position.replace(' ', '-')}`"
              class="h-4 w-auto dst shrink-0" />
            {{ position }}
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent> -->
  <!-- </Select> -->h
</template>