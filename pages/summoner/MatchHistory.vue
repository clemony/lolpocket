<script setup lang="ts"></script>

<template>
  <main class="h-screen w-full pr-4 pl-16">
    <div class="shrink-0">
      <LayoutSpacer class="!h-26" />

      <PlayerHeader />
      <div
        class="grid h-full w-[86%] grid-cols-[1fr_1.5fr] justify-around gap-3"
      >
        <ScrollArea as-child>
          <div
            class="flex w-128 flex-col gap-10 overflow-auto overscroll-auto rounded-none px-3 pb-10"
          >
            <LayoutSpacer class="!h-5" />

              <Card class="h-51 px-4 py-3">
            <RankCard title="Solo/Duo" queue="soloDuo" />
  </Card>
              <Card class="h-51 px-4 py-3">
            <RankCard title="Flex" queue="flex" />
  </Card>
            <!--  <ChampTabs /> -->
          </div>
        </ScrollArea>

        <ScrollArea as-child>
          <div
            class="size-full justify-center overflow-auto overscroll-auto px-3"
          >
            <LayoutSpacer class="!h-15" />

            <MatchCard />
          </div>
        </ScrollArea>
      </div>
    </div>
  </main>
</template>
