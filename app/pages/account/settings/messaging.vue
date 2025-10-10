<script lang="ts" setup>
definePageMeta({
  title: 'messaging',
  description: 'Manage in app-notifications, messaging, and email preferences.',
  icon: 'chat-dot',
  path: '/settings/messaging',
  search: 'user',
})
</script>

<template>
  <form class="space-y-12 w-full">
    <!-- username -->

    <fieldset
      id="username"
      class="space-y-6">
      <div class="leading-4">
        <Label
          as="legend"
          class="text-5font-semibold mb-2">Username</Label>

        <p class="label text-wrap">
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </p>
      </div>
    </fieldset>

    <div class="flex justify-start">
      <Button variant="neutral">
        Update account
      </Button>
    </div>
  </form>
</template>
