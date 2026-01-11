<script lang="ts" setup>
import '@css/colors.css'

const { stats } = defineProps<{
  stats: Record<string, number>
}>()
</script>

<template>
  <div class="grid w-full items-center gap-y-0.25 pr-2">
    <div
      v-for="[k, v] in Object.entries(stats)"
      :key="k"
      :data-color="k"
      class="flex w-full items-center pl-1 **:text-2 **:font-medium">
      <span class="w-14">
        {{ `${v}${statIndex[k]?.unit ?? ""}` }}
      </span>
      <span class="grow">
        {{ statIndex[k].name }}
      </span>

      <span class="relative h-px w-4 place-items-center *:absolute">
        <Icon
          :name="`stat:${k}`"
          class="size-3.5! self-center" />
      </span>
    </div>
  </div>
</template>
