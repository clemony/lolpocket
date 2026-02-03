<script lang="ts" setup>
const { copied, copy, isSupported, text } = useClipboard({ source: contactInfo.support.address })

const copyMsg = computed(() => {
  return copied ? 'Copied!' : 'Copy'
})

const router = useRouter()
const links = computed(() =>
  router.getRoutes().filter(r => r.name === 'docs')
)

const contactLinks = [contactInfo.github, contactInfo.discord]

const component = 'navbar'
const nav = computed (() => {
  return {
    center: {
      children: [
        buildRoute('/backpack', { component }),
        buildRoute('/tools', { component }),
      ],
      label: 'hi'
    },
    left: {
      children: [
        buildRoute('/nexus', { component }),
        buildRoute('/library', { component }),
      ],
      label: ''
    }
  }
}
)
</script>

<template>
  <UFooter
    :style="{ height: '498px' }"
    :ui="{ root: 'h-130 bg-secondary before:z-0 before:size-full before:absolute   z-1 *:z-1', top: '', bottom: 'h-20 bg-neutral' }">
    <template #top>
      <UFooterColumns>
        <template #left>
          <SiteMap :group="nav.left" />
        </template>
        <SiteMap :group="nav.center" />
        <template #right>
        </template>
      </UFooterColumns>
    </template>
    <template #bottom>
      <div class="flex bg-neutral  text-nc w-screen  border-t-neutral z-1 h-20 max-h-20 min-h-20 border-t-2 py-5">
        <div class="flex gap-2">
          <button
            class="aspect-square cursor-pointer p-3 decoration-3 underline-offset-4 hover:underline"
            title="home">
            <h1 class="text-xxs font-bold">
              LP
            </h1>
          </button>

          <p class="max-w-4/5 leading-4.5">
            {{ riotDisclaimer }}
          </p>
        </div>
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
              class="text-nc size-4 opacity-70"
              name="slash" />
          </li>
        </ul>
        <menu
          class="shrink-0 grid-flow-col grid-cols-3 items-center justify-end gap-4 justify-self-end *:grid *:place-items-center">
          <UButton
            v-for="link in contactLinks"
            :key="link.label"
            :icon="link.icon"
            as="li"
            color="transparent"
            :ui="{ leadingIcon: link.class.icon }"
            external
            :to="link.address"
            target="_blank" />

          <UTooltip
            class="flex items-center gap-2 py-2"
            tag="button"
            placement="top"
            @click="copy()">
            <icon
              class="text-nc size-6 shrink-0 stroke-1"
              name="teenyicons:at-outline" />

            <template #content>
              <div class="flex flex-col gap-1 p-2">
                <span class="badge badge-neutral text-md -mx-2 italic">
                  {{ contactInfo.contact.address }}
                </span>

                <span class="flex items-center gap-1 text-xs">
                  {{ !copied ? "Click @ to Copy" : "Copied!" }}

                  <icon
                    class="*:text-nc size-3.5!"
                    name="copy" />
                </span>
              </div>
            </template>
          </UTooltip>
        </menu>
      </div>
    </template>
  </UFooter>
</template>
