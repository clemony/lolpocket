<script lang="ts" setup>
import { externalResources } from "~/domain/lp/external/externalResources"
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

const helpGroup = computed(() => [
  {
    value: "help-label",
    label: {
      name: "Help and Resources",
      description:
        "Find answers, research external data, and customize your lolpocket."
    },
    ui: descriptionLabel,
    items: pages
  },

  {
    value: "External Resources",
    label: {
      name: "External Resources",
      description: "Other great tools to fill out your backpack.",
      class: "before:hidden pb-2"
    },
    trailingIcon: "i-right",
    icon: "i-external",
    children: [
      ...externalResources.map((r) => ({
        ...r,
        value: r.label,
        target: "_blank",
        external: true,
        // onSelect: options.onNavigate,
        itemTrailingIcon: "i-external",
        slot: "link"
      }))
    ]
  }
])
</script>

<template>
  <div v-for="group in helpGroup" :key="group.value" class="">
    <UUser size="xl" v-bind="group?.label" />

    <div class="space-y-1">
      <UButton
        v-for="item in group.items"
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
            class="size-4.5 shrink-0 text-n4" />
        </template>

        <div class="min-w-0 grow">
          <p class="truncate text-sm font-medium text-pc">
            {{ item.label }}
          </p>
          <p
            v-if="item.suffix"
            class="mt-0.5 line-clamp-2 text-xs leading-5 text-n4">
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
  </div>
</template>
