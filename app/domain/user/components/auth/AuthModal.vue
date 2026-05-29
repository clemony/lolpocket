<script lang="ts" setup>
import { modalXlClass } from "~~/layers/ui/app/variants/modal"

const { type } = defineProps<{
  type: "logIn" | "signUp"
}>()
const emit = defineEmits<{ close: [boolean] }>()
const open = defineModel<boolean>("open", { default: false })

const types = {
  logIn: {
    title: "Log in",
    description: "Use a connected account or log in with email and password."
  },
  signUp: {
    title: "Sign up",
    description: "Create an account with a connected provider or your email."
  }
}
const copy = computed(() => types[type] ?? types.logIn)

function closeModal() {
  open.value = false
  emit("close", false)
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="{ onClick: () => closeModal() }"
    :title="copy.title"
    fullscreen
    :ui="modalXlClass"
    :description="copy.description">
    <slot />
    <template #content>
      <NuxtLayout
        name="form"
        :title="copy.title"
        :description="copy.description">
        <template #close>
          <UButton
            icon="i-x"
            :ui="{ leadingIcon: 'size-6 **:stroke-[1.7]' }"
            variant="ghost"
            @click="closeModal()" />
        </template>
        <LazyAuthForm :type="type" />
      </NuxtLayout>
    </template>
  </UModal>
</template>
