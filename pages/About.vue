<script setup lang="ts">
const icons = [
  'fontisto:vuejs',
  'tabler:brand-vite',
  'file-icons:typescript',
  'codicon:vscode-insiders',
  'simple-icons:nodedotjs',
  'simple-icons:tailwindcss',
  'simple-icons:iconify',
  'nonicons:prettier-16',
  'teenyicons:eslint-outline',
  'simple-icons:shadcnui',
]

const hoverClass = 'hover:underline hover:bg-b2/35 underline-offset-2 !cursor-pointer'
</script>

<template>
  <div class="p-8 pt-30">
    <!-- prettier-ignore -->
    <div class="flex">
      <Grow />
      <div class="flex flex-col gap-6">
        <div
          class="mockup-code bg-neutral text-nc *:ws-nowrap w-2/5 min-w-[400px] rounded-xl leading-loose font-normal"
        >
          <pre
            data-prefix="$"
          ><code class="h-20 scale-x-110">const CatTax: cat&#60;image: popUp&#62; = {</code></pre>
          <pre data-prefix=">" class="flex">
                <code class="flex leading-none pt-2">&nbsp; 'Clem':&nbsp;{ image:
          <span :class="hoverClass">&nbsp; 1</span>, <span :class="hoverClass">&nbsp;2</span>, <span :class="hoverClass">&nbsp;3&nbsp;</span>}, </code></pre> <pre
            data-prefix=">"
            class="flex items-center"
          ><code class="flex leading-none pt-3">&nbsp; 'Nell':&nbsp;{ image: <span
            :class="hoverClass"
          >&nbsp;1</span>, <span :class="hoverClass">&nbsp;2</span>, <span :class="hoverClass">&nbsp;3&nbsp;</span>},
    </code></pre>
          <pre
            data-prefix=" "
            class="flex"
          ><code class="flex items-center">&nbsp; };<span class="animate-[blink-1_1s_infinite_both] text-4">|</span>
  </code></pre>
        </div>

        <div
          class="items-end flex flex-col gap-2"
        >
          <p class="">
            thanks for trying the app
          </p>
          <p class="inline-flex items-center gap-1">
            <Icon name="typcn:heart-outline" class="size-3" />
            from
            <Icon
              name="teenyicons:arrow-right-outline"
              class="size-3"
            />
            <span class="italic font-mono">clem & nell's</span> human
          </p>
          <p>
            <a
              href="https://github.com/clemony/lolpocket"
              class="mt-2 inline-flex items-center gap-1 underline transition-all duration-300 underline-offset-2 font-mono italic hover:underline"
            >
              <Icon name="github" />
              <Icon name="at" />
              clemony
            </a>
          </p>
        </div>
      </div>

      <a href="https://gitlab.com/lol-math/lolmath/-/tree/main/packages/calc" target="_blank" />

      game item by Petai Jantrapoon from <a href="https://thenounproject.com/browse/icons/term/game-item/" target="_blank" title="game item Icons">Noun Project</a> (CC BY 3.0)
    </div>

    <div class="absolute bottom-0 left-0 w-full p-8">
      <Separator label="MADE WITH" />
      <div class="flex">
        <div class="card *:text-bc/85 plb3e-items-center grid auto-cols-max grid-flow-col gap-5 rounded-xl pt-16 pb-8 *:size-6">
          <icon
            v-for="icon in icons"
            :name="icon"
          />
          <img
            class="brightness-50 contrast-200 grayscale"
            src="/img/ui/daisyui.svg"
          />

          <icon
            class="brightness-[80%] contrast-200 grayscale"
            name="logos:pinia"
          />
        </div>

        <Grow />

        <div class="flex flex-col items-end justify-center pt-8 tracking-tight">
          <p>All in game assets are the property of Riot Games.</p>
          <p>Riot Games is in no way affiliated with this app.</p>
          <p>All content is the developer's own opinion.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
