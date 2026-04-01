<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <Tooltip
    v-if="props.params.value"
    :label="props.params.value.name"
    class="ti-container">
    <div class="ti-wrapper">
      <img
        class="size-full"
        :alt="props.params.value.name"
        :src="`/img/item/${props.params.value.id}.webp`" />
    </div>
  </Tooltip>
</template>
