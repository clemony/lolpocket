<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'
</script>

<template>
  <MenubarContent class="!w-74">
    <MenubarLabel inset>
      Info
    </MenubarLabel>
    <MenubarSeparator />
    <NuxtLink
      to="/Docs"
    >
      <MenubarItem inset>
        Docs
      </MenubarItem>
    </NuxtLink>

    <NuxtLink
      to="/About"
    >
      <MenubarItem inset class="pr-2.5">
        <span class="grow">App Info</span>

        with cats
      </MenubarItem>
    </NuxtLink>

    <MenubarSeparator />

    <MenubarLabel inset>
      Settings
    </MenubarLabel>
    <MenubarSeparator />
    <NuxtLink
      v-for="link in settingLinks" :key="link.name"
      :to="link.link" class="group/l"
    >
      <MenubarItem inset>
        {{ link.name }}
      </MenubarItem>
    </NuxtLink>

    <MenubarSeparator />

    <MenubarSub>
      <MenubarSubTrigger inset>
        Contact
      </MenubarSubTrigger>

      <MenubarSubContent>
        <a
          href="https://discord.gg/Jzuu7bYTZY"
          target="_blank"
        >
          <MenubarItem>

            <icon
              name="streamline:discord"
              class="size-4.5"
            />
            Discord
          </MenubarItem>
        </a>

        <a
          href="https://github.com/clemony/lolpocket"
          target="_blank"
          class=" dst  underline-offset-2 hover:underline "
        >
          <MenubarItem>
            <icon
              name="ph:github-logo"
              class="size-4.5 dst"
            /> github @clemony
          </MenubarItem>
        </a>

        <MenubarItem>
          <icon name="mail" class="size-5 dst stroke-[1.2]" />

          <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
            <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer w-full gap-3 pr-3 " @click="copy()">
              <span class="grow text-start">contact@lolpocket.win</span>

              <icon name="copy" class=" !size-3.5 shrink-0" />
            </button>
          </UseClipboard>
        </MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
  </MenubarContent>
</template>

<style scoped>
h5 {
  font-weight: 600 !important;
}
</style>