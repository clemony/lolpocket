<script setup lang="ts">
const { stat } = defineProps<{
  stat: StatIndex
  value?: Record<string, number>
}>()
</script>

<template>
  <div class="px-2 py-1 max-w-70">
    <div class="flex gap-3 items-center">
      <hicon
        v-if="stat.icon"
        :name="stat.icon" />
      <h5>{{ stat.name }}</h5>
    </div>
    <p
      v-if=" stat.description"
      class="inline-block text-xs whitespace-normal text-pretty text-wrap py-1">
      {{ stat.description }}
    </p>
    <template v-if=" stat.values?.min == stat.values?.max">
      <p>
        Flat: {{ stat.values?.current }}
      </p>
    </template>
    <template v-else>
      <p>
        Level 1:  {{ stat.values?.min }}
      </p>
      <p>
        Level: 18: {{ stat.values?.max }}
      </p>
    </template>
  </div>
</template>