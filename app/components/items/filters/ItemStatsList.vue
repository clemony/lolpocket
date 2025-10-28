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

<<<<<<< HEAD
const groups = ['basic', 'utility', 'spells', 'defense', 'physical',]
=======
const groups = ['basic', 'magic', 'physical', 'defense', 'utility']
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
          class="capitalize !text-2 mb-1 pl-0 font-semibold text-bc/90">
=======
          class="capitalize !text-2 mb-3 pl-0 font-semibold text-bc/90">
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
                'text-white order-first **:text-white hover:opacity-80 ': is().filters.stats.includes(stat.id),
=======
                'text-white **:text-white ': is().filters.stats.includes(stat.id),
>>>>>>> refs/remotes/origin/main
              })
            "
            :style="{
              backgroundColor: `${is().filters.stats.includes(stat.id) ? stat.color : ''}`,
            }"
<<<<<<< HEAD
            :hover="!indicator && !is().filters.stats.includes(stat.id) ? 'btn' : 'none'"
=======
            :hover="!indicator ? 'btn' : 'none'"
>>>>>>> refs/remotes/origin/main
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
