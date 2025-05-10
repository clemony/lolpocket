<script lang="ts" setup>
const props = defineProps<{
  champion?: Champion
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:model'])

const pocket = computed (() => props.pocket)
</script>

<template>
  <NavBtn :class="cn('btn-lg pl-2 !gap-5 rounded-2xl ', props.class)">

      <div class=" cursor-pointer rounded-full rounded-full shadow-sm  drop-shadow-sm  relative overflow-hidden shrink-0 size-10 aspect-square">
        <Img :alt="champion.name" :img="`/img/champion/${props.champion.id}.webp`" class="rounded-full  inset-shadow-sm  size-full aspect-square scale-118 shrink-0 " />
        <slot />
      </div>


    <span class="grow font-semibold tracking-tight text-start">{{ props.champion.name }}</span>

    <div class="flex items-center  tldr-30">
      <RemoveButton tip="Remove Champion" class="opacity-0 group-hover/state:opacity-100 " @click="removeChamp(props.champion, pocket)" />
      <StarButton v-model="pocket.champions.default" :value="champion" :checked="champion == pocket.champions.default" class="opacity-0 group-hover/state:opacity-100 " :class="{ 'opacity-60': champion == pocket.champions.default }" />
    </div>
  </NavBtn>
</template>