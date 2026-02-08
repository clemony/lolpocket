<script lang="ts" setup>
const tags = ref([])
</script>

<template>
  <!-- position tags -->

  <Collapsible
    v-model:open="ui().toggles.backpack.positions"
    :class="cn('px-3')">
    <CollapsibleTrigger as-child>
      <Button
        class="w-full"
        as="button"
        variant="ghost"
        size="md">
        <span
          class="grow text-lg font-semibold tracking-normal capitalize opacity-40 duration-0">
          Position
        </span>
        <CaretRotate />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="CollapsibleContent relative flex flex-col justify-center gap-y-3.75 py-2! pr-18 pl-4">
      <label
        v-for="position in mapPositions"
        :key="position.name"
        class="group/btn badge flex h-6.5! h-9 w-fit cursor-pointer items-center gap-1.5 rounded-lg pr-2.5 pl-1.5 badge-lg font-medium ring-pc/60 ring-offset-p0 duration-0 hover:ring hover:ring-offset-2"
        for="position.name"
        :style="{
          backgroundColor: position.color,
          borderColor: position.color,
        }">
        <input
          v-model="tags"
          class="checkbox checkbox-xs rounded-full border-0 bg-p0 text-white fx-0 checked:bg-p0"
          name="position.name"
          type="checkbox"
          :value="position.name"
          :style="{
            backgroundColor:
              tags.includes(position.name) ? 'transparent' : 'var(--color-p0)',
            borderColor: position.color,
          }">

        <component
          :is="`i-lol-${position.name}`"
          :class="cn('ml-1 size-3.5 text-white dst')" />

        <span class="text-white">
          {{ position.name }}
        </span>
      </label>
    </CollapsibleContent>
  </Collapsible>
</template>
