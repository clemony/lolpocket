<script lang="ts" setup>
import { HeadingTip } from '#components'
import { SelectTrigger } from 'reka-ui'

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

const pocket = computed(() => p)
const selectedSet = computed(() => pocket.value.spells?.find(s => s.id === pocket.value.main?.spells))
const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
const keyClass
  = 'col-start-1 opacity-0 group-hover/select:opacity-50  transition-all duration-200 font-bold place-self-center'
</script>

<template>
  <Select
    v-model:model-value="pocket.main.spells"
    v-model:open="open">
    <slot>
      <VarSelectTrigger
        variant="ghost"
        class="relative grid size-max place-items-center overflow-hidden py-4  **:pointer-events-none ">
        <SpellSetDuo
          :set="selectedSet"
          :class="cn('', className)" />
        <!--        <icon
            name="select"
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
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
      class="w-[var(--reka-select-trigger-width)] min-w-54  p-0">
      <SelectGroup>
        <SelectLabel class="flex items-center justify-between">
          Main Spells

          <Button
            variant="ghost"
            size="8"
            title="Clear main spells"
            class="btn-square aspect-square *:opacity-60 hover:*:opacity-100"
            @click="pocket.main?.spells === ''">
            <icon
              name="backspace"
              class="size-5 **:stroke-2" />
          </Button>
        </SelectLabel>
        <SelectItem
          v-for="set in pocket.spells"
          :key="set.id"
          class="group/select flex-nowrap *:flex *:items-center"
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
