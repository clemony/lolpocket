<script lang="ts" setup>
const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()
</script>

<template>
  <!-- username -->
  <UFormField title="" description=""></UFormField>
  <fieldset id="username" class="space-y-6">
    <div class="leading-4">
      <Label class="text-xlfont-semibold mb-2" as="legend">Username</Label>

      <p class="label text-wrap">
        This is the name that will be used throughout the site. Defers to in
        game name if a Riot account is connected.
      </p>
    </div>
  </fieldset>

  <div class="flex justify-start">
    <UButton color="neutral"> Update account </UButton>
  </div>
</template>
