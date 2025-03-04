<script setup lang="ts">
const icons = [
  {
    name: 'Vue',
    link: 'https://vuejs.org',
    icon: 'fontisto:vuejs',
  },
  {
    name: 'DaisyUI',
    link: 'https://v5.daisyui.com',
    icon: 'simple-icons:daisyui',
  },
  {
    name: 'Typescript',
    link: '',
    icon: 'file-icons:typescript',
  },
  {
    name: 'VSCode',
    link: '',
    icon: 'codicon:vscode-insiders',
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'Iconify',
    link: 'https://iconify.design',
    icon: 'simple-icons:iconify',
  },
  {
    name: 'Eslint',
    link: '',
    icon: 'teenyicons:eslint-outline',
  },
  {
    name: 'shadcn-ui',
    link: 'https://www.shadcn-vue.com',
    icon: 'simple-icons:shadcnui',
  },
  {
    name: 'Nuxt',
    link: 'https://nuxt.com',
    icon: 'cib:nuxt-js',
  },
  {
    name: 'Vite',
    link: 'https://vite.dev',
    icon: 'tabler:brand-vite',
  },

]

const hoverClass = 'hover:underline hover:bg-b2/35 underline-offset-2 !cursor-pointer'

const faq = [
  {
    q: 'Where going?',
    a: '',
  },
]
</script>

<template>
  <div class="px-18 pt-30 w-full justify-center">
    <!-- prettier-ignore -->

    <div class="flex w-[500px] flex-col gap-6 pt-24 items-center mx-auto">
      <div
        class="mockup-code bg-neutral text-nc *:ws-nowrap w-2/5 min-w-[400px] rounded-2xl w-full leading-loose font-normal **:select-none **:text-3">
        <pre
          data-prefix="$"><code class="h-20 scale-x-110">const CatTax: cat&#60;image: popUp&#62; = {</code></pre>
        <pre data-prefix=">" class="flex">
                <code class="flex leading-none pt-2">&nbsp; 'Clem':&nbsp;{ image:
          <span :class="hoverClass">&nbsp; 1</span>, <span :class="hoverClass">&nbsp;2</span>, <span :class="hoverClass">&nbsp;3&nbsp;</span>}, </code></pre> <pre
          data-prefix=">"
          class="flex items-center"><code class="flex leading-none pt-3">&nbsp; 'Nell':&nbsp;{ image: <span
            :class="hoverClass">&nbsp;1</span>, <span :class="hoverClass">&nbsp;2</span>, <span :class="hoverClass">&nbsp;3&nbsp;</span>},
    </code></pre>
        <pre
          data-prefix=" "
          class="flex"><code class="flex items-center">&nbsp; };<span class="animate-[blink-1_1s_infinite_both] text-4">|</span>
  </code></pre>
        <pre
          data-prefix=" "
          class="flex"><code class="flex items-center">&nbsp;<span class=" text-4"></span>
  </code></pre>
        <pre
          data-prefix=">"
          class="flex"><code class="flex items-center">&nbsp;<span class="text-4"><span v-tippy="'! (logical NOT) operator'" class="hover:bg-b3 hover:text-bc">!</span>frequently asked questions</span>
  </code></pre>
        <pre
          data-prefix=">"
          class="flex"><code class="flex items-center">&nbsp;<span class="text-4"> [Q] Where going? </span>
  </code></pre>
        <pre
          data-prefix=">"
          class="flex"><code class="flex items-center">&nbsp;<span class="text-4 gap-3 flex"> [LP]<icon name="hugeicons:moon-01" class="size-7 text-nc stroke-1" /></span>
  </code></pre>
      </div>

      <div
        class="items-end self-end flex flex-col pr-3 mt-2 gap-2 py-4 **:dst">
        <p class="">
          thanks for trying the app
        </p>
        <p class="inline-flex items-center gap-1">
          <Icon name="typcn:heart-outline" class="size-3" />
          from
          <Icon
            name="teenyicons:arrow-right-outline"
            class="size-3" />
          <span class="italic font-mono">clem & nell's</span> human
        </p>
        <p>
          <a
            href="https://github.com/clemony/lolpocket"
            class="mt-2 inline-flex items-center gap-1 underline transition-all duration-300 underline-offset-2 font-mono italic hover:underline">
            <Icon name="github" />
            <Icon name="at" />
            clemony
          </a>
        </p>
      </div>
      <Field class="mt-26 ">
        <div class="items-center justify-evenly flex gap-5 *:dst **:size-6 pointer-events-auto">
          <tippy
            v-for="icon in icons" :key="icon.name"
            tag="button"
            content-tag="div">
            <template #default>
              <a :href="icon.link" :target="icon.link ? '_blank' : ''">
                <icon :name="icon.icon" class="size-6 dst shrink-0" />
              </a>
            </template>
            <template #content>
              <div class="flex gap-2 items-center">
                {{ icon.name }}
                <icon v-if="icon.link" name="link" class="size-3.5 text-nc" />
              </div>
            </template>
          </tippy>

          <icon
            class="brightness-[80%] contrast-200 grayscale"
            name="logos:pinia" />
        </div>
      </Field>
      <div class="flex items-center flex-col tracking-tight dst px-4 mt-6">
        <p class="text-center">
          <i>Lolpockets</i> <u>isn't</u> endorsed by Riot Games
          and <u>doesn't</u> reflect the views <i>or</i> opinions of <br />Riot Games
          <i> or</i> anyone officially involved in producing <i>or</i> managing Riot Games properties. <br />Riot Games, and <u>all</u> associated properties are trademarks or registered trademarks of <br />
        </p>
        <p class="mt-1 ">
          <a href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&utm_source=riotbar" target="_blank" class="hover:underline flex items-center gap-1"><b>Riot Games, Inc</b>
            <icon name="link" class="size-4 mb-0.5" /></a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
