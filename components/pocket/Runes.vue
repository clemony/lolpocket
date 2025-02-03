<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
console.log('pok', pocket)

const selected = ref(0)
console.log('rs sele', selected.value)

const set = ref(pocket.value.runes.sets[selected.value])
console.log('rs', pocket.value.runes.sets)
console.log('set', set)

const primary = computed(() => {
  const a = set.value && set.value.primary != undefined
    ? set.value.primary
    : ''
  return a
})

const secondary = computed(() => {
  const a = set.value && set.value.secondary
    ? set.value.secondary
    : ''
  return a
})
</script>

<template>
  <div class="w-full">
    <MenubarSpacer class="w-full !h-[9vh]" />

    <div class="flex gap-10 w-full max-h-[95vh]">
      <RunePanels />

      <RuneSets
        v-model:selected="selected"
        :pocket="pocket"
        @update:selected="(v) => (selected = v)"
      />
    </div>
  </div>
</template>

<style>
  .gradient {
  background: linear-gradient(
    137deg,
    rgba(231, 207, 120, 0.7) 0%,
    rgba(220, 124, 124, 0.7) 20%,
    rgba(178, 164, 221, 0.7) 40%,
    rgba(175, 212, 150, 0.7) 60%,
    rgba(165, 226, 229, 0.7) 80%
  );
  background-size: 550%;
}

.empty {
  background: linear-gradient(
    137deg,
    rgba(190, 190, 190, 1) 0%,
    rgba(193, 193, 193, 0.8) 10%,
    rgba(233, 233, 233, 1) 75%,
    rgba(252, 252, 252, 0) 90%
  );
}

.none,
.precision,
.domination,
.sorcery,
.resolve,
.inspiration {
  transition: all 0.5s ease-in-out;
}

.precision {
  background-position: 0%;
}

.domination {
  background-position: 20%;
}

.sorcery {
  background-position: 42%;
}

.resolve {
  background-position: 83%;
}

.inspiration {
  background-position: 100%;
}
</style>
