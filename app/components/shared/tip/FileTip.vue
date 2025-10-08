<script setup lang="ts">
const { stat } = defineProps<{
  stat: StatIndex
  value?: Record<string, number>
}>()

const pClass = 'justify-between w-full flex items-center gap-10'
</script>

<template>
  <div class="max-w-64 tabs tabs-lift tabs-xs rounded-b-lg rounded-tr-lg rounded-tl-0  border border-b3  bg-b1/94 drop-shadow-none">
    <div class="flex gap-1 -translate-y-[17.6px] -ml-[0.5px] items-center tab tab-active ">
      <hicon
        v-if="stat.icon"
        :name="stat.icon"
        class="!size-3.5 -translate-x-1" />
      <span class=" -translate-x-1">
        {{ stat.name }}

      </span>
    </div>

    <div class="tab-content px-2.5 py-2 -mt-5">
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
  </div>
</template>

<style scoped>
.tab {
  --tab-radius-min: 0.4rem !important;
  --tab-paddings: 2px 12px !important;
}
</style>