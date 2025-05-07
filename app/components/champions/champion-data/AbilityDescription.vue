<script lang="ts" setup>
const { effect } = defineProps<{
  effect: AbilityEffect
}>()

</script>

<template>
  <div class="grid">
<div class="grid grid-cols-[2fr_1fr] gap-10">
      <div  class=" leading-5">
        {{effect.description}}
</div>

            <div class="grid gap-4 h-fit">
              <p v-for="attribute in effect.leveling"  class="grid gap-1">
       <span class="font-semibold text-bc/90">{{attribute.attribute}}:</span>
        <p class="flex gap-px">
        <span class="flex gap-px" v-for="(mods, i) in [...new Set(attribute.modifiers[0].values)]" :key="i">
          {{mods}}<span  v-if="i != [...new Set(attribute.modifiers[0].values)].length - 1" >/</span>
        </span>
        </p>
              </p>
            </div>
  </div>
  </div>
</template>