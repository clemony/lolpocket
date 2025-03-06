<script lang="ts" setup>
const props = defineProps<{
  stat: any
}>()

const stat = ref(props.stat)
</script>

<template>
  <th class="overflow-hidden   pr-12 justify-self-end flex">
    <icon :name="stat.icon" class="size-5.5 shrink-0 dst opacity-80" :class="stat.iconClass ?? ''" />
  </th>
  <td class="font-mono dst select-none">
    {{ stat.displayName }}
  </td>
  <td class="font-mono dst select-none">
    Quality Control Check
  </td>

  <td class=" justify-items-center items-center">
    <label class="swap group swap-rotate">
      <slot />
      <icon name="pin" class="group-hover:opacity-100  swap-off size-5 shrink-0 opacity-60 dst" />
      <icon name="iconoir:pin-solid" class="swap-on dst size-5 shrink-0" />
    </label>
  </td>
</template>