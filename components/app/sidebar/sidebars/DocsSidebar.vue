<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'
</script>

<template>
  <div class="size-full flex flex-col">
    <SidebarTitle />
    <Grow />
    <div class="grid px-5 h-fit">
      <a class="hover:underline underline-offset-2  flex gap-2 -ml-1 items-center py-2" @click="navigateTo('/about')">
        About + cats
      </a>

      <a
        href="https://discord.gg/Jzuu7bYTZY"
        target="_blank" class="hover:underline underline-offset-2 dst  py-2 flex gap-3 items-center">
        <icon
          name="streamline:discord"
          class="size-4" />
        Discord
      </a>

      <a
        href="https://github.com/clemony/lolpocket"
        target="_blank"
        class=" dst  underline-offset-2 hover:underline flex gap-1  py-2 items-center">
        <icon
          name="ph:github-logo"
          class="size-4.5 dst mr-2 -ml-0.25" /> github @clemony
      </a>

      <SidebarButton class="gap-2.75">
        <icon name="mail" class="size-4.5 dst stroke-[1.2] flex  -ml-4" />

        <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
          <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer w-fit gap-3 pr-3  " @click="copy()">
            <span class="grow text-start font-normal">contact@lolpocket.win</span>

            <icon name="copy" class=" !size-3.5 shrink-0 " />
          </button>
        </UseClipboard>
      </SidebarButton>
    </div>
  </div>
</template>