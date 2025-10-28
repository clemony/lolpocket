<script setup lang="ts">
import { championPositions } from '#shared/appdata'

<<<<<<< HEAD
const { class: className, clear = false, hover = 'btn', size = ['sq-xs', 'xs'], variant = 'ghost' } = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox
    v-model:model-value="cs().filters.position"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-3  relative flex-col flex-wrap gap-y-3 w-9/10 max-h-60 items-start', className)">
        <Button
          v-if="cs().filters.position && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.position = null">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="position in championPositions.filter(p => p.name !== 'All')"
          :key="position.name"
          class="bg-transparent fx-0"
          :value="position.name"
          as-child>
          <PositionBadge

            :variant
            :size="size[1]"
            :position>
          </PositionBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
=======
const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Tabs
    v-model:model-value="filters.position"
    class="w-64">
    <Field class="!px-0 py-0 gap-0 w-64 bg-b2/80 border-b3 h-10 m-0 rounded-xl">
      <TabsList
        base="indicator"
        class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-64">
        <TabsTrigger
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name"
          class="group place-items-center !text-nc">
          <component
            :is="`i-roles-${position.name.toLowerCase()}`"
            class="h-4.5 w-auto dst shrink-0 z-10 text-bc/60"
            :class="{ '**:!text-nc ': position === filters.position }" />
        </TabsTrigger>

        <TabIndicator
          contrast
          class="" />
      </TabsList>
    </Field>

    <slot />
  </Tabs>
>>>>>>> refs/remotes/origin/main
</template>

<style scoped></style>
