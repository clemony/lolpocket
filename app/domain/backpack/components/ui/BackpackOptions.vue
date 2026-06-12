<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, ListboxItem } from "@nuxt/ui"
import { useTableInject } from "~/composables/ui/useTableProvider"

const { columnVisibility, tableApi } = useTableInject()
const columnsVisible = computed<ListboxItem[] | undefined>(() =>
  tableApi.value
    ?.getAllColumns()
    .filter((c) => c.getIsPinned() === false)
    .map((c) => ({
      id: c.id,
      checked: c.getIsVisible(),
      onSelect(e: Event) {
        e.preventDefault()
        c.toggleVisibility()
      },
      slot: "check",
      indicator: {
        size: "sm",
        color: "neutral",
        class: "rounded-full! overflow-hidden"
      },
      label: capitalize(c.id)
    }))
    .filter(Boolean)
)

const options = computed(() => {
  return [
    {
      label: "Density",
      type: "label"
    },
    {
      label: "Compact",
      id: "compact",
      icon: "",
      slot: "check"
    },
    {
      label: "Cozy",
      id: "cozy",
      icon: "",
      slot: "check"
    },
    {
      label: "Table",
      type: "label"
    },
    {
      type: "separator"
    },
    {
      label: "Columns",
      icon: "i-lucide-columns",
      type: "label"
    },
    ...(columnsVisible.value ?? [])
  ].filter(Boolean)
})

const collapseTrigger: ButtonProps = {
  variant: "link",
  block: true,
  trailingIcon: "i-up",
  ui: {
    base: "px-2.5",
    label: "text-sm font-semibold ",
    trailingIcon:
      "data-[state=open]/collapse:-rotate-180 trasition-rotate size-4 duration-200 ease-spring-soft"
  }
}
</script>

<template>
  <UPopover
    component="dropdown"
    :content="{
      align: 'end',
      onCloseAutoFocus: (event: Event) => event.preventDefault()
    }"
    :ui="{ content: 'min-w-64' }"
    :items="options">
    <Tooltip label="Backpack Options">
      <UButton
        icon="i-gear"
        variant="ghost"
        :ui="{
          base: 'h-9 max-h-9 rounded-xl',
          leadingIcon: 'rotate-90 **:stroke-[2]'
        }" />
    </Tooltip>

    <template #content>
      <UCollapsible :ui="{ content: 'p-2' }">
        <UButton v-bind="collapseTrigger" label="Gallery" />
      </UCollapsible>
      <UCollapsible>
        <UButton v-bind="collapseTrigger" label="Table" />
        <template #content>
          <UListbox :items="columnsVisible" class="flex flex-col gap-1">
            <template #item-trailing="{ item }">
              <Checkbox v-model="item.checked" v-bind="item.indicator" />
            </template>
          </UListbox>
        </template>
      </UCollapsible>
    </template>
  </UPopover>
</template>
