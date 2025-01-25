<script setup lang="ts">
import { ResizablePanel } from 'components/base/resizable/rindex';

const ts = useTempStore()

const route = useRoute()
// const pocket = ref(getPocket(props.pocketKey))
const pocket = ref(getPocket(route.params.pocketKey))
console.log('💠 - pocket:', pocket)
</script>

<template>
  <main class="h-screen w-full">
    <ResizablePanelGroup
      direction="horizontal"
      class="size-full"
    >
      <ResizablePanel :default-size="20" :max-size="30">
        <PocketNav :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        class=""
      />
      <ResizablePanel>
        <NuxtPage
          :pocket="pocket"
          :page-key="(route) => route.fullPath"
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  </main>
</template>

<style></style>
