<script lang="ts" setup>
const emit = defineEmits(["updateTab"])
const router = useRouter()
const routes = computed(() =>
  router
    .getRoutes()
    .find((r) => r.path === "/library")
    ?.children.map((r) => ({
      label: String(r?.meta?.title),
      icon: r?.meta?.icon,
      to: r?.path,
    }))
)

const maps = computed(() =>
  mapIndex.filter((m) => [11, 12, 30, 35].includes(m.id))
)

const { filters } = storeToRefs(is())

const collapsed = useState<boolean>("collapsed-state")

const closed = computed(() => {
  if (!collapsed.value) return false
  return collapsed.value
})
</script>

<template>
  <div
    :class="
      cn('flex flex-col items-center justify-start gap-6', {
        'gap-3': collapsed,
      })
    ">
    <UModal v-if="collapsed">
      <Tooltip side="right">
        <UButton
          variant="ghost"
          square
          icon="i-search"
          :ui="{ leadingIcon: 'scale-110' }" />
        <template #content>
          Search...
          <UKbd
            v-for="k in ['meta', 'shift', 'S']"
            :key="k"
            size="sm"
            color="neutral"
            variant="outline"
            :value="k"
            square />
        </template>
      </Tooltip>
    </UModal>
    <div v-else class="floating-label w-full">
      <span class="text-lg!">Search items...</span>
      <UInput
        v-model:model-value="filters.query"
        icon="i-search"
        floating
        :ui="{
          root: 'w-full max-w-[88%] -translate-y-1',
          leadingIcon: '**:stroke-[1.8]',
        }"
        placeholder="Search items...">
        <template #trailing>
          <InputClear v-if="filters.query" @clear-input="filters.query = ''" />
          <span v-else />
        </template>
      </UInput>
    </div>
    <!-- stats -->

    <SidebarPoppableCollapse label="Statistics" :closed icon="i-bar-chart">
      <template #content>
        <UCheckboxGroup
          v-model:model-value="filters.stats"
          :multiple="true"
          :ui="{ item: 'py-1' }"
          label-key="name"
          value-key="id"
          :items="
            Object.values(statIndex).filter((s) => s.group !== 'champion')
          "
          @entry-focus.prevent />
      </template>
    </SidebarPoppableCollapse>

    <!-- categories -->
    <SidebarPoppableCollapse label="Categories" :closed icon="i-tag">
      <template #content>
        <UCheckboxGroup
          v-model:model-value="filters.tags"
          :multiple="true"
          :ui="{ item: 'py-1' }"
          label-key="name"
          icon="i-check"
          value-key="id"
          :items="itemTags"
          @entry-focus.prevent />
      </template>
    </SidebarPoppableCollapse>

    <!-- shop -->

    <Tooltip :disabled="!collapsed" text="Purchasable in shop" side="right">
      <USwitch
        v-model:model-value="filters.purchasable"
        size="lg"
        :ui="
          collapsed
            ? {
                root: '-rotate-90',
                label: 'hidden',
              }
            : {}
        "
        :label="filters.purchasable ? 'Purchasable' : 'All Items'" />
    </Tooltip>

    <!-- map -->
    <UFormField
      label="Map"
      class="w-full"
      :ui="{ label: collapsed ? 'hidden' : '' }">
      <USelect
        v-model:model-value="filters.map"
        :content="
          collapsed
            ? {
                position: 'popper',
                side: 'right',
                align: 'start',
              }
            : {}
        "
        :ui="
          collapsed
            ? {
                base: 'aspect-square w-10! before:hidden max-w-10 overflow-hidden',
                leading: 'max-w-10',
                content: 'min-w-54 w-54',
                label: 'hidden',
                trailing: 'hidden',
                placeholder: 'hidden',
                value: 'hidden',
              }
            : {}
        "
        :icon="`i-map-${filters.map}`"
        :items="maps"
        class="w-full"
        placeholder="All"
        label-key="name"
        value-key="id">
        <template #item-leading="{ item }">
          <Icon :name="`i-map-${item.id}`" class="" />
        </template>
      </USelect>
    </UFormField>

    <Tooltip :disabled="!collapsed" text="Reset Filter" side="right">
      <UButton
        color="neutral"
        icon="reset"
        :ui="{
          base: collapsed ? '' : 'w-full grow',
          label: collapsed ? 'hidden' : '',
        }"
        :block="!collapsed"
        :square="collapsed === true"
        label="Reset Filter"
        @click="is().clearFilters()" />
    </Tooltip>
  </div>
</template>
