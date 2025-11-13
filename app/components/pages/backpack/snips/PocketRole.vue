<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
  role: string;
}>();
</script>

<template>
  <component
    :is="`i-roles-${role}`"
    v-if="role"
    :class="cn('mr-1 ml-auto size-4', className)"
  />
</template>
