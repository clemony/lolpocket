<script lang="ts" setup>
const { payload } = defineProps<{
  payload: any
}>()

const { title, data, icon, img, text } = payload
</script>

<template>
  <div class="grid h-fit min-w-30 gap-1 py-1.5 pr-4 pl-1.5">
    <div class="flex items-center gap-0.5 text-sm font-semibold">
      <Icon v-if="icon" class="size-4" :name="icon" />
      <Img
        v-else-if="img"
        class="size-6 rounded-full"
        :src="img"
        loading-type="spinner"
        :alt="`${title} icon`" />
      {{ title }}
    </div>
    <div class="grid w-full pl-6">
      <template v-for="(item, i) in data" :key="i">
        <span class="text-xs!">
          {{ item }}
        </span>
      </template>
    </div>
  </div>
</template>
