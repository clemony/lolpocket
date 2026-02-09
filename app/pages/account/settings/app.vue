<script lang="ts" setup>
definePageMeta({
  title: "App Settings",
  description: "Manage general app utilities and settings.",
  icon: "lucide:monitor-cog",
  path: "/settings/app",
})

const settingsData = [
  {
    title: "Reduce Motion",
    description: "Reduce the wobblies.",
  },
  {
    title: "Automatic Archiving",
    description:
      "Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update.",
  },

  {
    title: "Sidebar Lock",
    description:
      "Upon new patch, current pockets will be archived until updated. A notifica",
  },
]

const username = computed({
  get: () => as().account?.username ?? "",
  set: (value: string) => {
    const account = as().account
    if (account) account.username = value
  },
})
</script>

<template>
  <form v-if="as().account" class="w-full space-y-12">
    <!-- username -->

    <fieldset id="username" class="space-y-6">
      <div class="leading-4">
        <Label class="text-xlfont-semibold mb-2" as="legend">Username</Label>

        <p class="label text-wrap">
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </p>
      </div>
      <Input
        v-model="username"
        class="validator"
        type="text"
        placeholder="Username"
        @clear-input="username = ''" />
    </fieldset>

    <div class="flex justify-start">
      <UButton color="neutral"> Update account </UButton>
    </div>
  </form>
</template>
