<script lang="ts" setup>
const { effect, class: className } = defineProps<{
  effect: AbilityEffect
  class?: HTMLAttributes['class']
}>()
watch(() => effect, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div
    class="grid size-full max-h-full gap-3 pl-3  rounded-box "
    :class="{ ' grid-cols-[56%_44%]': effect.leveling?.[0] && effect.leveling?.[0]?.attribute }">
    <div
      class="*: group/d items-start *:last-of-type:mb-5  leading-6 **:leading-6 flex flex-col justify-start pr-2 text-3 "
      v-html="effect.description" />

    <div
      v-if="effect.leveling?.[0] && effect.leveling?.[0].attribute"
      class="w-full">
      <div
        v-for="attribute in effect.leveling"
        :key="attribute.attribute"
        class="w-full !p-0 !mx-0 !mt-0 mb-3 chat chat-start">
        <p class="chat-header !text-1 mb-1.5">
          {{ attribute.attribute?.trim() }}:
        </p>

        <div class="chat-bubble !m-0 drop-shadow-xs drop-shadow-black/4 w-full bg-b1/90">
          <ValueFormatter
            v-if="attribute.modifiers?.[0]?.values?.length"
            class="inline-flex dst"
            :array="attribute.modifiers?.[0]?.values" />
        </div>

        <div
          v-if="attribute.modifiers?.[1]?.units?.length && attribute.modifiers?.[0]?.values?.length"
          class="chat-footer mt-0.5 !text-1 **:!text-1 text-nowrap items-center justify-start opacity-50">
          <icon
            name="add"
            class="size-4 shrink-0 -mr-1" />

          <ValueFormatter
            v-if="attribute.modifiers?.[1]?.values?.length"
            :array="attribute.modifiers?.[1].values">
          </ValueFormatter>
          {{ attribute.modifiers?.[1]?.units[0] }}
        </div>
      </div>
    </div>
  </div>
</template>
