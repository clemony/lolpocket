<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['open'])

const { clearFilters, filteredMatches, filterEmpty, query, summoner } = useSummonerInject()

const open = shallowRef<boolean>(true)
</script>

<template>
  <div
    :class="cn('sticky -top-56 z-2 flex h-20 w-full max-w-384 flex-nowrap items-center justify-between gap-4 bg-b1/94 px-1 backdrop-blur-md transition-all duration-300', { 'max-w-260': !open })">
    <menu class="flex gap-3">
      <Toggle
        v-model:model-value="open"
        on="inset"
        hover="inset"
        size="sq-10"
        class="bg-transparent! fx-0 on:bg-transparent! hover:on:fx-1"
        variant="ghost"
        @update:model-value="emit('open', open)">
        <Icon
          :name="open ? 'left-to-line' : 'right-to-line'"
          class="" />
      </Toggle>

      <tippy
        v-bind="tippyMenu">
        <Button
          variant="ghost"
          on="inset"
          hover="inset"
          size="sq-10"
          class="bg-transparent! fx-0 aria-expanded:btn-active on:bg-transparent! hover:on:fx-1">
          <!--      <Icon
            name="ic:baseline-filter-list"
            class="" /> -->
          <Icon
            name="ic:baseline-menu"
            class="" />
        </Button>
        <template #content>
          <AdvancedMatchFilters />
        </template>
      </tippy>

      <span
        class="size-fit"
        :data-tip="filterEmpty() ? 'No filters applied' : 'Clear filters'">
        <Button
          size="sq-10"
          hover="inset"
          :disabled="filterEmpty()"
          class="bg-transparent! duration-0! disabled:pointer-events-none"
          :variant="filterEmpty() ? 'ghost' : 'inset'"
          @click="clearFilters()">
          <Icon
            name="ic:baseline-filter-list-off"
            class="in-disabled:opacity-40" />
        </Button>
      </span>
      <PatchDateRange />
      <UpdateSummoner
        variant="ghost"
        hover="inset"
        class="bg-transparent"
        placement="top"
        size="sq-10" />
    </menu>

    <InputGroup
      class="max-w-258 grow transition-all duration-300"
      size="10">
      <InputGroupSearch />
      <InputGroupInput @update:model-value="e => query = e" />
      <InputGroupClear />
    </InputGroup>
  </div>
</template>