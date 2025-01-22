<script setup lang="ts">
  import { ResizablePanel } from 'components/base/resizable/rindex'
  const ts = useTempStore()

  definePageMeta({
    path: '/pocket/:pocketKey',
  })
  const route = useRoute()
  //const pocket = ref(getPocket(props.pocketKey))
  const pocket = getPocket(route.params.pocketKey)
  console.log('💠 - pocket:', pocket)
</script>

<template>
  <main class="size-screen max-h-screen w-full">
    <LayoutSpacer class="!h-18" />
    <div class="flex gap-10">
      <PocketNav :pocket="pocket" />

      <NuxtPage
        :pocket="pocket"
        :page-key="(route) => route.fullPath" />
    </div>
  </main>
</template>

<style></style>
