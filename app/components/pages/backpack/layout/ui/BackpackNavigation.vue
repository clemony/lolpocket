<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const { collapse = false } = defineProps<{
  collapse?: boolean
}>()
const route = useRoute()

const modelValue = shallowRef<string>(route.path)

const items = computed(() =>
  Object.values(defaultPocketFolders).map((p) => ({
    ...p,
    icon: iconSets[p.iconKey]?.icon,
    class: iconSets[p.iconKey]?.ui?.open
  }))
)
</script>

<template>
  <UTabs
    v-model:model-value="modelValue"
    :items
    color="neutral"
    value-key="to"
    size="sm"
    :ui="{
      root: 'h-11! w-full',
      list: 'h-11 shrink-0 rounded-2xl inset-shadow-xs inset-ring-p4/30',
      label: 'hidden',
      indicator: 'h-8.5 rounded-xl',
      leadingIcon: 'size-3.5 **:stroke-[2.4]'
    }"
    @update:model-value="navigateTo(modelValue)">
    <template #leading="{ item }">
      <UTooltip
        :text="`View: ${item.label}`"
        as="div"
        :ui="{ content: 'capitalize' }"
        :content="{ side: 'bottom' }">
        <div class="absolute inset-0 grid size-full place-items-center">
          <Icon
            :name="String(item.icon)"
            :class="cn('size-4.5!', item.class)" />
        </div>
      </UTooltip>
    </template>
  </UTabs>
</template>
