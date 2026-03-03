<script lang="ts" setup>
const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <LazyUModal
    :close="{ onClick: () => emit('close', false) }"
    title="Log in"
    fullscreen
    :ui="{
      content: '',
    }"
    description="Use a connected account or log in with email and password.">
    <template #body>
      <NuxtLayout
        name="form"
        title="Log in"
        description="Use a connected account or log in with email.">
        <LazyAuthForm type="logIn" />
      </NuxtLayout>
    </template>
  </LazyUModal>
</template>
