<script setup lang="ts">
definePageMeta({
  title: "About",
  prefix: "Docs",
  icon: "lucide:message-circle-question-mark",
})

const icons = [
  {
    name: "Vue",
    icon: "fontisto:vuejs",
    link: "https://vuejs.org",
  },
  {
    name: "DaisyUI",
    icon: "simple-icons:daisyui",
    link: "https://v5.daisyui.com",
  },
  {
    name: "Typescript",
    icon: "file-icons:typescript",
    link: "",
  },
  {
    name: "VSCode",
    icon: "codicon:vscode-insiders",
    link: "",
  },
  {
    name: "TailwindCSS",
    icon: "simple-icons:tailwindcss",
    link: "https://tailwindcss.com",
  },
  {
    name: "Iconify",
    icon: "simple-icons:iconify",
    link: "https://iconify.design",
  },
  {
    name: "Eslint",
    icon: "teenyicons:eslint-outline",
    link: "",
  },
  {
    name: "shadcn-ui",
    icon: "simple-icons:shadcnui",
    link: "https://www.shadcn-vue.com",
  },
  {
    name: "Nuxt",
    icon: "cib:nuxt-js",
    link: "https://nuxt.com",
  },
  {
    name: "Vite",
    icon: "tabler:brand-vite",
    link: "https://vite.dev",
  },
]

const hoverClass = "r"

const faq = [
  {
    a: "",
    q: "Where going?",
  },
]
</script>

<template>
  <div class="grid h-screen w-full place-items-center px-18">
    <div class="mx-auto -mt-15 flex w-180 flex-col items-center gap-6">
      <div
        class="mockup-code relative grid w-full grid-cols-[20px_1fr] gap-x-14 text-md text-nc **:font-mono">
        <div class="col-start-1 grid items-center gap-y-1 pl-6">
          <div v-for="index in 10" :key="index" class="grid items-center">
            {{ index }}
          </div>
        </div>

        <div class="col-start-2 grid h-fit items-center gap-y-1">
          <div>const catTax: Record&#60;name, image[]&#62; = &lbrace;</div>

          <div class="tiems-center grid gap-y-1 pl-6">
            <div>'Clem': {</div>

            <div class="flex items-center gap-1 pl-6">
              image:
              <span class="w-4" />
              [
              <CatDialog>1,</CatDialog>

              <CatDialog>2,</CatDialog>

              <CatDialog>3,</CatDialog>

              <CatDialog>4</CatDialog>
              ],
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

              <CatDialog>4</CatDialog>
              ],
            </div>

            <div>
              }
              <span class="animate-[blink-1_1s_infinite_both] text-lg">|</span>
            </div>
          </div>
          <div>&rbrace;</div>
          <div class="opacity-0">
            .
          </div>
        </div>

        <NuxtLink
          class="absolute right-6 bottom-6 flex items-center gap-1 font-mono italic underline underline-offset-2 **:text-nc hover:underline"
          to="https://github.com/clemony/lolpocket"
          external>
          <Icon name="github" />

          <Icon name="at" />
          clemony
        </NuxtLink>
      </div>

      <div class="field-box mt-26 px-4 py-3">
        <div
          class="pointer-events-auto flex items-center justify-evenly gap-5 *:ds-2xs **:size-6">
          <tippy
            v-for="icon in icons"
            :key="icon.name"
            tag="button"
            content-tag="div">
            <template #default>
              <a :href="icon.link" :target="icon.link ? '_blank' : ''">
                <icon
                  class="size-6 shrink-0 drop-shadow-2xs"
                  :name="icon.icon" />
                <span class="sr-only">{{ icon.name }}</span>
              </a>
            </template>

            <template #content>
              <div class="flex items-center gap-2">
                {{ icon.name }}
                <icon v-if="icon.link" class="size-3.5 text-nc" name="link" />
              </div>
            </template>
          </tippy>

          <icon
            class="brightness-80 contrast-200 grayscale"
            name="logos:pinia" />
        </div>
      </div>

      <div
        class="mt-6 flex flex-col items-center px-4 tracking-tight drop-shadow-2xs">
        <p class="text-center">
          <i>Lolpockets</i>

          <u>isn't</u>
          endorsed by Riot Games and
          <u>doesn't</u>

          reflect the views
          <i>or</i>

          opinions of
          <br />
          Riot Games
          <i>or</i>

          anyone officially involved in producing
          <i>or</i>

          managing Riot Games properties.
          <br />

          Riot Games, and
          <u>all</u>

          associated properties are trademarks or registered trademarks of
          <br />
        </p>

        <p class="mt-1">
          <a
            class="flex items-center gap-1 hover:underline"
            href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&utm_source=riotbar"
            target="_blank">
            <b>Riot Games, Inc</b>

            <icon class="mb-0.5 size-4" name="link" />
          </a>
          .
        </p>
      </div>
    </div>
  </div>
</template>
