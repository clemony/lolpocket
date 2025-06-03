<script lang="ts" setup>
const { effect, class: className } = defineProps<{
  effect: AbilityEffect
    class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="grid h-fit w-full">
    <transition-slide group class="w-full flex flex-col gap-4">
      <div  class="*:not-first:mt-3 group/d *:not-first:ml-8 *:not-first:before:content-['▪︎'] inline-block *:not-first:inline-block *:not-first:before:absolute *:not-first:before:-left-3 *:not-first:before:text-5 **:w-full *:not-first:before:-top-px *:not-first:relative leading-5 **:leading-4.5  flex flex-col justify-center  text-3  pt-1 "  v-html="effect.description" />

      <div class="flex flex-col gap-4" v-if="effect.leveling[0] && effect.leveling[0].attribute">
        <div v-for="attribute in effect.leveling" :key="attribute.attribute" class="flex flex-col **:text-3 items-start  h-full pl-6 gap-1 ">
          <p class="text-balanced ">
            {{ attribute.attribute.trim() }}:
          </p>
<p class="flex flex-wrap">
            <ValueFormatter v-if="attribute.modifiers[0].values.length" class="flex gap-px dst" :array="attribute.modifiers[0].values" />
          <span v-if="attribute.modifiers[0].values.length" class="flex *:text-nowrap text-2">
            <icon name="add-sm"   class="-mr-0.5 size-4.5" />
            <ValueFormatter  v-if="attribute.modifiers[1].values.length"   :array="attribute.modifiers[1].values" />
        
            <ValueFormatter  v-if="attribute.modifiers[1].units.length"  :array="attribute.modifiers[1].units" />
          </span>
        </p>
        </div>
      </div>
    </transition-slide>
  </div>
</template>
