<script setup lang="ts">
  import { computed, ref } from 'vue';

  const ps = usePocketStore();
  const props = defineProps<{
    pocket?: pocket;
    set?: ItemSet;
  }>();
</script>

<template>
  <div class="flex gap-1">
    <ItemSetItems
      v-if="props.set"
      :set="props.set"
      :pocketKey="props.pocket.key"
      :limit="6" />
  </div>
</template>

<style scoped></style>
