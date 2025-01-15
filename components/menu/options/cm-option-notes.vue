<script setup lang="ts">
  const props = defineProps<{
    model: any;
  }>();

  const model = ref(props.model);
  const emit = defineEmits(['update:model']);

  function update() {
    model.value = '';
    emit('update:model');
  }
</script>

<template #first>
  <context-menu-item
    @click.stop="update"
    class="-ml-0.5">
    <icon
      name="ph:eraser"
      class="size-4" />

    <span class="">Clear Note</span>
  </context-menu-item>
  <context-menu-separator />
</template>

<style scoped></style>
