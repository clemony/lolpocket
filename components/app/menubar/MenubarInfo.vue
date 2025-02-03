<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
import { UseClipboard } from '@vueuse/components'

const settingBarLinks = [
  {
    name: 'General',
    link: '/settings',
    icon: 'ph:gear-six',
  },
  {
    name: 'Account',
    link: '/settings#account',
    icon: 'ri:user-settings-line',
  },
  {
    name: 'Theme',
    link: '/settings#theme',
    icon: 'teenyicons:paintbucket-outline',
  },
]
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Info</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size ">
        <div class="size-full flex flex-col items-between">
          <div class="grow py-5 px-7 gap-10 grid grid-cols-[1fr_1fr]  ">
            

            <div class="col-start-1 grid *:h-fit *:w-full">
              <NuxtLink
                to="/Docs"
                class="flex flex-col  justify-center items-start"
                :class="cn(navigationMenuTriggerStyle())"
              >
                <div class="flex gap-4 mb-2 items-center justify-start">
                  <icon name="qlementine-icons:book-16" class="size-5 stroke-[1.5]" />
                  <h5 class="!font-semibold">
                    Docs
                  </h5>
                </div>
                How this works.
              </NuxtLink>

              <a
                :class="navigationMenuTriggerStyle()"
                href="https://discord.gg/Jzuu7bYTZY"
                target="_blank"
                class="flex flex-col  justify-center items-start"
              >
                <div class="flex gap-3 mb-2 items-center">
                  <icon
                    name="streamline:discord"
                    class="size-5.5"
                  />
                  <h5 class="!font-semibold">Discord</h5>
                </div>
                <p class="">Join the channel.</p>
              </a>

              <NuxtLink
                to="/About"
                class=" px-2.5flex flex-col justify-center items-start"
                :class="navigationMenuTriggerStyle()"
              >
                <div class="flex gap-4 mb-2 items-center">
                  <icon
                    name="teenyicons:info-outline"
                    class="size-4.5 mb-1 shrink-0"
                  />
                  <h5 class="!font-semibold">
                    App Info
                  </h5>
                </div>
                <p class="">
                  It's just cats and stuff.
                </p>
              </NuxtLink>
            </div>

            <ul class="py-1 w-full flex flex-col gap-2 *:w-full">
              <NuxtLink
                to="/Settings"
                class="flex gap-4   items-center col-start-1"
              >
                <span class="pb-3 flex items-center gap-4">
                  <h5 class="!font-semibold opacity-60">
                    Settings
                  </h5>
                </span>
              </NuxtLink>
              <li v-for="link in settingBarLinks" :key="link.name" class=" justify-start pointer-events-none -ml-3" :class="navigationMenuTriggerStyle()">
                <NuxtLink
                  :to="link.link"
                  class="flex gap-4 py-2  pointer-events-auto items-center col-start-1 font-semibold "
                >
                  <LittleIcon
                    :icon="link.icon"
                    class="size-5.5"
                  />
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>

          </div>
          <div class="w-full bg-b2/40 border border-t-b2 min-h-20 px-9 flex items-center justify-between rounded-b-xl border-x-b3 border-b-b3">
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
              <icon name="mail" class="size-6 dst stroke-[1.2]" />
              <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
                <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer py-2 gap-3 badge badge-lg text-2 badge-neutral shadow-sm" @click="copy()">
                  <span>contact@lolpocket.win</span>

                  <icon name="copy" class="text-nc !size-3.5 shrink-0" />
                </button>
              </UseClipboard>
            </div>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>
h5{
  font-weight: 600 !important;
}
</style>