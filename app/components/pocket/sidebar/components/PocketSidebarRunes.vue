<script lang="ts" setup>
import type { Pocket } from "~~/shared/schema/schema.pocket";

const { pocket } = defineProps<{
  pocket: Pocket;
}>();

function handleClick(i) {
  rs().selectedRuneSet = i;
  navigateTo(`/pocket/${pocket.key}/runes`);
}
</script>

<template>
  <Field class="z-0 flex w-full pl-3">
    <div
      v-if="pocket?.runes && pocket?.runes?.length"
      class="flex w-full flex-wrap gap-6.5 py-3"
    >
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
      class="group grid h-full w-14 cursor-pointer place-items-center rounded-l-none rounded-r-xl p-0"
    >
      <div
        class="grid size-6 place-items-center rounded-lg border border-transparent group-hover:border-b3/60 group-hover:bg-b2/80"
      >
        <icon name="add" class="text-bc/60 group-hover:text-bc" />
      </div>
    </button>
  </Field>
</template>
