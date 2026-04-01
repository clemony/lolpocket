<script lang="ts" setup>
definePageMeta({
  title: "Messaging",
  description: "Manage in app-notifications, messaging, and email preferences.",
  icon: "i-chat-dots",
  path: "/settings/messaging",
  auth: true,
  order: 3,
  prefix: "Settings",
})
</script>

<template>
  <form class="w-full space-y-12">
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
      <UButton color="neutral">
        Update account
      </UButton>
    </div>
  </form>
</template>
