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
    as()?.settings?.theme ?? 'daylight'
  )
  ix().loadPatch()
})
</script>

<template>
  <ToastProvider
    :duration="8000"
    as-child>
    <TooltipProvider as-child>
      <DefaultLayout>
        <NuxtPage />
      </DefaultLayout>
    </TooltipProvider>
  </ToastProvider>
</template>
