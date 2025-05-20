<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

const isOpen = ref(true)
const us = useUiStore()

function navigate(){
  if (us.sidebarExpanded )
  return

navigateTo('/docs')
}


</script>

<template>
  <Collapsible v-model:is-open="isOpen" :disabled="!us.sidebarExpanded">
 
      <component  v-tippy="!us.sidebarExpanded ? 'Info' : null" @click="navigate()"   class="disabled:text-bc">
        <IconWrapper name="ph:question-mark" class="size-4.5 dst" />
        Info
      </component>

    <SidebarCollapsibleContent v-if="us.sidebarExpanded">
      <NuxtLink
        to="/docs">
        <Btn>
            <IconWrapper name="icon-park-outline:notebook" class="size-3.75 dst" />
          Guide
        </Btn>
      </NuxtLink>

      <NuxtLink
        to="/about">
        <Btn>
                  <IconWrapper name="ph:cat" class="size-4.25 dst" />
          About
        <SidebarBadge>+ CATS
   <!--          <i-fat-cat class="size-8 shrink-0 fill-bc dst -mt-2.5 stroke-[1.2]" /> -->
    </SidebarBadge>
        </Btn>
      </NuxtLink>

      <Collapsible>
        <SidebarCollapsibleTrigger>
            <IconWrapper name="ph:envelope" class="size-4.5 dst" />
          Contact
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent>
          <a
            href="https://discord.gg/Jzuu7bYTZY"
            target="_blank">
            <Btn>

              <icon
                name="streamline:discord"
                class="size-4" />
              Discord
            </Btn>
          </a>

          <a
            href="https://github.com/clemony/lolpocket"
            target="_blank"
            class=" dst  underline-offset-2 hover:underline ">
            <Btn>
              <icon
                name="ph:github-logo"
                class="size-4 dst" /> github @clemony
            </Btn>
          </a>

          <Btn>
            <icon name="mail" class="size-4.5 dst stroke-[1.2]" />

            <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
              <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center cursor-pointer w-full gap-3 pr-3 " @click="copy()">
                <span class="grow text-start">contact@lolpocket.win</span>

                <icon name="copy" class=" !size-3.5 shrink-0" />
              </button>
            </UseClipboard>
          </Btn>
        </SidebarCollapsibleContent>
      </Collapsible>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>
