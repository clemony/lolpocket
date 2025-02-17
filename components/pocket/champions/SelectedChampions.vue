<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)

const champs = computedAsync(() => {
  return pocket.value.champions.children
})
</script>

<template>

    <transition-slide
      group :appear="false"
      class=" gap-3 grid grid-cols-3 h-auto items-center w-full justify-between   px-px  rounded-lg group"
    >
      <button
        v-for="champion in champs"
        :key="champion.apiname"
        class="size-20 shadow-sm  btn p-0 rounded-lg border-0 "
        :class="`group/${champion.apiname}`"
      >
        <Champion
          :key="champion.name"
          :champion="champion"
          :pocket="pocket"
          class="size-full shrink-0 !cursor-pointer"
        />
      </button>

      <Placeholder
        class="size-20 rounded-lg bg-b2/70 border-b3/75 transition-all duration-300 hover:bg-b3/50 hover:inset-shadow-sm hover:shadow-none hover:border-b3"
      >
        <i-no-champ class="size-13 opacity-30" />
      </Placeholder>
    </transition-slide>
 
</template>

<style scoped></style>
