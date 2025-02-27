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
  <div class="field">
    <div class="field-legend">
      Summoner Spells
    </div>
    <div class="flex gap-3 flex-row justify-center">
      <div class="flex gap-3 flex-row">
        <LazySpellPicker
          :model="0"
          :pocket="pocket"
          class="size-20 rounded-lg *:rounded-lg"
          @update:model="update($event, 0)"
        />

        <LazySpellPicker
          :model="1"
          :pocket="pocket"
          class="size-20 rounded-lg *:rounded-lg"
          @update:model="update($event, 1)"
        />
      </div>

      <div class="divider lg:divider-horizontal text-1  before:b3 after:b3">
        <span class="opacity-90 font-semibold">OR</span>
      </div>

      <div class="flex gap-3 flex-row">
        <LazySpellPicker
          :model="3"
          :pocket="pocket"
          class="size-20 rounded-lg *:rounded-lg"
          @update:model="update($event, 3)"
        />

        <LazySpellPicker
          :model="4"
          :pocket="pocket"
          class="size-20 rounded-lg *:rounded-lg"
          @update:model="update($event, 4)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>