<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const { data: d } = props.objectData
const data = computed(() => d.value as Spell)

const stats = computed(() =>
  [
    {
      label: "Charges",
      icon:
        data.value?.charges &&
        data.value?.charges > 0 &&
        data.value?.charges < 5
          ? `i-stat-charge-${data.value.charges}`
          : "",
      value: data?.value.charges,
      class: "size-5.5 **:stroke-[6%]!",
    },
    {
      label: "Recharge time",
      icon: "i-lucide-plug-2", //
      value: data?.value.recharge,
      class: "size-4.5 **:stroke-[8%]!",
    },
    {
      label: "Cooldown",
      icon: "i-stat-abilityHaste",
      value: data?.value.cd,
      class: "size-3.5 **:stroke-[1%]!",
    },
    {
      label: "Range",
      icon: "i-stat-attackRange",
      value: data?.value.range,
      class: "size-3.75  **:stroke-[1%]!",
    },
  ].filter((s) => s.value)
)
</script>

<template>
  <InfoCardWrapper :object-data="props.objectData">
    <Separator color="neutral" />
    <div class="w-full p-2 text-sm text-pretty whitespace-pre-line">
      {{ data?.description }}
    </div>

    <template #footer>
      <div class="flex size-full items-center justify-between px-1 text-sm">
        <GlassTooltip
          v-for="stat in stats"
          :key="stat.label"
          :text="stat.label"
          :content="{ side: 'bottom', sideOffset: 10 }">
          <div
            class="inline-flex h-full items-center gap-1 rounded-xl px-2 align-baseline font-mono hover:bg-n2 hover:inset-ring hover:inset-ring-n3">
            <Icon :name="stat.icon" :class="cn('inline text-nc', stat.class)" />
            <span>{{ stat.value }}</span>
          </div>
        </GlassTooltip>
      </div>
    </template>
  </InfoCardWrapper>
</template>
