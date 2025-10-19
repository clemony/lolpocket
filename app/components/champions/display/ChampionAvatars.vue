<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const l = computed (() => pocket.champions.length > 5).value

const group = computed (() => l ? pocket.champions.slice(0, 4) : pocket.champions.slice(0, 5))
</script>

<template>
  <div class="group -space-y-10 flex z-11  flex-col">
    <Element
      v-for="champion in group"
      :key="champion"
      size="c-md"
      variant="base"
      class="!size-22 bg-b1 z-1 fx-0 border-0 ">
      <ChampionIcon
        :k="champion"
        class="!size-18 rounded-full" />
    </Element>
    <Element
      v-if="l"
      variant="base"
      size="c-md"
      class="!size-22 bg-b1 z-1 rounded-full fx-0 border-0 relative grid place-items-center ">
      <Element
        size="c-md"
        variant="neutral"
        class="!size-18 *:transition-all *:duration-300">
        <icon
          name="up"
          class="absolute group-closed:opacity-0" />
        <h3 class="group-open:opacity-0 group-open:text-transparent">
          +{{ pocket.champions.length - 4 }}
        </h3>
      </Element>
    </Element>
  </div>
</template>