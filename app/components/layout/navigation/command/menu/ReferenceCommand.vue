<script lang="ts" setup>
import { referenceItems } from "../build/lolCommands"
import { descriptionLabel } from "../build/styles"
import type { AppCommandInject, CommandItem } from "../build/useCommandGroups"
import {
  getItems,
  getLead,
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

const route = useRoute()

const libraryPath = /\/library/
const libraryGroup = computed(() => ({
  id: "library",
  value: "library-command",
  label: {
    name: "Library",
    description:
      "Browse and filter full category lists. The complete information source."
  },
  items: [
    ...Object.values(
      pages
        ?.find((r) => r.value === "/library")
        ?.children?.map((r) => {
          return {
            ...r,
            trailingIcon: "i-link",
            size: "custom",
            icon: libraryPath.test(route.path)
              ? route.path === r.to
                ? r.iconFill || r.icon
                : r.icon
              : r.iconFill || r.icon,
            ui: {
              base: cn(
                "noise relative flex size-full h-16 max-h-16 w-32 items-end justify-start gap-0! overflow-hidden p-1! even:ml-1",
                (libraryPath.test(route.path) && route.path === r.to) ||
                  !libraryPath.test(route.path)
                  ? "bg-neutral text-nc shadow-sm drop-shadow-sm **:text-nc! hover:bg-neutral/80"
                  : "bg-p2 text-pc! inset-ring inset-ring-p3/80 **:text-pc hover:bg-p3"
              ),
              label:
                "px-0 pb-0.25 text-xl font-bold size-full flex items-end leading-none",
              trailingIcon: "absolute top-1.5 right-1 size-4! opacity-0 ",
              leadingIcon: cn(
                "absolute top-2 left-2 size-4!",
                r?.ui?.itemLeadingIcon,
                (libraryPath.test(route.path) && route.path === r.to) ||
                  !libraryPath.test(route.path)
                  ? "text-nc! **:text-nc"
                  : ""
              )
            }
          }
        })
        .sort(
          (a, b) => Number(a?.order ?? 0) - Number(b?.order ?? 0)
        ) as CommandItem[]
    )
  ]
}))

const referenceGroup = computed(() => ({
  id: "reference",
  value: "reference-label",
  items: referenceItems
}))
</script>

<template>
  <div class="grid grid-cols-[0.95fr_1.05fr] gap-4 p-3">
    <div>
      <UUser size="xl" class="mb-3" v-bind="libraryGroup?.label" />

      <div class="grid grid-cols-2 gap-2">
        <UButton
          v-for="item in libraryGroup.items"
          :key="itemKey(item)"
          data-command-menu-item="true"
          v-bind="item"
          @click="emit('update:open', item)">
        </UButton>
      </div>
    </div>
    <div>
      <UUser
        size="xl"
        :label="{
          name: 'Reference',
          description:
            'Fast & detailed information cards direct to your navbar.'
        }" />

      <div class="space-y-1">
        <UButton
          v-for="item in referenceItems"
          :key="itemKey(item)"
          data-command-menu-item="true"
          variant="outline"
          color="neutral"
          class="flex w-full items-center justify-start rounded-xl p-3 text-left shadow-xs"
          @click="emit('update:open', item)">
          <template #leading>
            <Icon
              v-if="item.icon"
              :name="item.icon"
              :class="
                cn('size-5 shrink-0 text-pc', item.ui?.itemLeadingIcon)
              " />
          </template>

          <div class="min-w-0 grow">
            <p class="truncate text-sm font-semibold text-pc">
              {{ item.label }}
            </p>
          </div>

          <template #trailing>
            <Icon name="i-right" class="size-4 shrink-0 opacity-45" />
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>
