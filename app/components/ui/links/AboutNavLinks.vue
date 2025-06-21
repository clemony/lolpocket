<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

const classObject = 'hover:underline underline-offset-2 dst w-full h-9 flex gap-4 items-center cursor-pointer'
</script>

<template>
  <Field class="grid px-5 h-fit py-3 *:w-full **:text-2 relative">
    <SheetClose as-child>
      <a :class="classObject" @click="navigateTo('/about')">
        <IconWrapper>
          <icon name="solar:cat-outline" class="size-5.75 -left-0.5 top-0 absolute" />
        </IconWrapper>
        About & Cats
      </a>
    </SheetClose>

    <SheetClose as-child>
      <NuxtLink
        external
        href="https://discord.gg/Jzuu7bYTZY"
        target="_blank" :class="classObject">
        <IconWrapper>
          <icon
            name="radix-icons:discord-logo"
            class="dst" />
        </IconWrapper>
        Discord
      </NuxtLink>
    </SheetClose>

    <SheetClose as-child>
      <NuxtLink
        external
        href="https://github.com/clemony/lolpocket"
        target="_blank"
        :class="classObject">
        <IconWrapper>
          <icon
            name="radix-icons:github-logo"
            class=" dst " />
        </IconWrapper>Github @clemony
      </NuxtLink>
    </SheetClose>

    <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
      <button
        v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }"
        class=" gap-4 hover:inset-shadow-xs hover:bg-b3/40 tldr-30 hover:shadow-sm !rounded-xl py-2 h-9  -ml-2.5 px-3 inset-shadow-black/1 border hover:border-b3 border-transparent shadow-black/3 flex  items-center cursor-pointer !w-fit gap-3   "
        @click="copy()">
        <icon name="mail" class="size-4.5 -ml-px dst stroke-[1.2] flex " />

        <span class="grow text-start font-normal -mr-1">contact@lolpocket.win</span>

        <icon name="copy" class=" !size-3.5 shrink-0  " />
      </button>
    </UseClipboard>
  </Field>
</template>