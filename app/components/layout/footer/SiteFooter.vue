<script lang="ts" setup>
import type { ArrayOrNested, NavigationMenuItem, PageLink } from "@nuxt/ui"
import { contactInfo } from "~/domain/lp/contact/contactInfo"
import { riotDisclaimer } from "~/domain/riot/riot-disclaimer"
import { backpackNav, libraryNav } from "~/utils/routes"

const { copied, copy, isSupported, text } = useClipboard({
  source: String(contactInfo.support?.to )?? ""
})

const copyMsg = computed(() => {
  return copied ? "Copied!" : "Copy"
})

const router = useRouter()
const links = computed(() =>
  router.getRoutes().filter((r) => r.name === "docs")
)

const contactLinks = computed(() =>
  [contactInfo.github, contactInfo.discord].filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  )
)

/* const right = computed(() =>
  backpackNav
    .filter((c: PageLink) => c?.label === "")
    .map((l: PageLink) => ({
      label: l.label,
    }))
) */
const right = computed(() =>
  ["champions", "items", "runes", "spells"].map((p) => ({
    label: p,
    to: `/${p}`
  }))
)
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
        :ui="{ root: 'mx-auto w-(--ui-container)' }"
        :links="[right]" />
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

      <ul class="flex">
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
      </ul>
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
