<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'
  const ts = useTempStore()
  const props = defineProps<{
    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
  }>()

  ///console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
  <Label
    @click.right="ts.selectedChampion = champion"
    class="shadow-warm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border-none ring-1 **:select-none hover:ring-offset-2 hover:scale-105 transition-all duration-400">
    <input
      type="checkbox"
      v-model="ts.championDrawerTrigger"
      class="hidden" />
    <LittleTip
      :content="champion.name"
      class="">
      <div
        :style="{ background: `url(/img/champion/centered/${champion.apiname}_0.jpg)`, backgroundSize: '360%', backgroundRepeat: 'none', backgroundPosition: 'center top 20%' }"
        :key="props.champion.name"
        class="!h-65 w-auto overflow-hidden rounded-lg"></div>
    </LittleTip>
  </Label>
</template>

<style scoped></style>
