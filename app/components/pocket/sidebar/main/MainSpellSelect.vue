<script lang="ts" setup>
import { championPositions } from 'appdata'

const { class: className, pocket: p, side, sideOffset, align, alignOffset } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const emit = defineEmits(['update:select'])
const pocket = computed (() => p)
const selected = ref('')
pocket.value.main.spells = ''
const selectedSet = computed (() => pocket.value.spells?.find(s => s.id == pocket.value.main?.spells))
</script>

<template>
  <Select
    v-model:model-value="pocket.main.spells"
    class="p-0">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="cn('w-full hover:ring hover:ring-b3 flex-nowrap pl-2 !flex items-center relative gap-2 ', className)">
      <span class="flex items-center gap-2">
        <Spell
          :name="selectedSet?.d"
          class="size-12" />
        <Spell
          :name="selectedSet?.f"
          class="size-12" />
      </span>
    </BaseSelectTrigger>
    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Select main spell set</SelectLabel>
        <!--  <SelectItem
          value="''"
          class="flex items-center gap-3">
          <Button
            variant="secondary"
            class="overflow-hidden relative size-16 p-0 hover:ring grid place-items-center  hover:ring-b4"
            :class="{ ' shadow-sm drop-shadow-sm': selected != '' }">
            <icon
              name="tabler:flame"
              alt="no summoner spell chosen"
              class="size-6.5 opacity-20" />
          </Button>
        </SelectItem> -->
        <SelectItem
          v-for="set in pocket.spells"
          :key="set.id"
          class="!flex items-center flex-nowrap"
          :value="set.id">
          <Spell
            :name="set.d"
            class="mr-1" />
          <Spell :name="set.f" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>