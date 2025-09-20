<script lang="ts" setup>
const {
  side,
  sideOffset,
  align,
  alignOffset,
  class: className,
  pocket: p,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const pocket = computed(() => p)
const selectedSet = computed(() =>
  pocket.value.spells?.find(s => s.id === pocket.value.main?.spells)
)

onMounted(() => {})

const keyClass
  = 'col-start-1 opacity-0 group-hover/select:opacity-50  transition-all duration-200 font-bold place-self-center'
</script>

<template>
  <Select
    v-model:model-value="pocket.main.spells"
    class="p-0 z-auto">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="
        cn(
          'w-full hover:ring hover:ring-b3/50  group/select justify-start h-fit py-1 pl-2  gap-1.75 items-center *:last:left-auto  *:last:!right-2 grid grid-cols-[10px_auto] grid-rows-2 *:last:top-[calc(50%-6px)] ',
          className,
        )
      ">
      <span :class="cn('row-start-1', keyClass)">D</span>
      <span :class="keyClass">F</span>
      <Spell
        :name="selectedSet?.d"
        class="size-10 col-start-2 row-start-1 rounded-full" />
      <Spell
        :name="selectedSet?.f"
        class="size-10 col-start-2 rounded-full" />
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
          Main Spells

          <Button
            variant="ghost"
            size="xs"
            title="Clear main spells"
            class="aspect-square *:opacity-60 hover:*:opacity-100 btn-square"
            @click="pocket.main?.spells === ''">
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
