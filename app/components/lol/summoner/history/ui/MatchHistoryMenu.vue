<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['open'])

const { clearFilters, filteredMatches, filterEmpty, query, summoner } = useSummonerInject()

const open = shallowRef<boolean>(true)
const asideRef = useTemplateRef<HTMLElement>('asideRef')
</script>

<template>
  <div
    ref="asideRef"
    :class="cn('z-2 flex h-20 w-full max-w-110 flex-nowrap items-center gap-3 overflow-hidden bg-b1/94 px-1 backdrop-blur-md transition-all duration-300')">
    <Toggle
      v-model:model-value="open"
      on="inset"
      hover="inset"
      size="sq-12"
      class="bg-transparent! fx-0 on:bg-transparent! hover:on:fx-1"
      variant="ghost"
      @update:model-value="emit('open', open)">
      <Icon
        :name="open ? 'left-to-line' : 'right-to-line'"
        class="" />
    </Toggle>

    <UPopover
      v-bind="tippyMenu">
      <Button
        variant="ghost"
        on="inset"
        hover="inset"
        size="sq-12"
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
    </UPopover>

    <Tooltip
      class="size-fit"
      :text="filterEmpty() ? 'No filters applied' : 'Clear filters'">
      <Button
        size="sq-12"
        hover="inset"
        :disabled="filterEmpty()"
        class="bg-transparent! duration-0! disabled:pointer-events-none"
        :variant="filterEmpty() ? 'ghost' : 'inset'"
        @click="clearFilters()">
        <Icon
          name="ic:baseline-filter-list-off"
          class="in-disabled:opacity-40" />
      </Button>
    </Tooltip>
    <PatchDateRange :aside-ref />
    <UpdateSummoner
      variant="ghost"
      hover="inset"
      class="bg-transparent"
      placement="top"
      size="sq-12" />

    <InputGroup
      class="h-12 max-h-12 grow transition-all duration-300"
      size="12">
      <InputGroupSearch class="[&_svg]:size-5" />
      <InputGroupInput
        input-class="placeholder:opacity-0! focus:placeholder:opacity-100!"
        placeholder="Search match history..."
        @update:model-value="e => query = e" />
      <InputGroupClear />
    </InputGroup>
  </div>
</template>