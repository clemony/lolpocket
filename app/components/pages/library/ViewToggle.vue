<script lang="ts" setup>
import type { TabValue } from "~/components/pages/library/viewMode"
import { tabData } from "~/components/pages/library/viewMode"
const { variant } = defineProps<{
  variant?: "default" | "label"
}>()
const emit = defineEmits(["update:tab"])

const tab = defineModel<TabValue>("tabModel", { default: 0 })

const tabToggle = shallowRef<boolean>(false)
watch(
  () => tabToggle.value,
  (v) => {
    console.log("🥸 - v:", v)
    if (v === true) tab.value = 1
    else tab.value = 0
    console.log("🥸 - tab.value:", tab.value)

    emit("update:tab", tab.value)
  }
)
</script>

<template>
  <template v-if="variant === 'label'">
    <UTabs
      v-model:model-value="tab"
      :items="Object.values(tabData)"
      variant="outline"
      size="sm"
      color="neutral"
      :ui="{
        root: 'inline w-max p-0! align-middle',
        list: 'noise relative grid h-9 w-54 auto-cols-fr grid-flow-col gap-0 rounded-2xl bg-p1/90 px-1 py-1.5 inset-shadow-xs',
        trigger: 'group/tab relative size-full self-center px-3 active:text-nc',
        indicator: 'rounded-lg shadow-sm! ring-n3 drop-shadow-none!'
      }"
      @update:model-value="(e) => (tab = e as TabValue)">
      <!--   <template #leading="{ item }">
        <div class="relative size-3">
          <Tooltip
            :label="item.label"
            class="absolute grid size-full place-items-center">
            <Icon
              :name="item.icon"
              class="size-3.5 **:stroke-[2.1] group-not-active/tab:opacity-60" />
          </Tooltip>
        </div>
      </template> -->
    </UTabs>
  </template>

  <!--   <LazyUTabs
    v-else
    v-model:model-value="tab"
    size="xl"
    orientation="vertical"
    :items="Object.values(tabData)"
    :ui="{
      root: 'inline w-fit! grow-0 align-middle',
      list: 'w-fit gap-2 rounded-full p-0',
      trigger: 'pointer-events-auto size-14 self-center p-0',
      indicator: 'size-14! rounded-full ring-0',
      label: 'hidden'
    }"
    @update:model-value="(e: TabValue) => (tab = e)">
    <template #leading="{ item }">
      <span
        :data-tip="item.label"
        class="tooltip pointer-events-auto relative tooltip-left grid size-14 place-items-center before:-translate-x-3">
        <Icon :name="item.icon" class="absolute size-5 **:stroke-[2.2]" />
      </span>
    </template>
  </LazyUTabs>-->

  <div
    v-else
    :data-tip="tabData[tab]?.label"
    class="tooltip pointer-events-auto tooltip-left">
    <Toggle
      v-model:model-value="tabToggle"
      square
      color="p0"
      active-color="p2"
      :ui="{
        base: 'rounded-full'
      }"
      size="xl"
      :icon="tabData[tab]?.icon" />
  </div>
</template>
