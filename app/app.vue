<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  link: [
    {
      href: "img/favicon.png",
      rel: "icon",
      type: "image/png",
    },
  ],
})

const reportComment = computed(() => threads().reportComment ?? undefined)
</script>

<template>
  <UApp
    id="app"
    :locale="locales[locale]"
    :ui="{ base: ' overflow-hidden' }"
    :toaster="{
      position: 'top-right',
      class: 'translate-y-15 ',
    }">
    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LazyReportDialog
      v-if="user().user && user().account && reportComment"
      :comment="reportComment" />
    <!-- loading -->
    <NuxtLoadingIndicator
      style="
        height: 5px;
        background: repeating-linear-gradient(
          to right,
          var(--color-n3) 0%,
          var(--color-n2),
          var(--color-neutral) 100%
        );
      " />
  </UApp>
</template>
