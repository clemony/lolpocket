<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const info = [
  {
    name: 'Docs',
    link: '/Docs',
    description: 'Learn the finer details of lolpockets.',
    type: 'i',
    icon: 'qlementine-icons:book-16',
  },
  {
    name: 'About',
    link: '/About',
    description: 'It\'s just cats and stuff.',
    type: 'i',
    icon: 'clarity:help-line',
  },
  {
    name: 'Github',
    link: 'https://github.com/clemony/lolpocket',
    description: '',
    type: 'ex',
    icon: 'ph:github-logo',
  },
  {
    name: 'contact@lolpocket.win',
    link: '',
    description: '',
    type: 'ex',
    icon: 'fluent:mail-48-regular',
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/Jzuu7bYTZY',
    description: 'Join the channel.',
    type: 'ex',
    icon: 'streamline:discord',
  },
]
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Info</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class="min-w-130 min-h-84 py-6 px-7 gap-4 grid grid-cols-2">
        <div
          v-for="item in info"
          :key="item.name"
        >
          <template v-if="item.type == 'i'">
            <NuxtLink
              :to="{ path: item.link }"
            >
              <NavigationMenuLink
                :class="cn(navigationMenuTriggerStyle(), { 'group/about': item.name == 'About' })"
                class="flex gap-4 items-center "
              >
                <LittleIcon
                  :icon="item.icon"
                  class="size-5.5"
                  :class="{ 'group-hover/about:rotate-90 duration-300 transition-all': item.name == 'About' }"
                />
                {{ item.name }}
              </NavigationMenuLink>
            </NuxtLink>
          </template>

          <template v-else-if="item.type == 'ex'">
            <NavigationMenuLink
              :class="navigationMenuTriggerStyle()"
              href="item.link"
              target="_blank"
              class="flex gap-4 items-center"
            >
              <LittleIcon
                :icon="item.icon"
                class="size-5.5"
              />
              {{ item.name }}
            </NavigationMenuLink>
          </template>

          <NuxtLink
            to="/Settings"
            class="flex gap-4 px-2.5 items-center"
          >
            <LittleIcon
              icon="ph:gear-six"
              class="size-5.5"
            />
            Settings
          </NuxtLink>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>