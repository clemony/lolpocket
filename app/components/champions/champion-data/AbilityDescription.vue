<script lang="ts" setup>
const { effect } = defineProps<{
  effect: AbilityEffect
}>()

const format = computed (() => effect.description.replace(/not-first/g, 'not-first-of-type'))


</script>

<template>
  <div class="grid h-fit">
<div class="grid grid-cols-[2fr_1fr] gap-10 h-fit">
      <div v-html="format" class="*:not-first:mt-3 *:not-first:ml-4 leading-5 **:leading-4.5">
</div>

<template v-if="effect.leveling[0] && effect.leveling[0].attribute">
      <div v-for="attribute in effect.leveling"  :key="attribute.attribute"  class="grid item-start  h-fit w-full col-start-2">
<p class="mb-1 font-medium tracking-tight">{{attribute.attribute}}:</p>
  
<ValueFormatter v-if="attribute.modifiers[0].values.length" class="flex gap-px w-full" :array="attribute.modifiers[0].values" />
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