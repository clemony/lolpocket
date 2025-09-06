<script lang="ts" setup>
const { class: className, pocket: p, side, sideOffset, align, alignOffset } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const route = useRoute()

const pocket = computed (() => p)
const mainSet = computed (() => pocket.value.runes.find(s => s.id == pocket.value.main?.runes))
console.log('🌱 - mainSet:', mainSet)
</script>

<template>
  <Select
    v-model:model-value="pocket.main.runes"
    class="p-0 w-full">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="cn('w-full hover:ring hover:ring-b3/50 pb-1 group/select flex-nowrap h-22 pl-2 flex justify-start relative  gap-2 items-center relative *:last:right-2', className)">
      <img
        v-if="mainSet?.keystone"
        :title="String(ix().runeNameById(mainSet?.keystone))"
        :alt="mainSet?.keystone.toString()"
        :src="`/img/runes/${mainSet?.primary?.path}/${mainSet?.keystone}.webp`"
        class="!w-20 shrink-0 place-self-center drop-shadow-md !h-auto" />
      <Placeholder
        v-else
        class="size-18  rounded-full" />

      <span class="size-9 shadow-sm drop-shadow-sm rounded-full bg-b1 grid place-items-center border-b3/60 absolute bottom-2.5 right-6.5">
        <img
          v-if="mainSet?.secondary?.path"
          :title="mainSet?.secondary?.path"
          :alt="mainSet?.secondary?.path"
          :src="`/img/paths/${mainSet?.secondary?.path}.webp`"
          class="w-6.5 drop-shadow-sm !h-auto" />
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
          class="!flex items-center group/select flex-nowrap"
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