<script setup lang="ts">
const { champion, pocket: p } = defineProps<{
  champion: Champion
  pocket: Pocket
}>()

const pocket = computed (() => p)
</script>

<template>
  <PopoverContent
    align="start"
    class="w-54 p-1 rounded-lg">
    <PopoverItem
      class="justify-between"
      @click="navigateTo(`/champions/${champion.key}`)">
      {{ champion.name }}'s profile
      <ChampionIcon
        :id="champion.id"
        :title="champion.name"
        class="size-6 -ml-1" />
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