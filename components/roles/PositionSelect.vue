<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ans = useAnalysisStore()
</script>

<template>
  <!--    <div class=" *:justify-start  *:flex  *:text-3 *:items-center *:font-medium *:gap-3">
    <label   v-for="position in positions" class="btn btn-ghost btn-lg">
      <input v-model="ans.positionSelect" name="analysis-positions" type="radio" class="peer hidden" value="all" />
      <span class="w-8.5 flex items-center justify-center">
          <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="h-5 w-auto dst shrink-0 peer-checked:text-nc"
        />
      </span>
      <span class="capitalize">{{position}}</span>
    </label>
   </div> -->

  <Select v-model:model-value="ans.positionSelect" class="p-0" @update:model-value="(e) => ans.positionSelect = e">
    <SelectTrigger class="text-left shadow-none border-b3/80 inset-shadow-xs rounded-lg align-bottom h-12 pl-13 relative flex items-center text-4 tracking-tight font-medium" :class="cn('', props.class)">
      <component
        :is="`i-roles-${ans.positionSelect.toString().replace(' ', '-')}`"
        class="h-5 w-auto absolute left-4 dst shrink-0" />
      <SelectValue :placeholder="ans.positionSelect.toString()" class="text-left w-20 capitalize" />
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
    </SelectContent>
  </Select>
</template>