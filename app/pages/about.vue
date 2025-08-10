<script setup lang="ts">
definePageMeta({

  meta: {
    section: 'docs',
    icon: 'info',
  },
})

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

const hoverClass = 'r'

const faq = [
  {
    q: 'Where going?',
    a: '',
  },
]
</script>

<template>
  <div class="px-18  size-full grid place-items-center">
    <AppTitlebar />

    <div class="flex w-210  flex-col gap-6 items-center mx-auto">
      <div class="grid grid-cols-[20px_1fr] w-full gap-x-14 **:font-mono  mockup-code text-nc text-3  ">
        <div class="col-start-1 grid pl-6 gap-y-1 items-center">
          <div
            v-for="index in 13"
            :key="index"
            class="grid items-center">
            {{ index }}
          </div>
        </div>

        <div class="col-start-2 grid h-fit  gap-y-1 items-center">
          <div>const CatTax: cat&#60;image: popUp&#62; = {</div>

          <div class="gap-y-1 grid tiems-center pl-6">
            <div>'Clem': {</div>

            <div class="flex items-center gap-1 pl-6">
              image:
              <span class="w-4" />
              [
              <CatDialog>1,</CatDialog>

              <CatDialog>2,</CatDialog>

              <CatDialog>3,</CatDialog>

              <CatDialog>4</CatDialog> ],
            </div>

            <div>},</div>

            <div class="opacity-0">
              .
            </div>

            <div>'Nell': {</div>

            <div class="flex items-center gap-1 pl-6">
              image:
              <span class="w-4" />
              [
              <CatDialog>1,</CatDialog>

              <CatDialog>2,</CatDialog>

              <CatDialog>3,</CatDialog>

              <CatDialog>4</CatDialog>],
            </div>

            <div>
              };<span class="animate-[blink-1_1s_infinite_both] text-4">|</span>
            </div>
          </div>

          <div class="opacity-0">
            .
          </div>

          <div>
            <span
              v-tippy="'! (logical NOT) operator'"
              class="hover:bg-b3 hover:text-bc">!</span>

            <span>frequently asked questions</span>
          </div>

          <span class="pl-6">[Q] Where going? </span>

          <span class="text-4 gap-3 flex pl-6"> [LP]<icon
            name="hugeicons:moon-01"
            class="size-7 text-nc stroke-0.8 mb-1" /></span>
        </div>
      </div>

      <div
        class="items-end self-end flex flex-col pr-3 mt-2 gap-2 py-4 **:dst">
        <p class="">
          thanks for trying the app
        </p>

        <p class="inline-flex items-center gap-1">
          <Icon
            name="typcn:heart-outline"
            class="size-3" />
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
            v-for="icon in icons"
            :key="icon.name"
            tag="button"
            content-tag="div">
            <template #default>
              <a
                :href="icon.link"
                :target="icon.link ? '_blank' : ''">
                <icon
                  :name="icon.icon"
                  class="size-6 dst shrink-0" />
              </a>
            </template>

            <template #content>
              <div class="flex gap-2 items-center">
                {{ icon.name }}
                <icon
                  v-if="icon.link"
                  name="link"
                  class="size-3.5 text-nc" />
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
          <i>Lolpockets</i>

          <u>isn't</u>
          endorsed by Riot Games
          and <u>doesn't</u>

          reflect the views <i>or</i>

          opinions of <br />
          Riot Games
          <i> or</i>

          anyone officially involved in producing <i>or</i>

          managing Riot Games properties. <br />

          Riot Games, and <u>all</u>

          associated properties are trademarks or registered trademarks of <br />
        </p>

        <p class="mt-1 ">
          <a
            href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&utm_source=riotbar"
            target="_blank"
            class="hover:underline flex items-center gap-1"><b>Riot Games, Inc</b>

            <icon
              name="link"
              class="size-4 mb-0.5" /></a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
