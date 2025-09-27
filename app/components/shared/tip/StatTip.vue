<script setup lang="ts">
const { stat } = defineProps<{
  stat: StatIndex
  value?: Record<string, number>
}>()

const pClass = 'justify-between w-full flex items-center gap-10'
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
      class="inline-block text-2 whitespace-normal text-pretty text-wrap py-3">
      {{ stat.description }}
    </p>
    <template v-if=" stat.values?.min === stat.values?.max">
      <p :class="pClass">
        Flat
        <span>
          {{ stat.values?.current }}
        </span>
      </p>
    </template>
    <template v-else>
      <p :class="pClass">
        Level 1
        <span>
          {{ stat.values?.min }}
        </span>
      </p>
      <p :class="pClass">
        Level 18
        <span>
          {{ stat.values?.max }}
        </span>
      </p>
      <p :class="pClass">
        per Lv.
        <span>
          +{{ stat.values?.perLevel }}
        </span>
      </p>
    </template>
  </div>
</template>