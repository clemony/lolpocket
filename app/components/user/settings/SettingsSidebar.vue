<script lang="ts" setup>
const open = defineModel<boolean>("open", { default: false })

const components = {
  general: "General",
  account: "Account",
  notifications: "Notifications"
}
</script>

<template>
  <USidebar
    v-model:open="open"
    side="left"
    :ui="{
      container: 'h-full'
    }">
    <UTabs orientation="vertical" class="h-full">
      <slot />
    </UTabs>
  </USidebar>
</template>
