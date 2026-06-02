<script setup lang="ts">
import { fromAbsolute, getLocalTimeZone } from '@internationalized/date'
import { patchIndex } from "#shared/constants/patch-index"

const { params } = defineProps<{
  params: any
}>()

const patch = computed(() => {
  if (!params?.data?.lastPlayed) return null
  return getPatchForDate(fromAbsolute(params.data.lastPlayed, getLocalTimeZone()))
})
const patchBadge = computed(() => {
  if (!patch.value) return ''
  return patchIndex?.[0]?.match?.(patch.value) ? ' 🟢'
    : patchIndex?.[1]?.match?.(patch.value) ? ' 🟡'
      : patchIndex?.[2] === patch.value ? ' 🟠'
        : ' 🔴'
})
</script>

<template>
  <div
    v-if="params.data.lastPlayed"
    v-tooltip="
      `${useDateFormat(params.data.lastPlayed, 'h:mm a').value}
    Patch ${patch ?? ''}${patchBadge}
    `
    "
    class="grid size-full grid-cols-[1fr_20px] items-center justify-end justify-items-end py-2 text-end text-sm!">
    {{ useDateFormat(params.data.lastPlayed, "M/DD/YY").value }}
    <Icon
      class="col-start-2 -mt-0.25 size-3.5 opacity-60 **:stroke-[2.8]"
      name="lucide:calendar" />
  </div>
</template>
