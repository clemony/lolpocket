<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const l = computed (() => pocket.champions.length > 5).value

const group = computed (() => l ? pocket.champions.slice(0, 4) : pocket.champions.slice(0, 5))
</script>

<template>
  <div class="group z-11 flex flex-col  -space-y-10">
    <Element
      v-for="champion in group"
      :key="champion"
      size="c-10"
      variant="base"
      class="bg-b1 fx-0 z-1 !size-22 border-0 ">
      <ChampionIcon
        :k="champion"
        class="!size-18 rounded-full" />
    </Element>
    <Element
      v-if="l"
      variant="base"
      size="c-10"
      class="bg-b1 fx-0 relative z-1 grid !size-22 place-items-center rounded-full border-0 ">
      <Element
        size="c-10"
        variant="neutral"
        class="!size-18 *:transition-all *:duration-300">
        <icon
          name="up"
          class="group-closed:opacity-0 absolute" />
        <h3 class="group-open:text-transparent group-open:opacity-0">
          +{{ pocket.champions.length - 4 }}
        </h3>
      </Element>
    </Element>
  </div>
</template>