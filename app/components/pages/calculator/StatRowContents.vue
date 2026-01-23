<script lang="ts" setup>
const props = defineProps<{
  stat: any
  itemStats?: any
  itemStats2?: any
  set?: number
}>()

const stat = ref(props.stat)

const statValue = computed(() => {
  if (!props.itemStats)
    return 0
  return props.itemStats[stat.value.id] ?? 0
})

const statValue2 = computed(() => {
  if (!props.itemStats2)
    return
  return props.itemStats2[stat.value.id] ?? 0
})

const compare = computed(() => {
  if (
    statValue.value === 0
    && statValue2.value === 0
    && statValue2.value !== undefined
  ) {
    return
  }
  return statValue.value === statValue2.value
    ? 0
    : statValue.value > statValue2.value
      ? 1
      : 2
})

const amount = computed(() => {
  return compare.value === 1
    ? statValue.value - statValue2.value
    : statValue2.value - statValue.value
})
</script>

<template>
  <div class="ability-icon col-start-1 ml-5 text-sm!">
    <component
      :is="`i-stats-${stat.icon}`"
      filled
      class="text-bc dst size-4 shrink-0 opacity-70"
      :class="{
        'size-4.5':
          stat.icon === 'mana-regen'
          || stat.icon === 'hp'
          || stat.icon === 'gold',
      }" />
  </div>

  <div class="dst col-start-2 font-medium select-none">
    {{ stat.name }}
  </div>

  <div class="dst col-start-3 text-sm select-none">
    <span class="flex items-center justify-end gap-2">
      <!--
  <icon name="bi:caret-caret-up" class="text-resolve stroke-3 opacity-0 size-0" :class="{'opacity-100 size-3.5': compare===1}" /> -->
      {{ statValue > 0 ? statValue : "" }}

      <span
        v-if="is().isComparing && compare === 1 && statValue2 !== 0"
        class="text-resolve">
        +{{ amount }}
      </span>
    </span>
  </div>

  <div
    v-if="is().isComparing"
    class="dst col-start-4 font-mono text-sm select-none">
    <span class="flex items-center justify-end gap-2">
      {{ statValue2 > 0 ? statValue2 : "" }}
      <!--  <icon name="rivet-icons:arrow-up" class="text-resolve stroke-3 opacity-0 size-0" :class="{'opacity-100 size-3': compare===2}" /> -->
      <span
        v-if="is().isComparing && compare === 2 && statValue !== 0"
        class="text-resolve">
        +{{ amount }}
      </span>
    </span>
  </div>
</template>
