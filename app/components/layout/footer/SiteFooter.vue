<script lang="ts" setup>
import type { ArrayOrNested, NavigationMenuItem, PageLink } from "@nuxt/ui"
import { contactInfo } from "~/domain/lp/contact/contactInfo"
import { riotDisclaimer } from "~/domain/riot/riot-disclaimer"
import { backpackNav, libraryNav } from "~/utils/routes"

const { copied, copy, isSupported, text } = useClipboard({
  source: contactInfo.support?.to ?? "",
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
    to: `/${p}`,
  }))
)
</script>

<template>
  <UFooter
    :ui="{
      root: ' bg-secondary grow flex flex-col  before:size-full  relative  z-0',
      top: 'mx-auto grow  overflow-hidden',
      bottom:
        'h-20 bg-neutral text-nc max-h-20 min-h-20 border-t-neutral justify-between flex',
    }">
    <template #top>
      <UFooterColumns :ui="{ root: 'w-(--ui-container) mx-auto' }">
        <template #left>
          <ULink underline to="/nexus" name="Nexus" />
          <!--      <UPageLinks title="Library" :links="libraryNav" /> -->
        </template>
        <template #right>
          <UPageLinks
            :ui="{ title: 'text-2xl font-bold', list: 'capitalize' }"
            title="Library"
            :links="right" />
          <LocaleSelect />
        </template>
      </UFooterColumns>
    </template>
    <template #bottom>
      <UFooter class="flex grow items-center gap-2">
        <template #left>
          <LpLogo
            square
            :ui="{
              base: 'size-10 shrink-0',
              label: 'group-not-on/btn:text-nc **:text-nc',
            }"
            color="neutral">
          </LpLogo>
        </template>

        <p class="text-xs leading-4.5">
          {{ riotDisclaimer }}
        </p>

        <template #right>
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
                    <span class="-mx-2 badge text-md italic badge-neutral">
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
        </template>
      </UFooter>
    </template>
  </UFooter>
</template>
