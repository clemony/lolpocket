<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
</script>

<template>
  <div>
    <NuxtLink :to="`/pocket/${pocket.key}/card`" class="btn grow w-full  gap-4 items-center capitalize btn-ghost btn-lg group/btn justify-start text-3 font-medium " :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'card' }" @click.stop>
      <span class="size-8.5 border-b3 inset-shadow-sm rounded-full flex items-center justify-center bg-b2 group-hover/btn:bg-b3/60">
        <icon
          name="mingcute:layer-fill"
          class="h-6 opacity-60 w-auto dst shrink-0 peer-checked:text-nc" />
      </span>
      Card
    </NuxtLink>
  </div>
</template>