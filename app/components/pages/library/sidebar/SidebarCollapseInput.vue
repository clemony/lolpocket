<script lang="ts" setup>
const { store } = defineProps<{
  source?: Index[]
  store: ReturnType<typeof is | typeof champFilter>
}>()

const { filters } = storeToRefs(store)
</script>

<template>
  <UInput
    v-model:model-value="filters.query"
    icon="i-search"
    floating
    variant="solid"
    color="neutral"
    :ui="{
      root: 'w-full  grow',
      base: 'text-sm  grow w-full',
      leadingIcon: '**:stroke-[1.8]',
      trailing: '',
    }"
    placeholder="Search items...">
    <template #trailing>
      <InputClear
        v-if="filters.query"
        variant="solid"
        color="p0"
        class="mr-2"
        @clear-input="filters.query = ''" />
      <UKbd
        v-for="k in ['meta', 'shift', 'K']"
        v-else
        :key="k"
        square
        color="neutral"
        variant="ghost"
        size="sm"
        :value="k" />
    </template>
  </UInput>
</template>
