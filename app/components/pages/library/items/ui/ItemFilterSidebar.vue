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
      <h6 class="mb-3">
        Resources
      </h6>
      <div class="grid w-full grid-cols-3 gap-2">
        <UButton
          v-for="(link, i) in nav"
          :key="i"
          variant="outline"
          :label="link.label"
          :icon="link.icon"
          :to="link.to"
          :ui="{
            leadingIcon: cn('size-5', link?.ui?.leadingIcon),
            base: 'h-21! w-full grow flex-col justify-center',
            label: 'text-xs font-semibold',
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
      :label="filters.purchasable ? 'Purchasable' : 'All Items'" />

    <!-- reset -->
    <UButton
      color="neutral"
      icon="i-reset"
      block
      label="Reset Filter"
      @click="is().clearFilters()" />
  </div>
</template>
