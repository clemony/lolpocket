<script lang="ts" setup>
import { mapPositions } from "#shared/constants/misc/positions"

const tags = ref<string[]>([])
</script>

<template>
  <!-- position tags -->

  <Collapsible
    v-model:open="session().toggles.backpack.positions"
    :class="cn('px-3')">
    <CollapsibleTrigger as-child>
      <UButton class="w-full" as="button" variant="ghost" size="md">
        <span
          class="grow text-lg font-semibold tracking-normal capitalize opacity-40 duration-0">
          Position
        </span>
        <CaretRotate />
      </UButton>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="CollapsibleContent relative flex flex-col justify-center gap-y-3.75 py-2! pr-18 pl-4">
      <label
        v-for="position in mapPositions"
        :key="position.label"
        class="group/btn badge flex h-6.5 w-fit cursor-pointer items-center gap-1.5 rounded-lg pr-2.5 pl-1.5 badge-lg font-medium ring-pc/60 ring-offset-p0 duration-0 hover:ring hover:ring-offset-2"
        for="position.label"
        :style="{
          backgroundColor: position.color,
          borderColor: position.color,
        }">
        <input
          v-model="tags"
          class="checkbox rounded-full border-0 bg-p0 checkbox-xs text-white fx-0 checked:bg-p0"
          name="position.label"
          type="checkbox"
          :value="position.label"
          :style="{
            backgroundColor: tags.includes(position.label)
              ? 'transparent'
              : 'var(--color-p0)',
            borderColor: position.color,
          }" />

        <component
          :is="`i-lp-${position.label}`"
          :class="cn('ml-1 size-3.5 text-white ds-2xs')" />

        <span class="text-white">
          {{ position.label }}
        </span>
      </label>
    </CollapsibleContent>
  </Collapsible>
</template>
