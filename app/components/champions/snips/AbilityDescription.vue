<script lang="ts" setup>
const { effect, class: className } = defineProps<{
  effect: AbilityEffect
  damageType?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class="grid size-full max-h-full gap-3 pl-3  rounded-box "
    :class="{ 'grid-cols-[56%_44%]': effect.leveling?.[0] && effect.leveling?.[0]?.attribute }">
    <div
      class="*: group/d items-start *:last-of-type:mb-5  leading-6 **:leading-6 flex flex-col justify-start pr-2 text-3 "
      v-html="effect.description" />

    <div
      v-if="effect.leveling?.[0] && effect.leveling?.[0].attribute"
      class="py-1 flex flex-col gap-3">
      <div
        v-for="attribute in effect.leveling"
        :key="attribute.attribute"
        class="w-full flex flex-col gap-4.5 py-1 !p-0 !mx-0 !mt-0 mb-3 chat chat-start">
        <p class="chat-header !text-2">
          {{ attribute.attribute?.trim() }}:
        </p>

        <div

          class="chat-bubble leading-6.5 gap-3 !m-0 drop-shadow-xs drop-shadow-black/4 w-full bg-b1">
          <template v-if="attribute.modifiers?.[0]">
            {{ attribute.modifiers?.[0] }}&nbsp;
          </template>
          <span
            v-if="attribute.modifiers?.[1]"
            class=" badge-ghost   !border !border-b4 badge badge-sm whitespace-pre font-medium  !text-2 -mt-1">
            +{{ attribute.modifiers?.[1] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
