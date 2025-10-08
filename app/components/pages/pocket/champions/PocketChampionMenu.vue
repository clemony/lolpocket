<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverContentProps & {
  champion: ChampionIndex
  pocket: Pocket
}>()

const emits = defineEmits<PopoverContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const pocket = computed (() => props.pocket)
</script>

<template>
  <PopoverContent
    v-bind="forwarded"
    align="start"
    class="w-54 p-1 pb-1.5 rounded-lg">
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
      as="label">
      <icon
        name="add" />
      <input
        v-model="pocket.champions"
        :aria-label="champion.name"
        type="checkbox"
        :value="champion.key"
        class="peer hidden" />
      Add to pocket
    </PopoverItem>

    <PopoverItem
      as="label">
      <icon
        name="star"
        class="!size-4 ml-px **:stroke-[2.8] dst" />
      <input
        v-model="pocket.champions"
        :aria-label="champion.name"
        type="checkbox"
        :value="champion.key"
        class="peer hidden" />
      Set main champion
    </PopoverItem>
  </PopoverContent>
</template>