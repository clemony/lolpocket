<script setup lang="ts">
import type { PopoverContentProps } from 'reka-ui'

const { k, pocket: p } = defineProps<PopoverContentProps & {
  k: string
  pocket: Pocket
}>()

const pocket = computed (() => p)
const name = computed (() => ix().champNameByKey(k))
</script>

<template>
  <PopoverContent
    align="start"
    class="w-50 p-0 rounded-lg pb-0.5 -mx-2 pointer-events-auto">
    <PopoverItem
      class="hover:bg-b3/60"
      @click="navigateTo(`/champions/${k}`)">
      <span class="size-4.5 relative grid place-items-center">
        <ChampionIcon
          :k
          class="size-5.5 absolute" />
      </span>
      {{ name }}'s profile
    </PopoverItem>
    <DropdownMenuSeparator class="mt-1.25 mb-1" />
    <PopoverItem
      class="hover:bg-b3/60"
      for="champion-add-or-remove-from-pocket"
      as="label">
      <icon
        :name="pocket.champions.includes(k) ? 'minus' : 'add'" />
      <input
        v-model="pocket.champions"
        :aria-label="name"
        type="checkbox"
        name="champion-add-or-remove-from-pocket"
        :value="k"
        class="peer hidden" />
      <span class="peer-checked:hidden">
        Add to pocket
      </span>
      <span class="peer-not-checked:hidden">
        Remove from pocket
      </span>
    </PopoverItem>

    <PopoverItem
      as="label"
      :class="cn('has-disabled:opacity-100 hover:bg-b3/60 disabled')"
      @click="pocket.main.champion = k">
      <icon
        name="star"
        :class="cn('!size-4 ml-px **:stroke-[2.8] dst', { 'fill-precision': pocket.main.champion === k })" />
      <input
        v-model="pocket.champions"
        :disabled="pocket.champions.includes(k)"
        :aria-label="name"
        type="checkbox"
        :value="k"
        class="peer hidden" />
      {{ pocket.main.champion === k ? 'Main champion' : 'Set main champion' }}
    </PopoverItem>
  </PopoverContent>
</template>