<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ms = useMatchStore()
</script>

<template>
  <Tabs v-model:model-value="ms.positionSelect">
<label class="flex items-center pl-2 pr-3">
  <div class="grow font-medium">
   Position
  </div>
</label>

    <IndicatorTabsList class=" w-full grid grid-cols-6 h-12">
      <IndicatorTabsTrigger v-for="position in positions" :key="position" v-tippy="position" :value="position.toString()" class="">
        <span class="size-5.5 relative grid place-items-center">
         <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="h-5 w-auto dst shrink-0 peer-checked:text-nc" />
        </span>
      </IndicatorTabsTrigger>
      <TabIndicator />
    </IndicatorTabsList>
  </Tabs>
</template>