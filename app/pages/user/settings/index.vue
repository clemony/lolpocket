<script lang="ts" setup>
definePageMeta({
  title: "App",
  description: "Manage general app utilities and settings.",
  icon: "i-mingcute-settings-2-line",
  path: "/settings/app",
  class: "scale-115",
  prefix: "Settings",
  order: 0
})

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

const isSaving = ref(false)

async function saveAccount() {
  isSaving.value = true

  try {
    await accountUpdate(
      {
        username: username.value.trim() || undefined
      },
      { silent: true }
    )

    useToast().add({
      color: "neutral",
      title: "Account updated",
      description: "Your username has been saved.",
      icon: "tick"
    })
  } catch (error) {
    console.error("Failed to save username", error)
    sendErrorToast()
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <form
    v-if="user().account"
    class="w-full space-y-12"
    @submit.prevent="saveAccount">
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

    <div class="flex justify-start">
      <UButton color="neutral" type="submit" :loading="isSaving">
        Update account
      </UButton>
    </div>
  </form>
</template>
