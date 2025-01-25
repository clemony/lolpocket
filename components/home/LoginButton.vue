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
      :button="true"
      variant="outline"
      size="lg"
      class="hover:bg-neutral hover:text-nc !font-sans"
    >
      <input
        v-model="viewLogin"
        type="checkbox"
        class="peer hidden"
        @change="emit('update:login', viewLogin)"
      />
      {{ viewLogin ? 'Log In' : 'Back' }}
    </Label>
  </div>
</template>

<style scoped></style>
