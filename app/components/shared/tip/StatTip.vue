<script setup lang="ts">
const { stat } = defineProps<{
  stat: StatIndex
  value?: Record<string, number>
}>()

const pClass = 'justify-between w-full flex items-center gap-10'
</script>

<template>
  <div class="w-54 field-box bg-b1/80 bg-blend-screen border border-b3 drop-shadow-none px-3.5 pt-4 pb-2">
    <div class="flex !gap-1 text-2 items-center field-legend dst text-shadow-sm -ml-2">
      <hicon
        v-if="stat.icon"
        :name="stat.icon"
        class="!size-3.5" />
      {{ stat.name }}
    </div>

    <div class="">
      <p
        v-if=" stat.description"
        class="inline-block text-2 whitespace-normal text-pretty text-wrap py-3">
        {{ stat.description }}
      </p>
      <template v-if="!stat.values?.max">
        <p :class="pClass">
          Flat
          <span>
            {{ stat.values?.flat || stat.values?.current }}
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
  </div>
</template>