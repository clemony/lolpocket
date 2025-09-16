<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <label class="input">
    <icon
      name="search"
      class="size-5" />

    <input
      v-model="search"
      type="search"
      class="grow"
      placeholder="Search"
      @click.stop.prevent />

    <CloseButton
      v-if="search != ''"
      class="btn-ghost"
      @click="search = ''" />
  </label>
</template>

<style scoped></style>
