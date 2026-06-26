<script lang="ts" setup>
import { contactInfo } from "~/domain/about/contact/contactInfo"
import { riotDisclaimer } from "~~/shared/constants/riot/riot-disclaimer"

const props = defineProps<{
  class?: string
}>()
const { copied, copy, isSupported, text } = useClipboard({
  source: String(contactInfo.support?.to) ?? "",
})

const copyMsg = computed(() => {
  return copied ? "Copied!" : "Copy"
})

const contactLinks = computed(() =>
  [contactInfo.github, contactInfo.discord].filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  )
)
</script>

<template>
  <div
    :class="
      cn(
        'flex grow items-center gap-4 border-t-neutral bg-neutral px-12 py-6',
        props.class
      )
    ">
    <ULink
      underline
      to="/"
      name="LP"
      class="shrink-0 self-start py-1 text-[2rem] leading-none font-[800] text-nc!">
      LP
    </ULink>

    <p class="max-w-2/3 grow text-xs leading-4.5 text-nc">
      {{ riotDisclaimer }}
    </p>
    <Grow />

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
              'pointer-events-none size-6.5 shrink-0 text-nc **:stroke-[1.4]',
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
  </div>
</template>
