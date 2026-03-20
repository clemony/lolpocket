<script lang="ts" setup>
import { descriptionLabel } from "../build/styles"
import type { CommandItem } from "../build/useCommandGroups"
import {
  isActive,
  isExternal,
  itemKey,
  itemSuffix,
  itemTarget,
  itemTrailingIcon
} from "../build/useCommandGroups"

const { pages } = defineProps<{
  pages: CommandItem[]
}>()
const emit = defineEmits(["update:open"])

const homeGroup = computed(() => ({
  id: "pages",
  value: "pages-command",
  items: [
    {
      label: "Nexus",
      value: "pages-label",
      slot: "trailing",
      trailingIcon: "i-link",
      to: "/nexus",
      ui: {
        ...descriptionLabel,
        item: cn(descriptionLabel.item, "pointer-events-auto!")
      },
      suffix: "Home base for League news, pockets, personal data, and more."
    },
    ...pages?.filter(
      (r) =>
        !["/docs", "/settings", "/library", "/nexus"].includes(String(r.value))
    )
  ]
}))
</script>

<template>
  <!--   <UButton
    v-if="pageFeature"
    data-command-menu-item="true"
    :to="pageFeature.to"
    :target="itemTarget(pageFeature)"
    :external="isExternal(pageFeature) || undefined"
    variant="outline"
    color="neutral"
    class="mb-3 flex w-full items-start justify-start rounded-xl p-3 text-left shadow-xs"
    @click="openItem(pageFeature)">
    <template #leading>
      <Icon
        v-if="pageFeature.icon"
        :name="pageFeature.icon"
        class="mt-0.5 size-4.5 shrink-0 text-pc" />
    </template>

    <div class="min-w-0 grow">
      <p class="text-sm font-semibold text-pc">
        {{ pageFeature.label }}
      </p>
      <p class="mt-1 text-xs leading-5 text-n4">
        {{ itemSuffix(pageFeature) }}
      </p>
    </div>

    <template #trailing>
      <Icon
        :name="itemTrailingIcon(pageFeature)"
        class="mt-0.5 size-4 shrink-0 opacity-50" />
    </template>
  </UButton> -->

  <div class="space-y-1">
    <UButton
      v-for="item in homeGroup.items"
      :key="itemKey(item)"
      data-command-menu-item="true"
      :to="item.to"
      :target="itemTarget(item)"
      :external="isExternal(item) || undefined"
      :variant="isActive(item) ? 'outline' : 'ghost'"
      color="neutral"
      class="flex w-full items-center justify-start rounded-lg px-2.5 py-2 text-left"
      @click="emit('update:open', item)">
      <template #leading>
        <Icon
          v-if="item.icon"
          :name="item.icon"
          :class="
            cn(
              'size-4.5 shrink-0 text-n4',
              item.ui?.itemLeadingIcon,
              isActive(item) ? 'text-pc' : ''
            )
          " />
      </template>

      <div class="min-w-0 grow">
        <p class="truncate text-sm font-medium text-pc">
          {{ item.label }}
        </p>
        <p v-if="item.suffix" class="mt-0.5 line-clamp-2 text-xs text-n4">
          {{ itemSuffix(item) }}
        </p>
      </div>

      <template #trailing>
        <Icon
          :name="itemTrailingIcon(item)"
          class="size-4 shrink-0 opacity-45" />
      </template>
    </UButton>
  </div>
</template>
