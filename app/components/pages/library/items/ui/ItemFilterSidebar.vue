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
</script>

<template>
  <div class="flex flex-col gap-8">
    <LibraryItemViewTabs @update-tab="(e) => emit('updateTab', e)" />
    <div class="floating-label w-full">
      <span class="text-lg!">Search items...</span>
      <UInput
        v-model:model-value="filters.query"
        icon="i-search"
        floating
        class="w-full -translate-y-1"
        placeholder="Search items...">
        <template #trailing>
          <InputClear v-if="filters.query" @clear-input="filters.query = ''" />
          <span v-else />
        </template>
      </UInput>
    </div>
    <!-- stats -->

    <UCollapsible
      :ui="{
        root: 'w-full',
        content: 'px-1.5  max-h-90',
      }"
      :default-open="true">
      <UButton
        size="lg"
        label="Statistics"
        variant="link"
        :ui="{ base: 'group w-full justify-between' }">
        <template #trailing>
          <PlusMinusExpand />
        </template>
      </UButton>
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
    </UCollapsible>

    <!-- categories -->
    <UCollapsible
      :ui="{
        root: 'w-full',
        content: 'px-1.5  max-h-90',
      }"
      :default-open="true">
      <UButton
        label="Categories"
        variant="link"
        size="lg"
        class="group w-full justify-between">
        <template #trailing>
          <PlusMinusExpand />
        </template>
      </UButton>
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
    </UCollapsible>

    <!-- shop -->

    <USwitch
      v-model:model-value="filters.purchasable"
      size="sm"
      as="label"
      :label="filters.purchasable ? 'Purchasable' : 'All Items'" />

    <!-- map -->
    <UFormField label="Map" class="w-full">
      <USelect
        v-model:model-value="filters.map"
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

    <UButton
      color="neutral"
      icon="reset"
      label="Reset Filter"
      @click="is().clearFilters()" />
  </div>
</template>
