<script lang="ts" setup>
import { profileSettingsLinks } from 'components/summoner/settings/profile-settings-links'

const { summoner } = defineProps<{
  summoner: Summoner
  slug: string
}>()
</script>

<template>
  <TabsPageAsideWrapper>
    <menu class="w-[80%] ">
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
              path: `/summoner/${summoner.region}/${slug}/settings`,
              hash: `#${link.hash}`,
            }">
            {{ link.name }}
          </NuxtLink>
        </li>
      </nav>
    </menu>
  </TabsPageAsideWrapper>
</template>