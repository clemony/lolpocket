<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const source = 'contact@lolpocket.win'
const { copied, copy, isSupported, text } = useClipboard({ source })

const copyMsg = computed(() => {
  return copied ? 'Copied!' : 'Copy'
})

const router = useRouter()
const links = computed(() =>
  router.getRoutes().filter(r => r.name === 'docs')
)
</script>

<template>
  <footer
    class=""
    :class="
      cn(
        'bgneutral footer bg-neutral text-nc sm:footer-horizontal z-0 flex h-26 max-h-26 min-h-26 w-full items-center gap-12 p-6',
        className,
      )
    "
  >
    <aside class="flex grow items-center gap-5">
      <button
        class="aspect-square cursor-pointer p-3 decoration-3 underline-offset-4 hover:underline"
        title="home"
      >
        <h1 class="text-xxs font-bold">
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
        class="flex items-center gap-1.5"
      >
        <NuxtLink
          class="text-xs font-medium underline-offset-2 hover:underline"
          :to="link.path"
        >
          {{ link.meta?.title || link.name }}
        </NuxtLink>
        <icon
          v-if="i + 1 !== links.length"
          class="text-nc size-4 opacity-70"
          name="slash"
        />
      </li>
    </ul>
    <menu
      class="shrink-0 grid-flow-col grid-cols-3 items-center justify-end gap-4 justify-self-end *:grid *:place-items-center"
    >
      <NuxtLink
        v-for="link in contactLinks"
        :key="link.name"
        class="*:text-nc grid place-items-center"
        :title="link.name"
        external
        :to="link.link"
        target="_blank"
      >
        <icon :name="link.icon.name" :class="link.icon.class" />
      </NuxtLink>

      <tippy
        class="flex items-center gap-2 py-2"
        tag="button"
        placement="top"
        @click="copy()"
      >
        <icon
          class="text-nc size-6 shrink-0 stroke-1"
          name="teenyicons:at-outline"
        />

        <template #content>
          <div class="flex flex-col gap-1 p-2">
            <span class="badge badge-neutral text-md -mx-2 italic">
              contact@lolpocket.win
            </span>

            <span class="flex items-center gap-1 text-xs">
              {{ !copied ? "Click @ to Copy" : "Copied!" }}

              <icon class="*:text-nc size-3.5!" name="copy" />
            </span>
          </div>
        </template>
      </tippy>
    </menu>
  </footer>
</template>
