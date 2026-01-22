<script lang="ts" setup>
import { addSpellSet } from '@types'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key)),
).value
</script>

<template>
  <Collapsible class="field-box grid p-3">
    <CollapsibleTrigger class="flex items-center justify-between">
      <h3>Spells</h3>

      <CaretRotate />
    </CollapsibleTrigger>
    <CollapsibleContent class="grid auto-rows-fr gap-4 px-1 pt-3 pb-0!">
      <div
        v-for="set in pocket.spells"
        :key="set.id"
        class="flex items-center gap-3">
        <SpellPicker
          class="size-16"
          :current-value="spellbook[set.d].name"
          @update:spell="(e) => (set.d = e)" />
        <!--         <SpellPicker
          class="size-16"
          :current-value="set.f"
          @update:spell="(e) => (set.f = e)" /> -->
        <span class="flex items-center gap-1">
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
