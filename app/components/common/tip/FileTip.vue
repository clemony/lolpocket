<script setup lang="ts">
const { stat } = defineProps<{
  stat: StatValues
  value?: Record<string, number>
}>()

const pClass = 'justify-between w-full flex items-center gap-10'
</script>

<template>
  <div
    class="
      rounded-tl-0 tabs-lift tabs max-w-64 rounded-tr-lg rounded-b-lg border
      border-b3 bg-b1/94 tabs-xs drop-shadow-none
    ">
    <div
      class="
        tab-active tab -ml-[0.5px] flex -translate-y-[17.6px] items-center gap-1
      ">
      <hicon
        v-if="stat.icon"
        :name="stat.icon"
        class="!size-3.5 -translate-x-1" />
      <span class="-translate-x-1">
        {{ stat.name }}

      </span>
    </div>

    <div class="tab-content -mt-5 px-2.5 py-2">
      <p
        v-if=" stat.description"
        class="inline-block py-3 text-2 text-wrap whitespace-normal">
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