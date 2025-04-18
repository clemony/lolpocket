<script lang="ts" setup>
const props = defineProps<{
  champion?: Champion
  pocket: pocket
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:model'])

const pocket = computed (() => props.pocket)
</script>

<template>
  <RightbarButton :class="cn('', props.class)">
    <div class="relative size-10 cursor-pointer rounded-lg shadow-sm  drop-shadow-sm " :class="{ 'ring ring-nc  ': champion == pocket.champions.default }">
      <div class=" rounded-lg relative overflow-hidden shrink-0 size-10 aspect-square">
        <NuxtImg :src="`/img/champion/${props.champion.id}.webp`" class="rounded-lg  inset-shadow-sm  size-full aspect-square scale-118 shrink-0 " />
        <slot />
      </div>
    </div>

    <span class="grow font-semibold tracking-tight text-start">{{ props.champion.name }}</span>

    <div class="flex items-center  tldr-30">
      <RemoveButton tip="Remove Champion" class="opacity-0 group-hover/state:opacity-100 " @click="removeChamp(props.champion, pocket)" />
      <StarButton v-model="pocket.champions.default" :value="champion" :checked="champion == pocket.champions.default" class="opacity-0 group-hover/state:opacity-100 " :class="{ 'opacity-60': champion == pocket.champions.default }" />
    </div>
  </RightbarButton>
</template>