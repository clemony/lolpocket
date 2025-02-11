<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
import { UseClipboard } from '@vueuse/components'
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Info</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size ">
        <div class="size-full flex flex-col items-between">
          <div class="grow py-5 px-7 h-full gap-10 grid grid-cols-[1fr_1fr]  ">
            <div class="col-start-1 grid *:h-fit *:w-full">
              <h5 class="!font-semibold opacity-60 mb-3 mt-1">
                Tools
              </h5>

              <NuxtLink
                to="/Docs" >
              <NavigationMenuLink
                :class="cn(navigationMenuTriggerStyle())"
                class="flex flex-col !w-full  h-14 justify-center items-start"
             >
                <div class="flex gap-4 mb-2 items-center justify-start">
                  <icon name="qlementine-icons:book-16" class="size-5 stroke-[1.5]" />
                  <h5 class="!font-semibold">
                    Docs
                  </h5>
                </div>
                How this works.
                </NavigationMenuLink>
              </NuxtLink>

              <NavigationMenuLink
                href="https://discord.gg/Jzuu7bYTZY"
                target="_blank"
                class="flex flex-col !w-full h-14 justify-center items-start"
                :class="cn(navigationMenuTriggerStyle())"
              >
                <div class="flex gap-3 mb-2 items-center">
                  <icon
                    name="streamline:discord"
                    class="size-5.5"
                  />
                  <h5 class="!font-semibold">Discord</h5>
                </div>
                <p class="">Join the channel.</p>
             </NavigationMenuLink>

              <NuxtLink
                to="/About"
              >
              <NavigationMenuLink
                class=" !w-full h-14  px-2.5 flex flex-col justify-center items-start"
                :class="navigationMenuTriggerStyle()">
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
                </NavigationMenuLink>
              </NuxtLink>
            </div>

            <div class="col-start-2 grid *:h-fit *:w-full">
              <h5 class="!font-semibold opacity-60 mb-3 mt-1">
                Settings
              </h5>

              <NuxtLink
                v-for="link in settingLinks" :key="link.name"
                :to="link.link" >
              <NavigationMenuLink
                class=" !w-full h-14  px-2.5 flex flex-col justify-center cursor-pointer items-start"
                :class="navigationMenuTriggerStyle()"
             >
                <div class="flex gap-4 mb-2 items-center">
                  <LittleIcon
                    :icon="link.icon"
                    class="size-5.5"
                  />
                  <h5 class="!font-semibold">
                    {{ link.name }}
                  </h5>
                </div>
                <p>
                  {{ link.text }}
                </p>
                </NavigationMenuLink>
              </NuxtLink>
            </div>
          </div>

          <div class="w-full bg-b2/40 border border-t-b2 min-h-20 px-9 flex items-center justify-between rounded-b-xl border-x-b3 border-b-b3">
            <NavigationMenuLink
              href="https://github.com/clemony/lolpocket"
              target="_blank"
              class="flex dst  text-1 underline-offset-2 hover:underline items-center align-text-bottom font-mono"
            >
              <icon
                name="ph:github-logo"
                class="size-5.5 mr-3 dst"
              />
              github @clemony
            </NavigationMenuLink>

            <NavigationMenuLink
              class="flex gap-2 items-center "
            >
              <icon name="mail" class="size-6 dst stroke-[1.2]" />
              <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
                <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer py-2 gap-3 badge badge-lg text-2 badge-neutral shadow-sm" @click="copy()">
                  <span>contact@lolpocket.win</span>

                  <icon name="copy" class="text-nc !size-3.5 shrink-0" />
                </button>
              </UseClipboard>
           </NavigationMenuLink>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>
h5 {
  font-weight: 600 !important;
}
</style>