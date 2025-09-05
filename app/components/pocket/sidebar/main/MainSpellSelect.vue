<script lang="ts" setup>
const { class: className, pocket: p, side, sideOffset, align, alignOffset } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const pocket = computed (() => p)
const selectedSet = computed (() => pocket.value.spells?.find(s => s.id == pocket.value.main?.spells))

onMounted(() => {

})
</script>

<template>
  <Select
    v-model:model-value="pocket.main.spells"
    class="p-0">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="cn('w-full hover:ring hover:ring-b3/50  group/select flex-nowrap h-fit py-1 pl-6 justify-start flex gap-4 items-center relative  ', className)">
      <Spell
        :name="selectedSet?.d"
        class="size-12" />
      <Spell
        :name="selectedSet?.f"
        class="size-12" />
    </BaseSelectTrigger>
    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel class="justify-between flex items-center">
          Select spells

          <Button
            variant="ghost"
            size="xs"
            title="Clear main spells"
            class="aspect-square *:opacity-50 hover:*:opacity-100 btn-square"
            @click="pocket.main?.spells == ''">
            <icon
              name="backspace"
              class="size-5 **:stroke-2" />
          </Button>
        </SelectLabel>
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