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

const scrollRef = useState<HTMLElement | null>('scrollRef', () => null)
</script>

<template>
  <UApp
    id="app"

    ref="scrollRef"
    :style="{ overflowAnchor: 'none' }"
    :ui="{ base: ' bg-b1!' }"
    :toaster="{
      position: 'top-right',
      class: 'translate-y-15 ',
    }"
  >
    <NuxtPage />
    <LazyAppCommand />

    <LazyReportDialog
      v-if="as().user && as().account"
      :comment="ts().reportComment"
    />
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
          "
    />
  </UApp>
</template>
