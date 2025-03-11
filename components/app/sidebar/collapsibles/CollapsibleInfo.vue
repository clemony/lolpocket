<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

const isOpen = ref(true)
const us = useUiStore()

</script>

<template>
  <Collapsible v-model:is-open="isOpen" :disabled="!us.sidebarExpanded">
    <NuxtLink v-tippy="!us.sidebarExpanded ? 'Info' : null" :to="!us.sidebarExpanded ? '/docs' : ''" :class="{ 'btn btn-ghost size-12  hover:bg-b2/60 ': !us.sidebarExpanded }">
      <SidebarCollapsibleTrigger>
        <SidebarIcon name="ph:question-mark" class="size-5" />
        <SidebarText>Info</SidebarText>
      </SidebarCollapsibleTrigger>
    </NuxtLink>
    <SidebarCollapsibleContent v-if="us.sidebarExpanded">
      <NuxtLink
        to="/docs">
        <SidebarButton>
          Docs
        </SidebarButton>
      </NuxtLink>

      <NuxtLink
        to="/about">
        <SidebarButton>
          About
          <SidebarBadge class="pl-1">
            <icon name="add-sm" class="size-5 mt-px -mr-2" />
            <icon name="ph:cat" class="size-5" />
   <!--          <i-fat-cat class="size-8 shrink-0 fill-bc dst -mt-2.5 stroke-[1.2]" /> -->
          </SidebarBadge>
        </SidebarButton>
      </NuxtLink>

      <Collapsible>
        <SidebarCollapsibleTrigger>
          Contact
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent>
          <a
            href="https://discord.gg/Jzuu7bYTZY"
            target="_blank">
            <SidebarButton>

              <icon
                name="streamline:discord"
                class="size-4.5" />
              Discord
            </SidebarButton>
          </a>

          <a
            href="https://github.com/clemony/lolpocket"
            target="_blank"
            class=" dst  underline-offset-2 hover:underline ">
            <SidebarButton>
              <icon
                name="ph:github-logo"
                class="size-4.5 dst" /> github @clemony
            </SidebarButton>
          </a>

          <SidebarButton>
            <icon name="mail" class="size-5 dst stroke-[1.2]" />

            <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
              <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer w-full gap-3 pr-3 " @click="copy()">
                <span class="grow text-start">contact@lolpocket.win</span>

                <icon name="copy" class=" !size-3.5 shrink-0" />
              </button>
            </UseClipboard>
          </SidebarButton>
        </SidebarCollapsibleContent>
      </Collapsible>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>
