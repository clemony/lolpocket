<script lang="ts" setup>
import { vScroll } from '@vueuse/components'
import type { UseScrollReturn } from '@vueuse/core'
import { profileSettingsData } from 'components/summoner/settings/profile-settings-data'
import { profileSettingsLinks } from 'components/summoner/settings/profile-settings-links'

const { topChampion } = defineProps<{
  summoner: Summoner
  region: string
  slug: string
  topChampion: TopChampion
}>()

const emit = defineEmits<{
  (e: 'update:scroll-y-position', value: number): void
}>()

definePageMeta({
  middleware: 'check-if-user',
})

const as = useAccountStore()

function onScroll(state: UseScrollReturn) {
  console.log(state.y.value) // {x, y, isScrolling, arrivedState, directions}
  emit('update:scroll-y-position', state.y.value)
}

watch(
  () => as.settings.showSolo,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  },
)
</script>

<template>
  <main
    v-scroll="onScroll"
    class="flex size-full !justify-start !items-start">
    <aside
      class="w-[37.4%] shrink-0 z-1 sticky top-0 px-1 py-18 grid justify-end left-0">
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

    <article class="size-full">
      <div
        class="max-w-250 w-full flex flex-col pt-18 pb-62 gap-20 overflow-hidden px-1">
        <h1
          id="splash"
          class="dst font-bold">
          Profile Splash
        </h1>
        <ProfileSplashOptions :top-champion />
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
          Display Options
        </h1>
        <div class="grid gap-10 grid-cols-2 mr-6">
          <ActionCard
            as="div"
            button="Clear Matches"
            class="h-60 cursor-default">
            <template #title>
              Clear all Match Data
            </template>
            <template #text>
              Match data is cached in your browser's internal database to limit
              strain on Riot's API servers. If you're having issues updating
              matches, try this, or
              <ResponsiveDialog>
                <ResponsiveDialogTrigger class=" items-center !overflow-visible align-baseline w-24  !h-4   justify-center  origin-center relative inline-flex self-center">
                  <span class="absolute font-medium w-24 !h-6 mt-0.5  text-center hover:font-bold transition-all underline duration-200 ">
                    contact me.
                  </span>
                </ResponsiveDialogTrigger>
              </ResponsiveDialog>
            </template>
          </ActionCard>
        </div>
      </div>
    </article>
  </main>
</template>
