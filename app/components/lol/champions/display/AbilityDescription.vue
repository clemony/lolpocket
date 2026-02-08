<script lang="ts" setup>
const {
  variants,
  class: className,
  effect,
} = defineProps<{
  effect: AbilityEffect
  variants?: any
  damageType?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        '',
        {
          'grid-cols-[56%_44%]':
            effect.leveling?.[0] && effect.leveling?.[0]?.attribute,
        },
        className,
      )
    ">
    <div
      :class="variants?.description"
      v-html="effect.description" />

    <div
      v-if="effect.leveling?.[0] && effect.leveling?.[0].attribute"
      class="flex w-full flex-col gap-3">
      <div
        v-for="attribute in effect.leveling"
        :key="attribute.attribute"
        :class="variants?.attributeWrapper">
        <div :class="variants?.attributeContent">
          <p class="text-sm! text-wrap">
            {{ attribute.attribute }}:
          </p>
          <p class="overflow-hidden text-wrap">
            <template v-if="attribute.modifiers?.[0]">
              {{
                `${attribute.modifiers?.[0].values}${attribute.modifiers?.[0]?.unit ?? ""}`
              }}&nbsp;
            </template>

            <span
              v-if="attribute.modifiers?.[1]"
              v-tooltip="attribute.modifiers?.[1].tooltip"
              :class="
                cn(
                  {
                    'hover:bg-p2 decoration-bc/40 hover:*:decoration-bc pb-0.5':
                      attribute.modifiers?.[1].tooltip,
                  },
                  variants?.attributeBadge,
                )
              ">
              +&thinsp;
              <span
                :class="{
                  'decoration-bc/40 underline decoration-dotted underline-offset-2':
                    attribute.modifiers?.[1].tooltip,
                }">
                {{ attribute.modifiers?.[1].values }}
              </span>
              {{ attribute.modifiers?.[1].unit }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
