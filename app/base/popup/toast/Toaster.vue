<script setup lang="ts">
import { isVNode } from 'vue'
import { useToast } from '../../../composables/utils/useToast'

const { toasts } = useToast()
</script>

<template>
  <Toast
    v-for="toast in toasts"
    :key="toast.id"
    v-bind="toast">
    <ToastClose class="" />
    <div class="grid gap-1">
      <ToastTitle
        v-if="toast.title"
        class="flex items-center gap-2">
        <Icons
          v-if="toast.icon"
          :variant="toast.color"
          size="c-5"
          :name="toast.icon"
          class="size-5 **:stroke-[1.8]" />
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
</template>
