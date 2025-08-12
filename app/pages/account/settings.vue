<script lang="ts" setup>
import { profileSettingsData } from 'components/summoner/settings/profile-settings-data'

definePageMeta({
  middleware: 'check-if-user',
  name: 'profile settings',
  title: 'settings',
  requiresAuth: true,
  icon: 'gear',
  order: 4,
})

const as = useAccountStore()

watch(
  () => as.settings.showSolo,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  },
)
</script>

<template>
  <main
    class="flex   w-full h-fit bg-b1 relative z-1">
    <aside
      class="w- shrink-0  " />

    <article class="ml-[38%]  h-fit max-w-250 w-full flex flex-col pt-24 pb-62 gap-20  px-1">
      <h1
        id="splash"
        class="dst font-bold">
        Profile Splash
      </h1>
      <ProfileSplashOptions />
      <Separator class="my-4" />
      <h1
        id="display"
        class="dst font-bold">
        Display Options
      </h1>
      <div class="grid gap-10 grid-cols-2 mr-6">
        <ActionCard
          v-model:model-value="as.settings.showSolo"
          :title="profileSettingsData.solo.title"
          :text="profileSettingsData.solo.text">
          {{ as.settings.showSolo ? "Visible" : "Hidden" }}
        </ActionCard>
        <ActionCard
          v-model:model-value="as.settings.showFlex"
          :title="profileSettingsData.flex.title"
          :text="profileSettingsData.flex.text">
          {{ as.settings.showFlex ? "Visible" : "Hidden" }}
        </ActionCard>
        <ActionCard
          v-model:model-value="as.settings.showAllies"
          :title="profileSettingsData.allies.title"
          :text="profileSettingsData.allies.text">
          {{ as.settings.showAllies ? "Visible" : "Hidden" }}
        </ActionCard>
      </div>

      <Separator class="my-4" />
      <h1
        id="display"
        class="dst font-bold">
        Stored Data
      </h1>
      <div class="grid gap-10 grid-cols-2 mr-6">
        <ClearAllMatchData />
      </div>
    </article>
  </main>
</template>
