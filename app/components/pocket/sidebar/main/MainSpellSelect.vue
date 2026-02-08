<script lang="ts" setup>
const {
  side = 'bottom',
  sideOffset,
  align = 'start',
  class: className,
  pocket: p,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  type?: 'card' | 'btn'
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const HeadingTip = resolveComponent('HeadingTip')

const pocket = computed(() => p)
const selectedSet = computed(() =>
  pocket.value.spells?.find(s => s.id === pocket.value._spells)
)
const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
const keyClass
  = 'col-start-1 opacity-0 group-hover/select:opacity-50  transition-all duration-200 font-bold place-self-center'
</script>

<template>
  <Select
    v-model:model-value="pocket._spells"
    v-model:open="open">
    <slot>
      <VarSelectTrigger
        class="relative grid size-max place-items-center overflow-hidden py-4 **:pointer-events-none"
        variant="ghost">
        <SpellSetDuo
          :set="selectedSet"
          :class="cn('', className)" />
        <!--        <icon
            name="up-down"
            class=" size-4 absolute right-1.5" /> -->
        <!--  <div class=" @6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden flex flex-col overflow-hidden leading-5">
            <h3
              v-for="spell, i in selectedSet"
              :key="i"
              :class="cn('truncate inline', {
                'dss group-hover/c:underline': spell,
                '!font-normal  opacity-10': !spell,
              })">
              {{ i === 'f' ? ' & ' : '' }}{{ spell || "Spell" }}
            </h3>
          </div> -->
      </VarSelectTrigger>
    </slot>

    <!-- content -->
    <LazySelectContent
      class="w-(--reka-select-trigger-width) min-w-54 p-0"
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper">
      <SelectGroup>
        <SelectLabel class="flex items-center justify-between">
          Main Spells

          <Button
            class="aspect-square btn-square *:opacity-60 hover:*:opacity-100"
            variant="ghost"
            size="sm"
            title="Clear main spells"
            @click="pocket._spells === ''">
            <icon
              class="size-5 **:stroke-2"
              name="backspace" />
          </Button>
        </SelectLabel>
        <SelectItem
          v-for="set in pocket.spells"
          :key="set.id"
          class="group/select flex-nowrap *:flex *:items-center"
          :value="set.id">
          <IndexIcon
            class="mr-1"
            :item="spells[set.d]" />
          <IndexIcon :item="spells[set.f]" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
