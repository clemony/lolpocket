<script lang="ts" setup>
const { class: className, effect } = defineProps<{
  effect: AbilityEffect
  damageType?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class="grid size-full max-h-full gap-3 pl-3 rounded-box"
    :class="{
      'grid-cols-[56%_44%]':
        effect.leveling?.[0] && effect.leveling?.[0]?.attribute,
    }">
    <div
      class="*:last-of-type:mb-5 leading-6 **:leading-6 flex group/d items-start flex-col justify-start pr-2 text-sm"
      v-html="effect.description" />

    <div
      v-if="effect.leveling?.[0] && effect.leveling?.[0].attribute"
      class="flex flex-col gap-3">
      <div
        v-for="attribute in effect.leveling"
        :key="attribute.attribute"
        class="w-full flex flex-col gap-2 !p-0 mb-3 chat chat-start">
        <div
          class="chat-bubble inline align-middle isolation-auto leading-7.5 gap-3 !m-0 drop-shadow-xs drop-shadow-black/4 w-full bg-b1">
          <p class="!text-xs text-wrap text-balance">
            {{ attribute.attribute }}:
          </p>
          <template v-if="attribute.modifiers?.[0]">
            {{ `${attribute.modifiers?.[0].values}${attribute.modifiers?.[0]?.unit ?? ''}` }}&nbsp;
          </template>

          <span
            v-if="attribute.modifiers?.[1]"
            v-tippy="{ content: attribute.modifiers?.[1].tooltip, theme: 'basic', placement: 'bottom-start', offset: [0, 6] }"
            :class="cn('inline-flex items-center gap-0 px-2 bg-b2/10  -mt-1 z-10 whitespace-pre badge  border border-b3 !text-xs', { 'hover:bg-b2 pb-0.5 decoration-bc/40 hover:*:decoration-bc ': attribute.modifiers?.[1].tooltip })">+<span :class=" { 'underline decoration-dotted  decoration-bc/40  underline-offset-2': attribute.modifiers?.[1].tooltip }">
              {{ attribute.modifiers?.[1].values }}
            </span>{{ attribute.modifiers?.[1].unit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
