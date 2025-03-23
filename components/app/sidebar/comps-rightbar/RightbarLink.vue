<script lang="ts" setup>
const props = defineProps<{
to: string
}>()

const route = useRoute()
</script>

<template>
      <NuxtLink :to="props.to"  class="btn grow gap-4 items-center capitalize btn-ghost btn-lg group/btn justify-start text-3 font-medium join-item" :class="{ ' [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60 border-r-b2 !bg-b2/70 border-b3/50 hover:!bg-b2': route.path == props.to }" @click.stop>
        <slot  />
      </NuxtLink>
</template>