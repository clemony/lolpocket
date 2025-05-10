<script lang="ts" setup>
const { effect } = defineProps<{
  effect: AbilityEffect
}>()

const format = computed (() => effect.description.replace(/not-first/g, 'not-first-of-type'))


</script>

<template>
  <div class="grid h-fit w-full">
<div class="grid grid-cols-[2fr_1fr] w-full h-fit">
      <div v-html="format" class="*:not-first:mt-3 group/d *:not-first:ml-8 *:not-first:before:content-['▪︎'] *:not-first:before:absolute *:not-first:before:-left-3 *:not-first:before:text-5 **:w-full *:not-first:before:-top-px *:not-first:relative leading-5 **:leading-4.5 border-b border-b-b3 flex flex-col justify-center  pr-6  pt-1 pb-8 ">
</div>

<template v-if="effect.leveling[0] && effect.leveling[0].attribute">
      <div v-for="attribute in effect.leveling"  :key="attribute.attribute"  class="flex flex-col h-full item-start justify-center pt-1 pb-8 pl-3  w-full col-start-2 border-b border-b-b3">
<p class="mb-1 font-semibold tracking-tight">{{attribute.attribute}}:</p>
  
<ValueFormatter v-if="attribute.modifiers[0].values.length" class="flex gap-px w-full dst" :array="attribute.modifiers[0].values" />
    <!-- <p v-if="attribute.modifiers[0].values.length" class="flex gap-px w-full">
        <span class="flex gap-px" v-for="(mods, i) in attribute.modifiers[0].values" :key="i">
          {{mods}}<span  v-if="i != attribute.modifiers[0].values.length - 1" >/</span>
        </span>
      </p> -->
      <p v-if="attribute.modifiers[1]" class="flex w-full">
   <template v-if="attribute.modifiers[1].values.length">
  <span class="flex gap-px" v-for="(val, i) in attribute.modifiers[1].values" :key="i">+ {{val}}</span>
  </template>
    <template v-if="attribute.modifiers[1].units.length">
  <span  v-for="(units, i) in attribute.modifiers[1].units" :key="i">{{units}}
        </span>
        </template>
        </p>
             
              </div>
       </template>
  </div>
  </div>
</template>