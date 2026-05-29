<script lang="ts" setup>
import type {
  ArrayOrNested,
  FooterColumn,
  NavigationMenuItem,
  PageLink
} from "@nuxt/ui"
import { contactInfo } from "~/domain/about/contact/contactInfo"
import { riotDisclaimer } from "~/domain/riot/riot-disclaimer"

const { copied, copy, isSupported, text } = useClipboard({
  source: String(contactInfo.support?.to) ?? ""
})

const copyMsg = computed(() => {
  return copied ? "Copied!" : "Copy"
})

const contactLinks = computed(() =>
  [contactInfo.github, contactInfo.discord].filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  )
)

const { tools, library, nexus, backpack } = useApp().routes
console.log("🥸 - nexus:", nexus)

const links = computed(() => [
  {
    title: "Base",
    links: nexus?.map((v) => ({
      ...v,
      ui: { linkLeadingIcon: cn("size-4.5", v.class) }
    }))
  },
  {
    title: "Tools",
    links: tools?.map((v) => ({
      ...v,
      ui: { linkLeadingIcon: v.class }
    }))
  }
])
</script>

<template>
  <UFooter
    :ui="{
      root: 'relative z-0 flex grow flex-col bg-secondary before:size-full',
      top: 'mx-auto h-130 grow overflow-hidden',
      bottom:
        'flex h-20 items-center gap-4 border-t-neutral bg-neutral px-16 text-neutral'
    }">
    <template #top>
      <UFooterColumns
        :ui="{
          root: 'mx-auto flex w-(--ui-container)',
          left: 'basis-2/3 space-y-6'
        }">
        <template #left>
          <div class="grid w-full grid-cols-2">
            <div>
              <UPageLinks
                v-for="(v, i) in links"
                :key="i"
                v-bind="v"
                :ui="{
                  list: 'flex flex-col items-start gap-4',
                  linkLabel:
                    'justify-start font-medium text-pc capitalize group-hover/link:underline'
                }" />
            </div>
            <div>
              <UPageLinks
                v-for="(v, i) in links"
                :key="i"
                v-bind="v"
                :ui="{
                  list: 'flex flex-col items-start gap-4',
                  linkLabel:
                    'justify-start font-medium text-pc capitalize group-hover/link:underline'
                }" />
            </div>
          </div>
        </template>
        <template #right>
          <UInput />
        </template>
      </UFooterColumns>
    </template>
    <template #bottom>
      <ULink
        underline
        to="/"
        name="LP"
        class="shrink-0 text-[1.8rem] leading-none font-[800] text-nc!">
        LP
      </ULink>

      <p class="max-w-2/3 grow text-xs leading-4.5 text-nc">
        {{ riotDisclaimer }}
      </p>
      <Grow />

      <!--     <ul class="flex">
       <li
          v-for="(link, i) in links"
          :key="link.name"
          class="flex items-center gap-1.5">
          <NuxtLink
            class="text-xs font-medium underline-offset-2 hover:underline"
            :to="link.path">
            {{ link.meta?.title || link.name }}
          </NuxtLink>
          <icon
            v-if="i + 1 !== links.length"
            class="size-4 text-nc opacity-70"
            name="slash" />
        </li>
      </ul> -->
      <ul
        class="flex shrink-0 items-center justify-end gap-2 justify-self-end *:grid *:place-items-center">
        <UButton
          v-for="link in contactLinks"
          :key="link.label"
          :icon="link.icon"
          as="li"
          size="xl"
          color="neutral"
          variant="link"
          :ui="{ leadingIcon: cn('text-nc', link.ui?.leadingIcon) }"
          external
          :to="link.to"
          target="_blank" />

        <Tooltip :disable-closing-trigger="true" side="top">
          <UButton
            variant="ghost"
            color="neutral"
            icon="at"
            rounded
            :ui="{
              base: 'hover:border-nc',
              leadingIcon:
                'pointer-events-none size-6.5 shrink-0 text-nc **:stroke-[1.4]'
            }"
            @click="copy()" />
          <template #content>
            <div class="flex flex-col gap-1 p-2">
              <LazyUBadge variant="outline" color="neutral">
                {{ contactInfo.contact?.to }}
              </LazyUBadge>

              <span class="flex items-center gap-1 text-xs">
                {{ !copied ? "Click to copy address" : "Copied!" }}

                <icon class="size-3.5! *:text-nc" name="copy" />
              </span>
            </div>
          </template>
        </Tooltip>
      </ul>
    </template>
  </UFooter>
</template>
