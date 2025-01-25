<script setup lang="ts">
const props = defineProps<{
  pocketKey: string
}>()
const pocket = ref(getPocket(props.pocketKey))
console.log('pok', pocket)

const selected = ref(0)
console.log('rs sele', selected.value)

const set = ref(pocket.value.runes[0].runeSets[selected.value])
console.log('rs', pocket.value.runes[0].runeSets)
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
  <Layout2 :panel2-size="25">
    <template #panel1>
      <div class="flex justify-end gap-10 px-10">
        <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

        <div
          class="ease gradient border-b3 shadow-warm relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border transition-all duration-300"
          :class="primary"
        >
          <div class="from-b1/10 via-b1/90 to-b1 h-full bg-linear-to-b via-25%">
            <RuneSelect
              v-model:rune-set="selected"
              :pocket-key="props.pocketKey"
              :pocket="pocket"
              :set="1"
            />
          </div>
        </div>

        <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

        <div>
          <div
            :class="secondary"
            class="gradient border-b3 shadow-warm relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border"
          >
            <div class="from-b1/10 via-b1/90 to-b1 h-full bg-linear-to-b via-35% px-2">
              <RuneSelect
                v-model:rune-set="selected"
                :pocket-key="props.pocketKey"
                :pocket="pocket"
                :set="2"
              />
            </div>
          </div>

          <!----------------------------------- SHARDS --------------------------------- */ -->

          <div class="border-b3 shadow-warm relative mt-6 h-fit max-h-fit rounded-xl border">
            <div class="h-full w-full px-6 py-8 shadow-[inset_0px_0px_40px_#00000006]">
              <RuneShards
                :pocket="pocket"
                :selected="selected"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #panel2>
      <div class="border-b3 bg-b1/90! shadow-warm relative overflow-hidden rounded-xl border">
        <RuneSets
          v-model:selected="selected"
          :pocket="pocket"
          @update:selected="(v) => (selected = v)"
        />
      </div>
    </template>
  </Layout2>
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
