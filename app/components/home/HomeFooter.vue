<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

const source = 'contact@lolpocket.win'
const { text, copy, copied, isSupported } = useClipboard({ source })

const copyMsg = computed (() => {
  return copied ? 'Copied!' : 'Copy'
})
</script>

<template>
  <footer class="h-32 max-h-32 flex min-h-32 w-full footer sm:footer-horizontal bg-n1 text-nc items-center p-6 z-2">
    <aside class="flex grow items-center gap-6">
      <h1 class="font-bold text-10">
        LP
      </h1>

      <p class="max-w-4/5 leading-5">
        {{ riotDisclaimer }}
      </p>
    </aside>

    <menu class="grid-flow-col gap-3 items-center justify-self-end justify-end *:grid *:place-items-center">
      <NuxtLink
        v-for="link in contactLinks"
        :key="link.name"
        v-tippy="{
          content: link.name,
          placement: 'top',
          offset: [0, 13],
          followCursor: false,
        }"
        external
        :href="link.link"
        target="_blank"
        class="size-12 grid place-items-center *:text-nc">
        <icon :name="link.icon.name" :class="link.icon.class" />
      </NuxtLink>

      <a
        class="size-12">
        <tippy tag="button" content-tag="div" :follow-cursor="false" content-class="content-wrapper" interactive :offset="[0, 13]" placement="top" :hide-on-click="false">
          <template #default>
            <icon name="teenyicons:at-outline" class="size-7 stroke-1/2 shrink-0 text-nc" />
          </template>

          <template #content>
            <UseClipboard>
              <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center  py-2 gap-2" @click="copy()">
                <span>contact@lolpocket.win</span>

                <icon name="copy" class="*:text-nc !size-4" />

              </button>
            </UseClipboard>
          </template>
        </tippy>
      </a>
    </menu>
  </footer>
</template>

<style scoped>

</style>
