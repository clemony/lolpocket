<script lang="ts" setup>
import { profileSettingsLinks } from '~/components/settings/profile-settings-links'
</script>

<template>
  <aside class="justify-self-end grid justify-center pt-22 w-full sticky top-22 z-1 pr-20">
    <menu class="max-w-110 w-full">
      <h2 class="dst font-bold mb-8 text-nowrap">
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
              path: `/settings`,
              hash: `#${link.hash}`,
            }">
            {{ link.name }}
          </NuxtLink>
        </li>
      </nav>
    </menu>
  </aside>
</template>