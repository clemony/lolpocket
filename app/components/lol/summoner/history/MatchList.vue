<script lang="ts" setup>
import { Virtualizer } from 'virtua/vue'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['scroll-top'])

const store = useMatchFilters()
const { baseFiltered, filteredMatches } = storeToRefs(store)

const { loading, loadingOlder, loadMessage, matches } = storeToRefs(s_matches())

watch(() => baseFiltered.value, (v) => {
  console.log('💠 - watch - newVal:', v)
})
const scrollRef = useState<HTMLElement>('scrollRef')
const hasMatches = computed(() => filteredMatches.value?.length > 0)
</script>

<template>
  <div
    v-auto-animate
    :class="
      cn(
        '@container flex h-max w-full max-w-250 min-w-220 grow flex-col items-center gap-8 overflow-visible px-1 pt-2',
        className,
      )
    ">
    <LazyAlert
      v-if="loadMessage"
      class="w-full">
      <Icon
        class="translate-y-1.75 **:stroke-[2.2]"
        name="reset" />
      <AlertTitle class="flex size-full items-center justify-between">
        {{ loadMessage }}
        <Button
          variant="ghost"
          hover="btn"
          square
          size="xs"
          @click="loadMessage = ''">
          <Icon
            class="size-3.75 opacity-50 **:stroke-[2.4] group-hover/btn:opacity-100"
            name="x" />
        </Button>
      </AlertTitle>
    </LazyAlert>

    <!-- loading skeleton -->
    <div
      v-if="loading"
      class="flex w-full flex-col gap-8">
      <Skeleton
        v-for="i in 12"
        :key="i"
        class="field-box h-40 w-full min-w-full grow" />
    </div>

    <!-- empty state -->
    <div
      v-else-if="!hasMatches"
      class="grid h-64 place-items-center font-medium">
      No matches found with these filters.
    </div>

    <!-- virtualized rows -->
    <UScrollArea
      v-else
      v-slot="{ item }"
      v-auto-animate
      :items="toValue(filteredMatches)"
      :virtualize="{
        estimateSize: 108,
        gap: 12,
      }"
      :start-margin="220"
      :ui="{
        viewport: 'w-full h-max',
        root: 'w-full h-max',
      }">
      <MatchCard
        :key="item.matchId"
        :match="item" />
    </UScrollArea>

    <div
      v-if="matches?.length"
      class="grid h-32 place-items-center">
      <UButton
        class="group/c"
        variant="ghost"
        @click="s_matches().loadOlder()">
        <div class="grid size-5 place-items-center *:absolute">
          <Icon
            v-if="loading"
            class="translate-y-px"
            name="lp-ui:rain" />
          <template v-else>
            <Icon
              class="translate-y-0.75 opacity-0 transition-all duration-200 group-hover/c:opacity-100"
              name="bi:cloud-download" />
            <Icon
              class="transition-all duration-200 group-hover/c:opacity-0"
              name="bi:cloud-arrow-down" />
          </template>
        </div>
        Load More
      </UButton>
    </div>
  </div>
</template>
