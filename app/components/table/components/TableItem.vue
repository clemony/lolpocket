<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div
    v-if="props.params.value"
    v-tippy="props.params.value.name"
    class="ti-container">
    <div class="ti-wrapper">
      <img
        :src="`/img/item/${props.params.value.id}.webp`"
        class="size-full " />
    </div>
  </div>
</template>

<style scoped>

</style>