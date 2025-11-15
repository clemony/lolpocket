<script setup lang="ts">
import { isVNode } from 'vue'
import { useToast } from './use-toast'

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
          wrapper-class="!border-3 mb-0.5 shadow-xs drop-shadow-xs"
          size="c-5"
          :name="toast.icon"
          class="
            size-4
            **:stroke-[2.5]
          " />
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
