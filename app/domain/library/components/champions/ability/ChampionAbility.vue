<script lang="ts" setup>
import type { AbilityVariants } from "~/domain/library/utils/ability-variants"
import { abilityVariants } from "~/domain/library/utils/ability-variants"

const {
  color,
  ability,
  defaultOpen = true,
  size
} = defineProps<{
  ability: Ability
  size?: AbilityVariants["size"]
  color?: AbilityVariants["color"]
  defaultOpen?: boolean
}>()

const styles = abilityVariants({
  color,
  size: size as AbilityVariants["size"]
})

const {
  title,
  attributeBadge,
  attributeContent,
  attributeWrapper,
  collapsible,
  content,
  description,
  iconWrapper,
  notesContent,
  statsWrapper,
  trigger
} = styles
const variants = [
  attributeBadge,
  attributeContent,
  attributeWrapper,
  description
]
</script>

<template>
  <Collapsible :id="ability.key" :default-open :class="collapsible()">
    <CollapsibleTrigger :class="trigger()" :size="size">
      <div :class="iconWrapper()">
        <Img :src="ability.icon" :alt="ability.name" />
      </div>

      <div class="flex grow flex-col justify-center gap-2">
        <h2 v-if="ability?.name" :class="title()">
          {{ ability.name }}
        </h2>
        <AbilityStats v-if="size !== 'sm'" :class="statsWrapper()" :ability />
      </div>
      <CaretFlip />
    </CollapsibleTrigger>
    <CollapsibleContent v-if="ability" :class="content()">
      <div
        id="content"
        class="mr-px flex size-full flex-col items-start gap-3 px-5 py-4">
        <AbilityStats
          v-if="size === 'sm'"
          :ability
          :class="cn(statsWrapper(), 'grid w-full grid-cols-1')" />
        <AbilityDescription
          v-for="(effect, i) in ability.effects"
          :key="i"
          :variants
          :effect="effect" />

        <Collapsible v-if="ability.notes && size !== 'sm'" class="w-full">
          <CollapsibleContent :class="cn(notesContent())">
            {{ ability.notes }}
            <CollapsibleTrigger
              class="ability-header flex w-full flex-nowrap justify-between px-3">
              <icon name="add" />
            </CollapsibleTrigger>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
