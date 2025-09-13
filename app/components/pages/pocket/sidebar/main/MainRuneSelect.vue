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
</script>

<template>
  <Select
    v-model:model-value="pocket.main.runes"
    class="p-0 w-full">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="cn('w-full hover:ring hover:ring-b3/50 pb-1 group/select flex-nowrap h-22 pl-2 flex justify-start relative  gap-2 items-center relative *:last:!right-2', className)">
      <img
        v-if="mainSet?.keystone"
        :title="String(ix().runeNameById(mainSet?.keystone))"
        :alt="mainSet?.keystone.toString()"
        :src="`/img/runes/${mainSet?.primary?.path}/${mainSet?.keystone}.webp`"
        class="!w-20 shrink-0 place-self-center drop-shadow-md !h-auto" />
      <Placeholder
        v-else
        class="size-18  group-hover/select:!bg-b1 transition-all duration-250  rounded-full">
        <i-lol-runes
          class="!size-9 text-bc/50 opacity-0 group-hover/select:opacity-100 transition-all duration-250 shrink-0" />
      </Placeholder>

      <span :class="cn('size-9  rounded-full   group-hover/select:!bg-b1 transition-all duration-250  border grid place-items-center border-b3/60 absolute bottom-2.25 right-6.5', !mainSet?.secondary?.path ? 'bg-tint-b2/60' : 'bg-b1 drop-shadow-sm shadow-sm')">
        <img
          v-if="mainSet?.secondary?.path"
          :title="mainSet?.secondary?.path"
          :alt="mainSet?.secondary?.path"
          :src="`/img/paths/${mainSet?.secondary?.path}.webp`"
          class="w-6.5  !h-auto" />

        <i-lol-runes
          v-else
          class="!size-5.5 text-bc/60 opacity-0 group-hover/select:opacity-100 transition-all duration-250  shrink-0" />
      </span>
    </BaseSelectTrigger>

    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="!w-full">
      <SelectGroup>
        <SelectLabel class="justify-between flex items-center">
          Main Runes

          <Button
            variant="ghost"
            size="xs"
            title="Clear main runes"
            class="aspect-square *:opacity-60 hover:*:opacity-100 btn-square"
            @click="pocket.main?.runes == ''">
            <icon
              name="backspace"
              class="size-5 **:stroke-2" />
          </Button>
        </SelectLabel>
        <SelectItem
          v-for="set in pocket.runes"
          :key="set.id"
          class="h-14 !p-0"
          :value="set.id">
          <KeystoneAndPath
            :set="set"
            x-class="size-8"
            k-class="scale-130" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>