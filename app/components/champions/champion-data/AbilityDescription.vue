<script lang="ts" setup>
const { effect } = defineProps<{
  effect: AbilityEffect
}>()
</script>

<template>
  <div class="grid h-fit w-full">
    <div class="w-full flex flex-col gap-2">
      <div class="*:not-first:mt-3 group/d *:not-first:ml-8 *:not-first:before:content-['▪︎'] inline-block *:not-first:before:absolute *:not-first:before:-left-3 *:not-first:before:text-5 **:w-full *:not-first:before:-top-px *:not-first:relative leading-5 **:leading-4.5  flex flex-col justify-center  pr-6  pt-1 pb-3 " v-html="effect.description" />

      <template v-if="effect.leveling[0] && effect.leveling[0].attribute">
        <div v-for="attribute in effect.leveling" :key="attribute.attribute" class="flex flex-col badge items-start  h-full  pt-1 pb-3 pl-3 gap-1 w-fit">
          <p class="  text-balanced ">
            {{ attribute.attribute.trim() }}:
          </p>

          <p v-if="attribute.modifiers[1]" class="flex">
            <ValueFormatter v-if="attribute.modifiers[0].values.length" class="flex gap-px dst" :array="attribute.modifiers[0].values" />
            <template v-if="attribute.modifiers[1].values.length">
              <span v-for="(val, i) in attribute.modifiers[1].values" :key="i" class="flex gap-px ml-2">+{{ val }}</span>
            </template>
            <template v-if="attribute.modifiers[1].units.length">
              <span v-for="(units, i) in attribute.modifiers[1].units" :key="i" class="flex ">{{ units }}
              </span>
            </template>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
