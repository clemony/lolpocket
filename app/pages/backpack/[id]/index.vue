<script lang="ts" setup>
defineProps<{
  folder: Folder
  view: string
}>()
</script>

<template>
  <UPage
    class="size-full max-h-[calc(100vh-var(--ui-header-height)*2)] overflow-y-auto">
    <UPageBody
      :ui="{
        base: 'mx-auto size-full max-w-(--ui-container-lg) px-10 py-4'
      }">
      <BackpackGrid :folder />
    </UPageBody>
  </UPage>
</template>
