<script lang="ts" setup>
import { Virtualizer } from 'virtua/vue'

const emit = defineEmits(['scroll-top'])

const { filteredMatches, loading, loadOlder, matches, summoner }
  = useSummonerInject()
const scrollRef = useState<HTMLElement>('scrollRef')
const hasMatches = computed(() => filteredMatches?.value?.length > 0)
</script>

<template>
  <div class="flex min-w-220 grow flex-col overflow-visible py-24">
    <!-- loading skeleton -->
    <div
      v-if="loading "
      class="flex flex-col gap-8">
      <Skeleton
        v-for="i in 12"
        :key="i"
        class="field-box h-40 w-full max-w-220" />
    </div>

    <!-- empty state -->
    <div
      v-else-if="!hasMatches"
      class="grid h-64 w-220 place-items-center font-medium">
      No filtered matches found with these filters.
    </div>

    <!-- virtualized rows -->
    <Virtualizer
      v-else
      ref="virtuaRef"
      v-slot="{ item }"
      :scroll-ref="scrollRef"
      :data="filteredMatches"
      :item-size="118"
      :start-margin="220"
      :shift="true"
      :buffer-size="2000">
      <MatchCard
        :key="item.id"
        :match="item"
        :puuid="summoner?.puuid" />
    </Virtualizer>

    <div
      v-if="matches?.length"
      class="grid h-32 w-220 place-items-center">
      <Button
        variant="ghost"
        class="group/c"
        @click="loadOlder()">
        <div class="grid size-5 place-items-center *:absolute">
          <Icon
            v-if="loading"
            name="lp-ui:rain"
            class="translate-y-px" />
          <template v-else>
            <Icon
              name="bi:cloud-download"
              class="translate-y-0.75 opacity-0 transition-all duration-200 group-hover/c:opacity-100" />
            <Icon
              name="bi:cloud-arrow-down"
              class="transition-all duration-200 group-hover/c:opacity-0" />
          </template>
        </div>
        load older matches
      </Button>
    </div>
  </div>
</template>