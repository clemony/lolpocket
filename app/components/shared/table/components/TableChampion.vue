<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()

const p = ref(props.params)
</script>

<template>
  <div
    v-if="props.params.value != undefined"
    v-tippy="props.params.value.name"
    class="ti-container">
    <div class="ti-wrapper">
      <img
        :src="`/img/champion/${props.params.value.id}.webp`"
        class="size-full scale-115" />
    </div>
  </div>
</template>

<style scoped></style>
