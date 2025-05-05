<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  updated?: boolean
}>()
const ds = useDataStore()


</script>

<template>
<NuxtLink to="/"  class="flex  items-center grow text-bc hover:!bg-b2/40 gap-2.5 w-full">

      <span class="size-5 relative grid place-items-center ">
          <icon name="mingcute:crystal-ball-line" class="size-5 text-bc/80"/>
      </span>
        <span class="pt-px">Predictions</span>

 
  </NuxtLink>
</template>