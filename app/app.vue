<script setup lang="ts">
/* import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

    :locale="locales[locale]" */
const userStore = user()
const threadStore = threads()
const preferredColorScheme = usePreferredColorScheme()
const { account, settings } = storeToRefs(userStore)
const { reportComment } = storeToRefs(threadStore)

useHead(() => ({
  htmlAttrs: {
    lang: "en",
    dir: "auto",
    "data-accent": account.value?.color ?? "diminuendo",
    "data-theme": settings.value?.theme ?? preferredColorScheme.value ?? "light"
  },
  bodyAttrs: {
    class: "group/body"
  }
}))

const route = useRoute()
useSeoMeta({
  title: () => String(route.meta.title || route.name)
})

const settingsOpen = shallowRef<boolean>(false)
const app = useAppProvider()
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
      <LazyReportDialog
        v-if="account && reportComment"
        :comment="reportComment" />
    </div>
  </UApp>
</template>
