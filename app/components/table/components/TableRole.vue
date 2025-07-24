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
    v-if="props.params && props.params.value"
    v-tippy="props.params.value.name"
    class=" pointer-events-auto shadow-warm">
    <!--     <div
      class="overflow-hidden grid place-items-center bg-b2/20 rounded-lg border border-b3/60">
      <component
        :is="props.params.value.name ? `i-roles-${props.params.value.name.replace(' ', '-')}` : ''"
        class="h-7 w-auto dst shrink-0 peer-checked:text-nc"
        :class="{ 'size-7': props.params.value == 'tiny-carrot' }" />
    </div> -->
  </div>
</template>

<style scoped>

</style>