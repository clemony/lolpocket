<script setup lang="ts">
const props = defineProps<{
  viewLogin: boolean
}>()

const emit = defineEmits(['update:login'])
const viewLogin = ref(false)
</script>

<template>
  <div class="mt-4 flex w-full justify-end px-2">
    <Label
      class="hover:bgneutral hover:text-nc font-sans!"
      :button="true"
      variant="outline"
      size="12"
    >
      <input
        v-model="viewLogin"
        class="peer hidden"
        type="checkbox"
        @change="emit('update:login', viewLogin)"
      >
      {{ viewLogin ? "Log In" : "Back" }}
    </Label>
  </div>
</template>

<style scoped></style>
