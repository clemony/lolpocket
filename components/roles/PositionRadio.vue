<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ms = useMatchStore()
</script>

<template>
  <Field class="" :class="{ 'w-full !justify-between !flex py-2 !px-4 gap-2.5 ': props.class }">
    <label v-for="position in positions" :key="position" class="btn btn-ghost  rounded-[0.85rem] hover:bg-b3/40 btn-square has-checked:!btn-neutral has-checked:bg-neutral">
      <input v-model="ms.roleSelect" name="research-positions" type="radio" class="peer hidden" value="all" />
      <span class="w-8.5 flex items-center justify-center">
        <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="h-5 w-auto dst shrink-0 peer-checked:text-nc" />
      </span>
    </label>
  </Field>
</template>