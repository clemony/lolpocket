<script setup lang="ts">
const props = defineProps<{
  model: any
}>()

const emit = defineEmits(['update:model'])
const model = ref(props.model)
function update() {
  model.value = ''
  emit('update:model')
}
</script>

<template #first>
  <context-menu-item
    class="-ml-0.5"
    @click.stop="update"
  >
    <icon
      name="ph:eraser"
      class="size-4"
    />

    <span class="">Clear Note</span>
  </context-menu-item>
  <context-menu-separator />
</template>

<style scoped></style>
