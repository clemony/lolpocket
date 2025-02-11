<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()


/* :style="{
      backgroundColor: `var(--color-${props.params.value.name.toLowerCase().replace(' ', '-')})`,
      backdropFilter: 'opacity(10%)' }" :class="{ '!bg-b2': props.params.value.name == 'All' }" */
</script>

<template>
  <div
    v-if="props.params.value" v-tippy="props.params.value.name" class="ti-container !shadow-black/7"
  >
    <div
      class="ti-wrapper overflow-hidden grid place-items-center bg-b2/20"
    >
      <component :is="`i-${props.params.value.icon}`" class="size-7 drop-shadow-sm " />
    </div>
  </div>
</template>

<style scoped>

</style>