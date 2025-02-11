<script setup lang="ts">
import createDefaultSpell from 'utils/handlePocket'

const props = defineProps<{
  pocket: pocket
}>()

const a = ref(props.pocket.spells[0])

const b = ref(props.pocket.spells[1])

onMounted(() => {
  !a.value ? ((a.value = createDefaultSpell()) as Spell) : props.pocket.spells[0]
  !b.value ? ((b.value = createDefaultSpell()) as Spell) : props.pocket.spells[1]
})
</script>

<template>
  <div class="">
    <icon
      name="game-icons:spell-book"
      class="text-ncsize-6 shrink-0 opacity-80 drop-shadow-sm"
    />
    <!--  <div
            class="size-9 overflow-hidden rounded-full border border-transparent bg-white/20 shadow-smooth backdrop-blur-xs">
            <img
                v-if="a && a.name"
                :src="`/img/spells/Summoner${a.name}.webp`"
                class="size-full" />
        </div>
        <div
            class="size-9 overflow-hidden rounded-full border border-transparent bg-white/20 shadow-smooth backdrop-blur-xs">
            <img
                v-if="b && b.name"
                :src="`/img/spells/Summoner${b.name}.webp`"
                class="size-full" />
        </div> -->
  </div>
</template>

<style scoped></style>
