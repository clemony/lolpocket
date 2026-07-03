<script setup lang="ts">
import type { PopoverContentProps } from "reka-ui"

const { k, pocket: p } = defineProps<
  PopoverContentProps & {
    k: string
    pocket: Pocket
  }
>()

const pocket = computed(() => p)
const pocketChampions = computed({
  get: () => pocket.value.champions ?? [],
  set: (v: string[]) => {
    pocket.value.champions = v
  }
})
const name = computed(() => champNameByKey(k))

function openChampionProfile() {
  void navigateTo(`/champions/${k}`)
}

function setMainChampion() {
  pocket.value._champion = k
}
</script>

<template>
  <PopoverContent
    class="pointer-events-auto -mx-2 w-50 rounded-lg p-0 pb-0.5"
    align="start">
    <UButton class="hover:bg-p3/60" @click="openChampionProfile">
      <span class="relative grid size-4.5 place-items-center">
        <Champion class="absolute size-5.5" :k />
      </span>
      {{ name }}'s profile
    </UButton>
    <USeparator class="mt-1.25 mb-1" />
    <UButton
      class="hover:bg-p3/60"
      for="champion-add-or-remove-from-pocket"
      as="label">
      <icon :name="pocketChampions.includes(k) ? 'minus' : 'add'" />
      <input
        v-model="pocketChampions"
        class="peer hidden"
        :aria-label="name"
        type="checkbox"
        name="champion-add-or-remove-from-pocket"
        :value="k" />
      <span class="peer-checked:hidden">Add to pocket</span>
      <span class="peer-not-checked:hidden">Remove from pocket</span>
    </UButton>

    <UButton
      as="label"
      :class="cn('disabled hover:bg-p3/60 has-disabled:opacity-100')"
      @click="setMainChampion">
      <icon
        name="star"
        :class="
          cn('ml-px size-4! ds-2xs **:stroke-[2.8]', {
            'fill-pre': pocket._champion === k
          })
        " />
      <input
        v-model="pocketChampions"
        class="peer hidden"
        :disabled="pocketChampions.includes(k)"
        :aria-label="name"
        type="checkbox"
        :value="k" />
      {{ pocket._champion === k ? "Main champion" : "Set main champion" }}
    </UButton>
  </PopoverContent>
</template>
