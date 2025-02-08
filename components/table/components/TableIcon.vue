<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="items-center size-full flex">
    <div class="ti-container">
      <div
        class="ti-wrapper" :style="{
          background: `url(${props.params.value})`,
          backgroundSize: '400%',
          backgroundPositionY: '10%',
          backgroundPositionX: 'center' }"
      >
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>