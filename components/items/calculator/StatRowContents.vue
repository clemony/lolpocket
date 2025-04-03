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

const compare = computed (() => {
  if (statValue.value == 0 && statValue2.value == 0 && statValue2.value != undefined)
    return
  return statValue.value == statValue2.value ? 0 : statValue.value > statValue2.value ? 1 : 2
})

const amount = computed (() => {
  return compare.value == 1 ? statValue.value - statValue2.value : statValue2.value - statValue.value
})
</script>

<template>
  <th class="overflow-hidden   pr-12 justify-self-end flex">
    <component :is="`i-stats-${stat.icon}`" filled class="size-4.5  shrink-0 dst opacity-70 text-bc" :class="{ 'size-5': stat.icon == 'mana-regen' || stat.icon == 'hp' || stat.icon == 'gold' }" />
  </th>
  <td class="uppercase !text-1 font-medium dst select-none">
    {{ stat.displayName }}
  </td>
  <td class="font-mono dst select-none">
    <span class=" flex items-center gap-2"><!--
  <icon name="bi:caret-up-fill" class="text-resolve stroke-3 opacity-0 size-0" :class="{'opacity-100 size-3.5': compare == 1}" /> -->
      {{ statValue > 0 ? statValue : '' }}

      <span v-if="ans.isComparing && compare == 1 && statValue2 != 0" class="text-1 text-resolve">+{{ amount }}</span>
    </span>
  </td>

  <td v-if="ans.isComparing" class="font-mono dst select-none">
    <span class=" flex items-center gap-2">
      {{ statValue2 > 0 ? statValue2 : '' }}
      <!--  <icon name="rivet-icons:arrow-up" class="text-resolve stroke-3 opacity-0 size-0" :class="{'opacity-100 size-3': compare == 2}" /> -->
      <span v-if="ans.isComparing && compare == 2 && statValue != 0" class="text-1 text-resolve">+{{ amount }}</span>
    </span>
  </td>

  <td class=" justify-items-center items-center">
    <label>
      <!-- <label class="swap group swap-rotate" @click.stop> -->
      <slot />
    <!--   <icon name="pin" class="group-hover:opacity-100  swap-off size-5 shrink-0 opacity-60 dst" />
      <icon name="iconoir:pin-solid" class="swap-on dst size-5 shrink-0" /> -->
    </label>
  </td>
</template>