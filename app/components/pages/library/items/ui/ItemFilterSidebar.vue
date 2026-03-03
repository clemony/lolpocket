<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const { nav } = defineProps<{
  nav: ButtonProps[]
}>()
const emit = defineEmits(["updateTab"])
const { filters } = storeToRefs(is())
const collapsed = useState<boolean>("collapsed-state", () => false)
</script>

<template>
  <div class="mt-0.5 grid auto-rows-max items-center gap-6">
    <div class="w-full">
      <h6 class="mb-3">Resources</h6>
      <div class="grid w-full grid-cols-3 gap-2">
        <UButton
          v-for="(link, i) in nav"
          :key="i"
          variant="outline"
          :label="link.label"
          :icon="link.icon"
          :to="link.to"
          :ui="{
            leadingIcon: cn(
              'size-5',
              link.label?.toLowerCase() === 'spells'
                ? '**:stroke-[1.8] opacity-90 scale-94'
                : '',
              link?.ui?.leadingIcon,
            ),
            base: 'flex h-21! w-full flex-col items-center justify-center',
            label: 'grow-0 font-semibold',
          }" />
      </div>
    </div>

    <!-- search -->
    <ItemSearchInput class="-mt-1" />

    <!-- view -->
    <ItemViewTabs @update:tab-model="(e) => emit('updateTab', e)" />

    <!-- select menus -->
    <ItemSelectPoppables />

    <!-- map -->
    <MapSelector />

    <!-- shop -->

    <USwitch
      v-if="!collapsed"
      v-model:model-value="filters.purchasable"
      :ui="{ label: 'font-medium', root: 'gap-2 px-1' }"
      :label="filters.purchasable ? 'Purchasable' : 'All Items'" />

    <!-- reset -->
    <UButton
      color="neutral"
      icon="i-reset"
      block
      :ui="{
        label: 'grow-0 font-semibold',
        base: 'justify-between! bg-neutral/96 px-4',
      }"
      label="Reset Filter"
      @click="is().clearFilters()" />
  </div>
</template>
