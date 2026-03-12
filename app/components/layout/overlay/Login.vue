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
    <template #content>
      <NuxtLayout
        name="form"
        title="Log in"
        description="Use a connected account or log in with email.">
        <template #close>
          <UButton
            icon="i-x"
            :ui="{ leadingIcon: 'size-6 **:stroke-[1.7]' }"
            variant="ghost"
            @click="emit('close', false)" />
        </template>
        <LazyAuthForm type="logIn" />
      </NuxtLayout>
    </template>
  </LazyUModal>
</template>
