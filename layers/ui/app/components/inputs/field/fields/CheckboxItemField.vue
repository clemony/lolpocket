<script setup lang="ts">
import type { ReportOption } from "~/components/user/utilities/report/reportOptions"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  items: ReportOption[]
  modelValue: string[]
}>()

const emit = defineEmits<{
  (event: "update:modelValue", value: string[]): void
}>()

const items = computed(() => props.items ?? [])
</script>

<template>
  <UCheckboxGroup
    :model-value="modelValue"
    :items="items"
    value-key="id"
    label-key="label"
    description-key="description"
    @update:model-value="emit('update:modelValue', $event as string[])">
    <template #label="{ item }">
      <Element
        class="w-full border border-transparent py-2 hover:border-p3/50! hover:bg-p2/40 hover:fx-1"
        base="btn"
        hover="outline"
        variant="ghost">
        <div class="grid h-max w-full auto-rows-max gap-1">
          <h5 class="flex w-full items-center gap-4 font-semibold text-pc">
            {{ item.label }}
          </h5>
        </div>
      </Element>
    </template>
    <template #description="{ item }">
      <ul v-if="item.id !== 'other'" class="text-balanced w-full pr-3">
        <component :is="item.component" v-if="item?.component" />
        <template v-else-if="item?.description">
          <li
            v-for="(str, ix) in item.description"
            :key="ix"
            class="text-balanced w-full pl-3 text-sm! leading-6">
            &bull;&ensp;{{ str }}
          </li>
        </template>
      </ul>
    </template>
  </UCheckboxGroup>
</template>
