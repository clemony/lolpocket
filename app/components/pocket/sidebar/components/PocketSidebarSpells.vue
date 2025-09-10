<script lang="ts" setup>
import { addSpellSet } from '#shared/types/schema.pocket'

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value
</script>

<template>
  <Collapsible class="field-box grid  p-3 ">
    <CollapsibleTrigger class="flex justify-between items-center">
      <h2>Spells</h2>

      <CaretRotate />
    </CollapsibleTrigger>
    <CollapsibleContent class="grid auto-rows-fr px-1 pt-3 gap-4 !pb-0">
      <div
        v-for="set in pocket.spells"
        :key="set.id"
        class="flex gap-3 items-center">
        <SpellPicker
          class="size-16"
          :current-value="set.d"
          @update:spell="e => set.d = e" />
        <SpellPicker
          class="size-16"
          :current-value="set.f"
          @update:spell="e => set.f = e" />
        <span class="items-center flex gap-1">
          <Button
            class="inline"
            variant="link">
            <h5>{{ set.d }}</h5>
          </Button>
          <h3 v-show="set.d && set.f">+</h3>

          <Button
            class="inline"
            variant="link">
            <h5>{{ set.f }}</h5>
          </Button>
        </span>
      </div>

      <Button
        variant="neutral"
        class="self-end"
        @click="addSpellSet(pocket)">
        <icon name="add" />
        Add spell set
      </Button>
    </CollapsibleContent>
  </Collapsible>
</template>