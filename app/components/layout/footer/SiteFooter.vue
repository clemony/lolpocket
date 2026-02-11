<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"

const { copied, copy, isSupported, text } = useClipboard({
  source: contactInfo.support?.to ?? '',
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

const nav = computed(() => {
  const center: Record<string, NavigationMenuItem> = {}
  const left: Record<string, NavigationMenuItem> = {}

  const backpack = buildRoute("/backpack")
  const tools = buildRoute("/tools")
  const nexus = buildRoute("/nexus")
  const library = buildRoute("/library")

  if (backpack) center.backpack = backpack as NavigationMenuItem
  if (tools) center.tools = tools as NavigationMenuItem
  if (nexus) left.nexus = nexus as NavigationMenuItem
  if (library) left.library = library as NavigationMenuItem

  return { center, left }
})
</script>

<template>
  <UFooter
    :ui="{
      root: ' bg-secondary before:z-0 before:size-full overflow-hidden relative before:absolute   z-1 *:z-1',
      top: 'mx-auto',
      bottom:
        'h-20 bg-neutral text-nc max-h-20 min-h-20 border-t-neutral justify-between flex',
    }">
    <template #top>
      <UFooterColumns :ui="{ root: 'w-(--ui-container) mx-auto' }">
        <template #left>
          <SiteMap :group="nav.left" />
        </template>
        <SiteMap :group="nav.center" />
        <template #right>
          <LocaleSelect />
        </template>
      </UFooterColumns>
    </template>
    <template #bottom>
      <UContainer class="flex grow items-center gap-2">
        <UButton
          variant="link"
          square
          :ui="{ base: 'shrink-0' }"
          color="neutral"
          size="xl">
          <h1 class="shrink-0 text-4xl leading-none font-bold">
            LP
          </h1>
        </UButton>

        <p class="text-xs leading-4.5">
          {{ riotDisclaimer }}
        </p>
        <div>
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
              :ui="{ leadingIcon: link.ui?.leadingIcon }"
              external
              :to="link.to"
              target="_blank" />

            <UTooltip color="p0" side="top">
              <UButton
                variant="ghost"
                color="neutral"
                icon="at"
                rounded
                :ui="{
                  leadingIcon: 'text-nc size-6.5 shrink-0 **:stroke-[1.4]',
                }"
                @click="copy()" />
              <template #content>
                <div class="flex flex-col gap-1 p-2">
                  <span class="-mx-2 badge badge-neutral text-md italic">
                    {{ contactInfo.contact?.to }}
                  </span>

                  <span class="flex items-center gap-1 text-xs">
                    {{ !copied ? "Click @ to Copy" : "Copied!" }}

                    <icon class="size-3.5! *:text-nc" name="copy" />
                  </span>
                </div>
              </template>
            </UTooltip>
          </ul>
        </div>
      </UContainer>
    </template>
  </UFooter>
</template>
