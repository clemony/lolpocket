<script lang="ts" setup>
import { championPositions } from 'appdata/filters/positions'

const tags = ref([])
</script>

<template>
  <!-- position tags -->

  <Collapsible
    v-model:open="as().toggles.backpack.positions"
    :class="cn('px-3')">
    <CollapsibleTrigger as-child>
      <Button
        as="button"
        variant="ghost"
        class=" w-full "
        size="md">
        <span class="font-semibold grow tracking-normal duration-0 opacity-40 text-4 capitalize">
          Position
        </span>
        <CaretRotate />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent
      class=" CollapsibleContent relative justify-center flex gap-y-2.75 flex-col !py-2  pl-4 pr-18">
      <label
        v-for="position in championPositions"
        :key="position.name"
        class="group/bth-9 flex rounded-lg badge badge-lg !h-6.5 pl-1.5 pr-2.5 gap-1.5  hover:ring hover:ring-offset-2 duration-0 font-medium ring-offset-b1 ring-bc/60 items-center w-fit  cursor-pointer"
        :style=" {
          backgroundColor: position.color,
          borderColor: position.color }">
        <input
          v-model="tags"
          type="checkbox"
          :value="position.name"
          :style=" {
            backgroundColor: tags.includes(position.name) ? 'transparent' : 'var(--color-b1)',
            borderColor: position.color }"
          class="checkbox checkbox-xs checked:bg-b1 text-white rounded-full bg-b1 border-0 fx-0" />

        <component
          :is="`i-roles-${position.name}`"
          :class="cn('size-3.5 ml-1 dst text-white ')" />

        <span
          class="text-white ">
          {{ position.name }}
        </span>

      </label>
    </CollapsibleContent>
  </Collapsible>
</template>