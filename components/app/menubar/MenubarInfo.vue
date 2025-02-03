<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
import { UseClipboard } from '@vueuse/components'

const info = [
  {
    name: 'Docs',
    link: '/Docs',
    description: 'Learn the finer details of lolpockets.',
    type: 'i',
    icon: 'qlementine-icons:book-16',
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
      <div class="min-w-130 min-h-84">
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
          </div>
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
          <NuxtLink
            to="/About"
            class="flex gap-4 px-2.5 items-center"
          >
            <icon
              name="teenyicons:info-outline"
              class="size-4.5"
            />
            Info

            <span class="text-2">It's just cats and stuff.</span>
          </NuxtLink>
        </div>

        <div class="w-full bg-b2/40 border-t border-t-b2 h-20 px-6 flex items-center justify-between">
          <a
            href="https://github.com/clemony/lolpocket"
            target="_blank"
            class="flex dst  text-1 underline-offset-2 hover:underline items-center align-text-bottom font-mono"
          >
            <icon
              name="ph:github-logo"
              class="size-5.5 mr-3 dst"
            />
            github @clemony
          </a>

          <div
            class="flex gap-2 items-center "
          >
            <icon name="mail" class="size-6 stroke-[1.2]" />
            <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
              <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer py-2 gap-3 badge badge-lg text-2 badge-neutral" @click="copy()">
                <span>contact@lolpocket.win</span>

                <icon name="copy" class="text-nc !size-3.5 shrink-0" />
              </button>
            </UseClipboard>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>