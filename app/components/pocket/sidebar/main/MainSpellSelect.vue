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
const selectedSet = computed(() => {
  const s = pocket.value.spells?.find(s => s.id === pocket.value.main?.spells)
  if (!s)
    return null
  const { id, ...rest } = s
  return rest
})
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
        class="overflow-hidden relative size-max grid place-items-center py-4  **:pointer-events-none ">
        <div :class="cn('rounded-full size-12 aspect-square  grid place-items-center relative', className)">
          <Spell
            v-for="spell, i in selectedSet"
            :key="i"
            :name="spell"
            :class="cn('size-full pointer-events-none absolute rounded-full', { '-mask-linear-55 mask-linear-from-40% mask-linear-to-58%': i === 'f' })" />
        </div>
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
      class="p-0 w-[var(--reka-select-trigger-width)]  min-w-54">
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
          class="*:flex *:items-center group/select flex-nowrap"
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
