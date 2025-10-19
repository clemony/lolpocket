<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverContentProps & {
  champion: ChampionIndex
  pocket: Pocket
}>()

const pocket = computed (() => props.pocket)
</script>

<template>
  <PopoverContent
    align="start"
    :hide-when-detached="true"
    class="w-54 p-1 pb-1.5 rounded-lg pointer-events-auto">
    <PopoverItem
      @click="navigateTo(`/champions/${champion.key}`)">
      <span class="size-4.5 relative grid place-items-center">
        <ChampionIcon
          :id="champion.id"
          :title="champion.name"
          class="size-5.5 absolute" />
      </span>
      {{ champion.name }}'s profile
    </PopoverItem>
    <DropdownMenuSeparator class="mt-1.25 mb-1" />
    <PopoverItem
      for="champion-add-or-remove-from-pocket"
      as="label">
      <icon
        :name="pocket.champions.includes(champion.key) ? 'minus' : 'add'" />
      <input
        v-model="pocket.champions"
        :aria-label="champion.name"
        type="checkbox"
        name="champion-add-or-remove-from-pocket"
        :value="champion.key"
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
      :class="cn('has-disabled:opacity-100 disabled')"
      @click="pocket.main.champion = champion.key">
      <icon
        name="star"
        :class="cn('!size-4 ml-px **:stroke-[2.8] dst', { 'fill-precision': pocket.main.champion === champion.key })" />
      <input
        v-model="pocket.champions"
        :disabled="pocket.champions.includes(champion.key)"
        :aria-label="champion.name"
        type="checkbox"
        :value="champion.key"
        class="peer hidden" />
      {{ pocket.main.champion === champion.key ? 'Main champion' : 'Set main champion' }}
    </PopoverItem>
  </PopoverContent>
</template>