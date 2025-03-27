<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ans = useAnalysisStore()
</script>

<template>
  <Field class="w-full justify-between !flex py-2 px-2 gap-2.5">
    <label v-for="position in positions" :key="position" class="btn btn-ghost  rounded-[0.85rem] btn-square has-checked:!btn-neutral has-checked:bg-neutral">
      <input v-model="ans.positionSelect" name="research-positions" type="radio" class="peer hidden" value="all" />
      <span class="w-8.5 flex items-center justify-center">
        <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="h-5 w-auto dst shrink-0 peer-checked:text-nc" />
      </span>
    </label>
  </Field>
</template>