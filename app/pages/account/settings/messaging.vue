<script lang="ts" setup>
definePageMeta({
  name: 'messaging',
  path: '/settings/messaging',
  icon: 'gear',
  description: 'Manage in app-notifications, messaging, and email preferences.',
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
          class="text-lgfont-semibold mb-2">Username</Label>

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
