<script lang="ts" setup>
definePageMeta({
  title: 'research',
  path: '/research/champions',
  section: 'nexus',
})

const ans = useAnalysisStore()
</script>

<template>
  <div class="flex flex-col gap-8 size-full min-w-110 max-w-230 pb-10">
    <div class="min-h-130 h-130">
      <ResearchChampionChart :patch-games="ans.patchGames" />
    </div>
    <div class="grid grid-cols-[100px_1fr] size-full gap-8">
      <PocketPickChampion :patch-games="ans.patchGames" />
      <div class="relative size-full grid place-items-center pb-10">
        <div class="absolute inset-0 top-0 left-0 overflow-auto">
          <!-- list here -->
        </div>
      </div>
    </div>
  </div>

  <ResizablePanelGroup direction="vertical" as="div" class="size-full">
    <ResizablePanel>
      <ResearchChampionChart :patch-games="ans.patchGames" />
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel>
          <ResearchItemList />
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
