<script setup lang="ts">
<<<<<<< HEAD
import type { PopoverContentProps } from 'reka-ui'

const { k, pocket: p } = defineProps<PopoverContentProps & {
  k: string
  pocket: Pocket
}>()

const pocket = computed (() => p)
const name = computed (() => ix().champNameByKey(k))
=======
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverContentProps & {
  champion: ChampionIndex
  pocket: Pocket
}>()

const pocket = computed (() => props.pocket)
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <PopoverContent
    align="start"
<<<<<<< HEAD
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
=======
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
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
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
=======
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
>>>>>>> refs/remotes/origin/main
    </PopoverItem>
  </PopoverContent>
</template>