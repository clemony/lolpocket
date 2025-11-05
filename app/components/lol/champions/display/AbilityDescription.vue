<script lang="ts" setup>
import type { abilityVariants, AbilityVariants } from '@variants/manual'

const { class: className, effect } = defineProps<{
  effect: AbilityEffect
  damageType?: string
  class?: HTMLAttributes['class']
}>()

const {
  attributeBadge,
  attributeContent,
  attributeWrapper,
  description
} = inject<Record<string, typeof abilityVariants>>('ability-variants')
</script>

<template>
  <div
    :class="cn(
      '',
      {
        'grid-cols-[56%_44%]':
          effect.leveling?.[0] && effect.leveling?.[0]?.attribute,
      }, className)">
    <div
      :class="description()"
      v-html="effect.description" />

    <div
      v-if="effect.leveling?.[0] && effect.leveling?.[0].attribute"
      class="flex w-full flex-col gap-3">
      <div
        v-for="attribute in effect.leveling"
        :key="attribute.attribute"
        :class="attributeWrapper()">
        <div
          :class="attributeContent()">
          <p class="!text-2 text-wrap ">
            {{ attribute.attribute }}:
          </p>
          <p class="overflow-hidden text-wrap whitespace-pre">
            <template v-if="attribute.modifiers?.[0]">
              {{ `${attribute.modifiers?.[0].values}${attribute.modifiers?.[0]?.unit ?? ''}` }}&nbsp;
            </template>

            <span
              v-if="attribute.modifiers?.[1]"
              v-tippy="{ content: attribute.modifiers?.[1].tooltip, theme: 'base', placement: 'bottom-start', offset: [0, 6] }"
              :class="cn({ 'hover:bg-b2 pb-0.5 decoration-bc/40 hover:*:decoration-bc ': attribute.modifiers?.[1].tooltip }, attributeBadge())">+&thinsp;
              <span :class=" { 'decoration-bc/40 underline  decoration-dotted  underline-offset-2': attribute.modifiers?.[1].tooltip }">
                {{ attribute.modifiers?.[1].values }}
              </span>{{ attribute.modifiers?.[1].unit }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
