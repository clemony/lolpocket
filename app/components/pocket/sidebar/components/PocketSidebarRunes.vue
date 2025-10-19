<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()

function handleClick(i) {
  rs().selectedRuneSet = i
  navigateTo(`/pocket/${pocket.key}/runes`)
}
</script>

<template>
  <Field class="pl-3 z-0 w-full flex">
    <div
      v-if="pocket?.runes && pocket?.runes?.length"
      class="w-full py-3 flex gap-6.5 flex-wrap">
      <!--    <RuneSetButton
        v-for="(set, i) in pocket.runes"
        :key="i"
        :set-key="i"
        :pocket="pocket"
        :set="set"
        @click="handleClick(i)" /> -->
    </div>

    <button
      v-tippy="'Add Rune Set'"
      class="h-full grid cursor-pointer place-items-center group w-14 rounded-l-none rounded-r-xl p-0">
      <div
        class="group-hover:bg-b2/80 size-6 rounded-lg grid place-items-center border border-transparent group-hover:border-b3/60">
        <icon
          name="add"
          class="text-bc/60 group-hover:text-bc" />
      </div>
    </button>
  </Field>
</template>
