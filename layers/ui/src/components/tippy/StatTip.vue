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
      field-box w-54 border border-b3 bg-b1/80 px-3.5 pt-4 pb-2 bg-blend-screen
      drop-shadow-none
    ">
    <div
      class="
        field-legend -ml-2 flex items-center gap-1! text-sm dst text-shadow-sm
      ">
      <Icon
        v-if="stat.icon"
        :name="stat.icon"
        class="size-3.5!" />
      {{ stat.name }}
    </div>

    <div class="">
      <p
        v-if="stat.description"
        class="inline-block py-3 text-sm text-wrap whitespace-normal">
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
          <span> +{{ stat.values?.perLevel }} </span>
        </p>
      </template>
    </div>
  </div>
</template>
