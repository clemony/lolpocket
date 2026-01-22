<script setup lang="ts">
import type { Pocket } from '@types'
import type { PopoverContentProps } from 'reka-ui'

const { k, pocket: p } = defineProps<
  PopoverContentProps & {
    k: string
    pocket: Pocket
  }
>()

const pocket = computed(() => p)
const name = computed(() => ix().champNameByKey(k))
</script>

<template>
  <PopoverContent
    align="start"
    class="pointer-events-auto -mx-2 w-50 rounded-lg p-0 pb-0.5">
    <PopoverItem
      class="hover:bg-b3/60"
      @click="navigateTo(`/champions/${k}`)">
      <span class="relative grid size-4.5 place-items-center">
        <ChampionIcon
          :k
          class="absolute size-5.5" />
      </span>
      {{ name }}'s profile
    </PopoverItem>
    <DropdownMenuSeparator class="mt-1.25 mb-1" />
    <PopoverItem
      class="hover:bg-b3/60"
      for="champion-add-or-remove-from-pocket"
      as="label">
      <icon :name="pocket.champions.includes(k) ? 'minus' : 'add'" />
      <input
        v-model="pocket.champions"
        :aria-label="name"
        type="checkbox"
        name="champion-add-or-remove-from-pocket"
        :value="k"
        class="peer hidden" />
      <span class="peer-checked:hidden"> Add to pocket </span>
      <span class="peer-not-checked:hidden"> Remove from pocket </span>
    </PopoverItem>

    <PopoverItem
      as="label"
      :class="
        cn('disabled hover:bg-b3/60 has-disabled:opacity-100')
      "
      @click="pocket._champion = k">
      <icon
        name="star"
        :class="
          cn('dst ml-px size-4! **:stroke-[2.8]',
             { 'fill-precision': pocket._champion === k },
          )
        " />
      <input
        v-model="pocket.champions"
        :disabled="pocket.champions.includes(k)"
        :aria-label="name"
        type="checkbox"
        :value="k"
        class="peer hidden" />
      {{ pocket._champion === k ? "Main champion" : "Set main champion" }}
    </PopoverItem>
  </PopoverContent>
</template>
