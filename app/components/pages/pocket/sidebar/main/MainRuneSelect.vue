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
const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value.main?.runes)
)

const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket.main.runes"
    v-model:open="open">
    <slot :open>
      <Card
        v-if="type === 'card'"
        ref="trigger"
        class="flex basis-1/5 items-center pr-0">
        <CardContent
          as="button"
          :disabled="!pocket.main.runes"
          class="flex gap-4 py-3 px-4 items-center grow group/c cursor-pointer **:pointer-events-none disabled:pointer-events-none">
          <RuneAndPathImg
            shape="circle"
            variant="outline"
            :secondary="mainSet?.secondary?.path"
            :primary="mainSet?.primary?.path"
            :keystone="mainSet?.keystone"
            class="!size-16" />
          <div class="@6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden flex flex-col overflow-hidden shrink">
            <h3
              v-memo="[mainSet]"
              :class="cn('truncate  leading-7', {
                'dss group-hover/c:underline': mainSet?.keystone,
                '!font-normal  opacity-10': !mainSet?.keystone,
              })">
              {{ ix().runeNameById(mainSet?.keystone) || 'Keystone' }}
            </h3>

            <p
              v-memo="[mainSet?.secondary?.path]"
              :class="cn('text-3 truncate italic  leading-none', {
                'font-medium': mainSet?.secondary?.path,
                '!font-normal  opacity-20': !mainSet?.secondary?.path,
              })">
              {{ mainSet?.secondary.path || 'Secondary Path' }}
            </p>
          </div>
        </CardContent>

        <JoinSelectTrigger />
      </Card>

      <!-- button trigger -->
      <SelectTrigger
        v-else-if="type === 'btn'"
        class="grid place-items-center h-22  group/btn  z-10  pointer-events-auto **:pointer-events-none cursor-pointer !outline-none">
        <RuneAndPathImg
          v-tippy="{ content: !open ? h(HeadingTip, { text: mainSet?.secondary?.path || 'None Selected', heading: ix().runeNameById(mainSet?.keystone) || 'Empty', class: 'py-1 min-w-44' }) : null, theme: 'base', placement: 'left' }"
          shape="circle"
          placement="left"
          variant="base"
          class=" group/btn  fx-0 z-10 bg-b1/80  !cursor-pointer !pointer-events-auto **:pointer-events-none !size-16 backdrop-blur shadow-sm shadow-black/4"
          :secondary="mainSet?.secondary?.path"
          :primary="mainSet?.primary?.path"
          :keystone="mainSet?.keystone" />
      </SelectTrigger>
    </slot>
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
          Main Runes

          <Button
            variant="ghost"
            size="xs"
            title="Clear main runes"
            class="aspect-square *:opacity-60 hover:*:opacity-100 btn-square"
            @click="pocket.main?.runes === ''">
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
