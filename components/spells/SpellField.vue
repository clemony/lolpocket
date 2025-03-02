<script lang="ts" setup>
const props = defineProps<{
  pocket?: pocket
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}
</script>

<template>
  <div class="field py-4 px-6 w-full h-26 max-h-26">
    <div class="field-legend">
      Summoner Spells
    </div>
    <div class="grid p-i-c grid-cols-2 h-full flex-row justify-start pt-1  **:select-none">
      <LazySpellPicker
        :model="0"
        :pocket="pocket"
        class="size-17 rounded-lg *:rounded-lg"
        @update:model="update($event, 0)" />

      <LazySpellPicker
        :model="1"
        :pocket="pocket"
        class="size-17 rounded-lg *:rounded-lg"
        @update:model="update($event, 1)" />
    </div>

    <!--  <div class="divider lg:divider-horizontal text-1  h-full before:b3 after:b3">
        <span class="opacity-90 font-semibold">OR</span>
      </div>

      <div class="flex gap-3 flex-row">
        <LazySpellPicker
          :model="3"
          :pocket="pocket"
          class="size-16 rounded-lg *:rounded-lg"
          @update:model="update($event, 3)" />

        <LazySpellPicker
          :model="4"
          :pocket="pocket"
          class="size-16 rounded-lg *:rounded-lg"
          @update:model="update($event, 4)" />
      </div> -->
  </div>
</template>

<style scoped>

</style>