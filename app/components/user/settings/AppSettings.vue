<script lang="ts" setup>
const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const settingsData = [
  {
    title: "Reduce Motion",
    description: "Reduce the wobblies."
  },
  {
    title: "Automatic Archiving",
    description:
      "Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update."
  },

  {
    title: "Sidebar Lock",
    description:
      "Upon new patch, current pockets will be archived until updated. A notifica"
  }
]

const username = computed({
  get: () => user().account?.username ?? "",
  set: (value: string) => {
    const account = user().account
    if (account) account.username = value
  }
})
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
    <UInput
      v-model="username"
      class="validator"
      type="text"
      placeholder="Username"
      @clear-input="username = ''" />
  </fieldset>
</template>
