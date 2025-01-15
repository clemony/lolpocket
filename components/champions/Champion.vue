<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    champion: Champion;
    pocket?: pocket;
    class?: HTMLAttributes['class'];
  }>();

  ///console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
  <button
    @click.right="useDrawer('ChampionDrawer', null, champion)"
    class="shadow-warm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border-none inset-shadow-sm ring-1 **:select-none hover:ring-offset-2">
    <LittleTip :content="champion.name">
      <div :class="cn('size-full overflow-hidden rounded-lg', props.class)">
        <img
          :key="props.champion.name"
          :src="`/img/champion/${champion.apiname}.webp`"
          :alt="props.champion.name + ' Image'"
          class="size-full scale-115" />
      </div>
    </LittleTip>
  </button>
</template>

<style scoped></style>
