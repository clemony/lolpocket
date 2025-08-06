<script lang="ts" setup>
import { profileSettingsData } from 'components/summoner/settings/profile-settings-data'
import { profileSettingsLinks } from 'components/summoner/settings/profile-settings-links'

const { region, slug } = defineProps<{
  summoner: Summoner
  region: string
  slug: string
}>()
definePageMeta({
  middleware: 'check-if-user',
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
      class="w-[37.4%] shrink-0 z-1 sticky top-24 px-1 py-24 grid justify-end left-0">
      <menu class="w-90">
        <h2 class="dst font-bold mb-8">
          Profile Settings
        </h2>

        <nav class="grid w-full h-fit pl-1 gap-1">
          <li
            v-for="link in profileSettingsLinks"
            :key="link.hash">
            <NuxtLink
              class="hover:underline underline-offset-2 h-11 grid items-center font-medium cursor-pointer text-bc/60"
              exact-active-class="text-bc"
              :to="{
                path: `/summoner/${region}/${slug}/settings`,
                hash: `#${link.hash}`,
              }">
              {{ link.name }}
            </NuxtLink>
          </li>
        </nav>
      </menu>
    </aside>

    <article class="h-fit max-w-250 w-full flex flex-col pt-24 pb-62 gap-20  px-1">
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
