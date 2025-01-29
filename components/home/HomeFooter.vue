<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

/* const { text, copy, copied, isSupported } = useClipboard({ source })

const copyMsg = computed (() => {
  return copied ? 'Copied!' : 'Copy'
}) */
</script>

<template>
  <footer class="footer sm:footer-horizontal bg-neutral text-nc items-center p-6">
    <aside class="grid-flow-col items-center">
      <div class="font-bold text-9">
        LP
      </div>
      <p class="max-w-4/5">
        Lolpockets isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
      </p>
    </aside>
    <nav class="grid-flow-col gap-2 items-center justify-center *:grid *:place-items-center">
      <a v-tippy="{ content: 'Discord', placement: 'top', offset: [0, 13] }" href="https://discord.gg/Jzuu7bYTZY" target="_blank" class="size-12">
        <icon name="prime:discord" class="size-11 text-nc" />
      </a>
      <a
        class="size-12"
      >
        <tippy tag="button" content-tag="div" content-class="content-wrapper" interactive :offset="[0, 13]" :follow-cursor="false" placement="top" :hide-on-click="false">
          <template #default>
            <icon name="teenyicons:at-outline" class="size-8 stroke-1/2 shrink-0 text-nc" />
          </template>
          <template #content>
            <UseClipboard v-slot="{ copy, copied }" source="contact@lolpocket.win">
              <button v-tippy="{ content: !copied ? 'Copy' : 'Copied!', placement: 'top', offset: [0, 5], hideOnClick: false }" class="flex items-center  py-2 gap-2" @click="copy()">
                <span>contact@lolpocket.win</span>
                <icon name="copy" class="*:text-nc !size-4" />

              </button>
            </UseClipboard>
          </template>
        </tippy>
      </a>
      <a v-tippy="{ content: 'Github', placement: 'top', offset: [0, 13] }" href="https://github.com/clemony/lolpocket" target="_blank" class="size-12">
        <icon name="prime:github" class="size-12 text-nc" />
      </a>
    </nav>
  </footer>
</template>

<style scoped>

</style>
