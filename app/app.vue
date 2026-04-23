<script setup lang="ts">
/* import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

    :locale="locales[locale]" */
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

const sidebarOpen = shallowRef<boolean>(false)
const settingsOpen = shallowRef<boolean>(false)
const commandOpen = shallowRef<boolean>(false)

const sidebar: UiController = {
  settings: {
    open: settingsOpen,
    toggle: useToggle(settingsOpen),
    value: shallowRef<string>("App")
  }
}

provide("sidebar", sidebar)
</script>

<template>
  <UApp
    :tooltip="{
      delayDuration: 300
    }"
    :toaster="{
      position: 'top-center',
      progress: false,
      duration: 9000,
      expand: true
    }">
    <div class="flex h-dvh overflow-hidden">
      <div class="relative flex-1 overflow-y-auto">
        <NuxtLayout>
          <NuxtPage />
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
        </NuxtLayout>
      </div>
      <LazySidebar v-model:open="sidebarOpen" />
      <LazySettingsSidebar v-model:open="settingsOpen" />
      <LazyReportDialog
        v-if="user().account && reportComment"
        :comment="reportComment" />
    </div>
  </UApp>
</template>
