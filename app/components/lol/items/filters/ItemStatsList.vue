<script lang="ts" setup>
const {
  variant = 'ghost',
  class: className,
  icons,
  indicator = true,
  labels,
  wrapperClass,
} = defineProps<{
  icons?: boolean
  labels?: boolean
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']

  wrapperClass?: HTMLAttributes['class']
  indicator?: boolean
}>()

const groups = ['basic', 'utility', 'spells', 'defense', 'physical']
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.stats"
    class="h-120 max-h-90 w-full overflow-y-scroll overscroll-auto px-1.5"
    :multiple="true"
    @entry-focus.prevent
  >
    <ListboxContent :class="cn(wrapperClass)">
      <ListboxGroup
        v-for="(group, i) in groups"
        :key="i"
        :class="cn({ 'row-span-2': group === 'physical' })"
      >
        <ListboxGroupLabel
          v-if="labels"
          class="text-bc/90 mb-1 pl-0 text-sm! font-semibold capitalize"
        >
          {{ group }}
        </ListboxGroupLabel>

        <!--  <TransitionScalePop :class="cn('w-full flex flex-col gap-1 pb-6', className)">
          <ListboxItem
            v-for="stat in Object.values(statIndex).filter(s => s.group === group)"
            :key="stat.id"
            :variant
            :active
            :class="
              cn('!gap-2 font-medium', {
                'text-white order-first **:text-white hover:opacity-80 ': is().filters.stats.includes(stat.id),
              })
            "
            :style="{
              backgroundColor: `${is().filters.stats.includes(stat.id) ? stat.color : ''}`,
            }"

            :value="stat.id">
            <span
              v-if="icons">
              <Icon
                :style="{
                  color: is().filters.stats.includes(stat.id) ? '#FFFFFF' : stat.color,
                }"
                :name="stat.icon"
                class="dst size-4" />
            </span>
            {{ stat.name }}
            <ListboxItemIndicator v-if="indicator === true" />
          </ListboxItem>
        </TransitionScalePop> -->
      </ListboxGroup>
    </ListboxContent>
  </Listbox>
</template>
