<script lang="ts" setup>
const { stats } = defineProps<{
  stats: AggregatedStats
}>()
</script>

<template>
  h
  <!--   <Tabs default-value="radial">
      <TabsList
        contrast
        size="6"
        class="w-20 gap-2 justify-self-end px-0.5!">
        <TabsTrigger
          value="radial"
          class="grid size-full place-items-center">
          <Icon
            name="lucide:pie-chart"
            class="size-4" />
        </TabsTrigger>
        <TabsTrigger
          value="list"
          class="grid size-full place-items-center">
          <Icon
            name="lucide:list"
            class="size-4" />
        </TabsTrigger>
        <TabIndicator indicator-class="rounded-md! h-5! -translate-y-0.75!" />
      </TabsList>
      <TabsContent value="radial"> -->
  <!--       </TabsContent>
      <TabsContent
        class="grid h-full auto-rows-fr"
        value="list">
        <div
          v-for="r in ['top', 'jungle', 'middle', 'bottom', 'support']"
          :key="r"
          :data-tip="`${r}
            ${stats?.role[r]?.games ?? 0} games`"
          class="group/bar flex size-full items-center gap-3">
          <Icons
            size="sq-4"
            :name="`role:${r}`"
            :color="stats?.role[r]?.games ? `var(--color-${r})` : 'var(--color-b3)'"
            class="size-6 self-center dst" />
          <Progress
            class="h-3 transition-all duration-200 group-hover/bar:ring group-hover/bar:ring-bc/20"
            :color="`var(--color-${r})`"
            :model-value="stats?.role[r]?.winrate || 0" />
          <div :class="cn('w-10 overflow-hidden text-end text-0!', { 'text-bc/50': !stats?.role[r]?.games })">
            {{ stats?.role[r]?.games ?? 0 }}
          </div>
        </div>
      </TabsContent>
    </Tabs> -->
</template>