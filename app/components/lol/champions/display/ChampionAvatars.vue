<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const l = computed(() => pocket.champions.length > 5).value

const group = computed(() =>
  l ? pocket.champions.slice(0, 4) : pocket.champions.slice(0, 5)
)
</script>

<template>
  <div class="group z-11 flex flex-col -space-y-10">
    <div
      v-for="champion in group"
      :key="champion"
      class="z-1 size-22! rounded-full border-0 bg-p0 fx-0">
      <Champion
        class="size-18! rounded-full"
        :k="champion" />
    </div>
    <Element
      v-if="l"
      class="relative z-1 grid size-22! place-items-center rounded-full border-0 bg-p0 fx-0">
      <Element
        class="size-18! rounded-full *:transition-all *:duration-300">
        <icon
          class="absolute group-closed:opacity-0"
          name="up" />
        <h3 class="group-open:text-transparent group-open:opacity-0">
          +{{ pocket.champions.length - 4 }}
        </h3>
      </Element>
    </Element>
  </div>
</template>
