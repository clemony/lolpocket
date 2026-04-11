<script setup lang="ts">
/* import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

    :locale="locales[locale]" */
const colorMode = useColorMode()
const themeAccent = useThemeAccentPreference()

/* watch(
  () => user().settings?.theme,
  (theme) => {
    const preference = normalizeThemePreference(theme ?? colorMode.preference)
    if (preference !== colorMode.preference)
      colorMode.preference = preference
  },
  {
    immediate: true
  }
)
 */
useHead(() => ({
  htmlAttrs: {
    lang: "en",
    dir: "auto",
    "data-accent": user().account?.color ?? "diminuendo",
    "data-theme":
      user().settings?.theme ?? usePreferredColorScheme().value ?? "light"
  }
}))

const route = useRoute()
useSeoMeta({
  title: () => String(route.meta.title || route.name)
})
const reportComment = computed(() => threads().reportComment ?? undefined)
</script>

<template>
  <UApp
    id="app"
    :tooltip="{
      delayDuration: 300
    }"
    :ui="{ base: 'overflow-hidden' }"
    :toaster="{
      position: 'top-center',
      class: '',
      progress: false,
      duration: 9000,
      expand: true
    }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LazyReportDialog
      v-if="user().account && reportComment"
      :comment="reportComment" />
    <!-- loading -->
    <ClientOnly>
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
    </ClientOnly>
  </UApp>
</template>
