<script lang="ts" setup>
definePageMeta({
  title: "Profile",
  order: 2,
  description:
    "Set your public profile display settings and hide your annoyances.",
  icon: "i-lucide-circle-user-round",
  path: "/settings/profile",
  auth: true,
  prefix: "Settings"
  /* middleware: 'confirm-auth', */
})

const labelClass =
  "w-full h-16 border-b flex justify-between items-center pr-1 !border-b-p2 [&_h5]:font-semibold [&_h5]:text-pc/70"

const settings = computed(() => user().settings)
</script>

<template>
  <form v-if="settings" class="w-full space-y-12" @submit.prevent>
    <UFormField title="" description=""></UFormField>
    <fieldset class="mb-10 w-full space-y-6">
      <div class="leading-4">
        <Label class="text-xlfont-semibold mb-2" as="legend">
          Summoner Splash
        </Label>

        <p class="label text-wrap">
          Automatically display your top played champion in recent games, or
          choose a custom splash.
        </p>
      </div>
      <ProfileSplashOptions />
    </fieldset>

    <UFormField title="" description=""></UFormField>
    <fieldset class="space-y-6">
      <div class="leading-4">
        <Label class="mb-2 text-xl font-semibold" as="legend">Title</Label>
        <p class="label text-wrap">Display a title from an earned Badge.</p>
      </div>
    </fieldset>

    <UFormField title="" description=""></UFormField>
    <fieldset class="space-y-6">
      <div class="leading-4">
        <Label class="mb-2 text-xl font-semibold" as="legend">
          Hide Profile Elements
        </Label>

        <p class="label inline text-wrap">
          Hide what you don't want to see from
          <i>yourself</i>
          . This will not hide elements publically, but if you really think
          about it—what's not there isn't real.
        </p>
      </div>
      <div class="grid gap-2">
        <label :class="labelClass">
          <h5>Profile Header & Splash</h5>

          <p class="mt-2 flex items-center gap-4 font-medium italic">
            lies
            <USwitch
              v-model:model-value="settings.show_solo"
              class="hover-ring pointer-events-auto!" />
          </p>
        </label>
        <h5>Ranked Solo/Duo</h5>

        <label :class="labelClass">
          <p class="mt-2 flex items-center gap-4 font-medium italic">
            {{ settings?.show_solo ? "Visible" : "Hidden" }}
            <USwitch
              v-model:model-value="settings.show_solo"
              class="hover-ring pointer-events-auto!" />
          </p>
        </label>

        <label :class="labelClass">
          <h5>Ranked Flex</h5>

          <p class="mt-2 flex items-center gap-4 font-medium italic">
            {{ settings?.show_flex ? "Visible" : "Hidden" }}
            <USwitch
              v-model:model-value="settings.show_flex"
              class="hover-ring pointer-events-auto!" />
          </p>
        </label>

        <label :class="labelClass">
          <h5>Ally Filters</h5>

          <p class="mt-2 flex items-center gap-4 font-medium italic">
            {{ settings?.show_allies ? "Visible" : "Hidden" }}
            <USwitch
              v-model:model-value="settings.show_allies"
              class="hover-ring pointer-events-auto!" />
          </p>
        </label>
      </div>
    </fieldset>

    <div class="flex justify-start">
      <UButton color="neutral"> Update account </UButton>
    </div>
  </form>
</template>

<!--
      <h1
        id="splash"
        class="ds-2xs font-bold">
        Profile Splash
      </h1>

      <Separator class="my-4" />
      <h1
        id="display"
        class="ds-2xs font-bold">
        Display Options
      </h1>
      <Separator class="my-4" />
      <h1
        id="display"
        class="ds-2xs font-bold">
        Stored Data
      </h1>
      <div class="grid gap-10 grid-cols-2 mr-6">
        <ClearAllMatchData />
      </div> -->
