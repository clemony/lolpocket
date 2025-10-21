<script lang="ts" setup>
import { statIndex } from '@appdata'

const { class: className, icons, indicator = true, labels, variant = 'ghost', wrapperClass } = defineProps<{
  icons?: boolean
  labels?: boolean
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
  active?: ButtonVariants['active']
  wrapperClass?: HTMLAttributes['class']
  indicator?: boolean
}>()

const groups = ['basic', 'magic', 'physical', 'defense', 'utility']
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.stats"
    class="w-full overflow-y-scroll overscroll-auto px-1.5 h-120 max-h-90"
    :multiple="true"
    @entry-focus.prevent>
    <ListboxContent :class="cn(wrapperClass)">
      <ListboxGroup
        v-for="group, i in groups"
        :key="i"
        :class="cn({ 'row-span-2': group === 'physical' })">
        <ListboxGroupLabel
          v-if="labels"
          class="capitalize !text-2 mb-3 pl-0 font-semibold text-bc/90">
          {{ group }}
        </ListboxGroupLabel>

        <TransitionScalePop :class="cn('w-full flex flex-col gap-1 pb-6', className)">
          <ListboxItem
            v-for="stat in Object.values(statIndex).filter(s => s.group === group)"
            :key="stat.id"
            :variant
            :active
            :class="
              cn('!gap-2 font-medium', {
                'text-white **:text-white ': is().filters.stats.includes(stat.id),
              })
            "
            :style="{
              backgroundColor: `${is().filters.stats.includes(stat.id) ? stat.color : ''}`,
            }"
            :hover="!indicator ? 'btn' : 'none'"
            :value="stat.id">
            <span
              v-if="icons">
              <hicon
                :style="{
                  color: is().filters.stats.includes(stat.id) ? '#FFFFFF' : stat.color,
                }"
                :name="stat.icon"
                class="size-4 dst" />
            </span>
            {{ stat.name }}
            <ListboxItemIndicator v-if="indicator === true" />
          </ListboxItem>
        </TransitionScalePop>
      </ListboxGroup>
    </ListboxContent>
  </Listbox>
</template>
