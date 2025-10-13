<script lang="ts" setup>
import { HeadingTip } from '#components'
import { SelectTrigger } from 'reka-ui'

const {
  side = 'bottom',
  sideOffset,
  align = 'start',
  class: className,
  pocket: p,
  type = 'card',
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
      <!-- card -->
      <Card
        v-if="type === 'card'"
        ref="trigger"
        class="flex basis-1/5  items-center pr-0">
        <CardContent
          class="flex gap-3 py-3 px-4 items-center w-full ">
          <div class="flex items-center gap-1">
            <button
              v-for="spell, i in selectedSet"
              :key="i"
              class="flex items-center group/c disabled:pointer-events-none cursor-pointer **:pointer-events-none gap-2">
              <Spell
                :name="spell"
                class="size-12 rounded-full" />
            </button>
          </div>
          <div class=" @6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden flex flex-col overflow-hidden leading-none">
            <h3
              v-for="spell, i in selectedSet"
              :key="i"
              :class="cn('truncate', {
                'dss group-hover/c:underline': spell,
                '!font-normal  opacity-10': !spell,
              })">
              {{ i === 'f' ? '& ' : '' }}{{ spell || "Spell" }}
            </h3>
          </div>
        </CardContent>

        <JoinSelectTrigger />
      </Card>

      <!-- button trigger -->
      <SelectTrigger
        v-else-if="type === 'btn'"
        class="grid place-items-center h-22  group/btn  z-10  pointer-events-auto **:pointer-events-none cursor-pointer !outline-none">
      </SelectTrigger>
    </slot>

    <!-- content -->
    <LazySelectContent
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
      class="p-0 w-[var(--reka-select-trigger-width)] top-[calc(var(--reka-select-trigger-height)+2px)] min-w-54">
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
