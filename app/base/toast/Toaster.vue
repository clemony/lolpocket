<script setup lang="ts">
import { isVNode } from 'vue'
import { useToast } from './use-toast'

const { toasts } = useToast()
</script>

<template>
  <ToastProvider
<<<<<<< HEAD
    :duration="8000"
=======
>>>>>>> refs/remotes/origin/main
    as="div">
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast">
      <ToastClose class="" />
      <div class="grid gap-1">
        <ToastTitle v-if="toast.title">
          {{ toast.title }}
        </ToastTitle>
        <template v-if="toast.description">
          <ToastDescription v-if="isVNode(toast.description)">
            <component :is="toast.description" />
          </ToastDescription>
          <ToastDescription v-else>
            {{ toast.description }}
          </ToastDescription>
        </template>
      </div>
      <component :is="toast.action" />
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
