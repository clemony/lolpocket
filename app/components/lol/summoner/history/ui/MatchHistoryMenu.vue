<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}>()

const emit = defineEmits(["open"])

const store = useMatchFilters()

const open = shallowRef<boolean>(true)
const asideRef = useTemplateRef<HTMLElement>("asideRef")
</script>

<template>
  <div
    ref="asideRef"
    :class="
      cn(
        'z-2 flex h-20 w-full max-w-110 flex-nowrap items-center gap-3 overflow-hidden bg-p0/94 px-1 backdrop-blur-md transition-all duration-300'
      )
    ">
    <Toggle
      v-model:model-value="open"
      class="bg-transparent! fx-0 hover:fx-1 on:bg-transparent!"
      on="inset"
      hover="inset"
      square
      size="lg"
      variant="ghost"
      @update:model-value="emit('open', open)">
      <Icon class="" :name="open ? 'left-to-line' : 'right-to-line'" />
    </Toggle>

    <UPopover>
      <UButton
        class="bg-transparent! fx-0 hover:fx-1 aria-expanded:btn-active on:bg-transparent!"
        variant="ghost"
        on="inset"
        hover="inset"
        square
        size="lg">
        <Icon class="" name="ic:baseline-menu" />
      </UButton>
      <template #content>
        <AdvancedMatchFilters />
      </template>
    </UPopover>

    <Tooltip
      class="size-fit"
      :text="store.filterEmpty() ? 'No filters applied' : 'Clear filters'">
      <UButton
        class="bg-transparent! duration-0! disabled:pointer-events-none"
        square
        size="lg"
        hover="inset"
        :disabled="store.filterEmpty()"
        :variant="store.filterEmpty() ? 'ghost' : 'inset' as ButtonProps['variant']"
        @click="store.clearFilters()">
        <Icon
          class="in-disabled:opacity-40"
          name="ic:baseline-filter-list-off" />
      </UButton>
    </Tooltip>
    <!--     <PatchDateRange v-if="api" :api /> -->
    <!--     <UpdateSummoner
      v-if="api"
      class="bg-transparent"
      variant="ghost"
      hover="inset"
      :api
      placement="top"
      square
size="lg"
    /> -->

    <UInput
      icon="i-search"
      v-model:model-value="is().filters.query"
      class="peer"
      placeholder="Search match history...">
      <template #trailing>
        <InputClear @update:model-value="(e: string) => (store.query = e)" />
      </template>
    </UInput>
    />
  </div>
</template>
