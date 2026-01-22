<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      href: 'img/favicon.png',
      rel: 'icon',
      type: 'image/png',
    },
  ],
})

onMounted(() => {
  document.documentElement.setAttribute(
    'data-theme',
    as()?.settings?.theme ?? 'daylight',
  )
  ix().loadPatch()
})

</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
      <LazyAppCommand />

      <LazyReportDialog
        v-if="as().user && as().account"
        :comment="ts().reportComment" />
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
    </NuxtLayout>
  </UApp>
</template>
