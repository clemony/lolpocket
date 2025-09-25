<script lang="ts" setup>
import { contactLinks, riotDisclaimer } from '#shared/appdata'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const source = 'contact@lolpocket.win'
const { copied, copy, isSupported, text } = useClipboard({ source })

const copyMsg = computed(() => {
  return copied ? 'Copied!' : 'Copy'
})

const router = useRouter()
const links = computed (() =>
  router.getRoutes().filter(r => r.name === 'docs')
)
</script>

<template>
  <footer
    class=""
    :class="
      cn(
        'h-26 bg-neutral max-h-26 flex min-h-26 w-full footer sm:footer-horizontal bgneutral text-nc gap-12 items-center p-6 z-0 ',
        className,
      )
    ">
    <aside class="flex grow items-center gap-5">
      <button
        title="home"
        class="aspect-square cursor-pointer p-3 hover:underline underline-offset-4 decoration-3">
        <h1 class="font-bold text-xxs0">
          LP
        </h1>
      </button>

      <p class="max-w-4/5 leading-4.5">
        {{ riotDisclaimer }}
      </p>
    </aside>
    <ul class="flex">
      <li
        v-for="(link, i) in links"
        :key="link.name"
        class="flex gap-1.5 items-center">
        <NuxtLink
          :to="link.path"
          class="text-xxs font-medium hover:underline underline-offset-2">
          {{ link.meta?.title || link.name }}
        </NuxtLink>
        <icon
          v-if="i + 1 !== links.length"
          name="slash"
          class="text-nc size-4 opacity-70" />
      </li>
    </ul>
    <menu
      class="grid-flow-col gap-4 shrink-0 grid-cols-3 items-center justify-self-end justify-end *:grid *:place-items-center">
      <NuxtLink
        v-for="link in contactLinks"
        :key="link.name"
        :title="link.name"
        external
        :to="link.link"
        target="_blank"
        class="grid place-items-center *:text-nc">
        <icon
          :name="link.icon.name"
          :class="link.icon.class" />
      </NuxtLink>

      <tippy
        tag="button"
        placement="top"
        class="flex items-center py-2 gap-2"
        @click="copy()">
        <icon
          name="teenyicons:at-outline"
          class="size-6 stroke-1/2 shrink-0 text-nc" />

        <template #content>
          <div class="p-2 flex flex-col gap-1">
            <span class="text-sm italic badge badge-neutral -mx-2">
              contact@lolpocket.win
            </span>

            <span class="flex gap-1 text-xxs items-center">
              {{ !copied ? "Click @ to Copy" : "Copied!" }}

              <icon
                name="copy"
                class="*:text-nc !size-3.5" />
            </span>
          </div>
        </template>
      </tippy>
    </menu>
  </footer>
</template>
