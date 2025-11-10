<script lang="ts" setup>
import { AppSidebar } from '#components'
import { useTippy } from 'vue-tippy'

const nuxtApp = useNuxtApp().vueApp._context

const tipp = {
  animation: 'shift-toward',
  arrow: false,
  duration: 300,
  flip: false,
  interactive: true,
  placement: 'left',
  theme: 'base-0, sidebar'
}
const instance = useTemplateRef<HTMLElement>('instance')
</script>

<template>
  <tippy
    ref="instance"
    v-bind="tipp">
    <button
      class="fixed top-0 left-0 z-30 grid h-screen w-8 place-items-center">
      <span
        class="
          relative grid h-32 w-3 rounded-full border border-b3 bg-tint-b3/40
          after:absolute after:h-32 after:w-8 after:place-self-center
          hover:border-shade-b3/4 hover:bg-tint-b3/10
        " />
    </button>
    <template #content>
      <AppSidebar />
    </template>
  </tippy>
</template>

<style>
@reference '@css/tailwind.css';
</style>