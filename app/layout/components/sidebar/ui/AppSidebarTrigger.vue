<script lang="ts" setup>

import { AppSidebar } from '#components'
import { useTippy } from 'vue-tippy'

       const nuxtApp = useNuxtApp().vueApp._context

const tipp = {
        theme: 'base-0, sidebar',
        placement: 'left',
        animation: 'shift-toward',
        arrow: false,
        duration:300,
        interactive: true,
        flip: false
        }
const instance = useTemplateRef<HTMLElement>('instance')
</script>

<template>
  <tippy ref="instance"
v-bind="tipp">
<button
 class=" grid place-items-center fixed top-0 left-0  h-screen z-30 w-8">
        <span class="hover:bg-tint-b3/10 hover:border-shade-b3/4 bg-tint-b3/40 border-b3 relative after:absolute after:w-8 after:place-self-center after:h-32  grid h-32 w-3 rounded-full border" />
      </button>
<template #content>
  <AppSidebar />
</template>
      </tippy>
</template>

<style>
@reference '@css/tailwind.css';



</style>