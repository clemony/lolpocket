<script lang="ts" setup>
import { championPositions } from '~~/shared/references'

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
        class="w-full"
        size="md">
        <span
          class="text-4 grow font-semibold tracking-normal capitalize opacity-40 duration-0">
          Position
        </span>
        <CaretRotate />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="CollapsibleContent relative flex flex-col justify-center gap-y-3.75 !py-2 pr-18 pl-4">
      <label
        v-for="position in championPositions"
        :key="position.name"
        for="position.name"
        class="group/btn badge badge-lg ring-offset-b1 ring-bc/60 flex !h-6.5 h-9 w-fit cursor-pointer items-center gap-1.5 rounded-lg pr-2.5 pl-1.5 font-medium duration-0 hover:ring hover:ring-offset-2"
        :style="{
          backgroundColor: position.color,
          borderColor: position.color,
        }">
        <input
          v-model="tags"
          name="position.name"
          type="checkbox"
          :value="position.name"
          :style="{
            backgroundColor:
              tags.includes(position.name) ? 'transparent' : 'var(--color-b1)',
            borderColor: position.color,
          }"
          class="checkbox checkbox-xs checked:bg-b1 bg-b1 fx-0 rounded-full border-0 text-white" />

        <component
          :is="`i-lol-${position.name}`"
          :class="cn('size-3.5 ml-1 dst text-white ')" />

        <span class="text-white">
          {{ position.name }}
        </span>
      </label>
    </CollapsibleContent>
  </Collapsible>
</template>
