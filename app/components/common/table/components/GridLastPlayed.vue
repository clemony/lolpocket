<script setup lang="ts">
import { fromAbsolute, getLocalTimeZone } from '@internationalized/date';

const { params } = defineProps<{
  params: any
}>()

const patch = computed (() => getPatchForDate(fromAbsolute(params.data.lastPlayed, getLocalTimeZone())))
</script>

<template>
  <div
    v-if="params.data.lastPlayed"
    v-tooltip="`${useDateFormat(params.data.lastPlayed, 'h:mm a').value}
    Patch ${patch} ${patchIndex[0].match(patch) ? ' 🟢' : patchIndex[1].match(patch) ? ' 🟡' : patchIndex[2] === patch ? ' 🟠' : ' 🔴'}
    `"
    class="grid size-full grid-cols-[1fr_20px] items-center justify-end justify-items-end py-2 text-end text-sm!">
    {{ useDateFormat(params.data.lastPlayed, "M/DD/YY").value }}
    <Icon
      name="lucide:calendar"
      class="col-start-2 -mt-0.25 size-3.5 opacity-60 **:stroke-[2.8]" />
  </div>
</template>
