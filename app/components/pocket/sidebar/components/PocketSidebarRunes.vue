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
  <div class="z-0 flex w-full pl-3">
    <div
      v-if="pocket?.runes && pocket?.runes?.length"
      class="flex w-full flex-wrap gap-6.5 py-3">
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
      class="group grid h-full w-14 cursor-pointer place-items-center rounded-l-none rounded-r-xl p-0">
      <div
        class="grid size-6 place-items-center rounded-lg border border-transparent group-hover:border-p3/60 group-hover:bg-p2/80">
        <icon
          class="text-pc/60 group-hover:text-pc"
          name="add" />
      </div>
    </button>
  </div>
</template>
