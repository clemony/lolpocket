<script lang="ts" setup>
definePageMeta({
  name: 'settings',
  path: '/settings',
  icon: 'gear',
  title: 'General',
  description: 'Manage general app utilities and settings.',
})

const settingsData = [
  {
    title: 'Reduce Motion',
    description: 'Reduce the wobblies.',
  },
  {
    title: 'Automatic Archiving',
    description: 'Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update.',
  },

  {
    title: 'Sidebar Lock',
    description: 'Upon new patch, current pockets will be archived until updated. A notifica',
  },
]
</script>

<template>
  <form
    class="space-y-12 w-full">
    <!-- username -->

    <fieldset
      id="username"
      class="space-y-6">
      <div class="leading-4 ">
        <Label
          as="legend"
          class="text-5 font-semibold mb-2">Username</Label>

        <p class="label text-wrap ">
          This is the name that will be used throughout the site. Defers to in game name if a Riot account is connected.
        </p>
      </div>
      <Input
        v-model="as().account.username"
        class="validator"
        type="text"
        placeholder="Username" />
    </fieldset>

    <div class="flex justify-start">
      <Button
        variant="neutral">
        Update account
      </Button>
    </div>
  </form>
</template>