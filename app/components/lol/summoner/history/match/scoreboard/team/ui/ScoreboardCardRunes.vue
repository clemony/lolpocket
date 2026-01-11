<script lang="ts" setup>
const { player } = defineProps<{
  player: Player
}>()
</script>

<template>
  <!-- runes -->
  <div class="pointer-events-none z-1 flex h-full translate-x-0.5 flex-col items-center gap-0.75 *:pointer-events-auto">
    <!-- keystone -->
    <div class="z-2 grid size-7.5 place-items-center rounded-full bg-b1">
      <Button
        variant="neutral"
        size="c-5.5"
        data-tip="rune"
        class="z-2 aspect-square bg-neutral/80 p-0! transition-all duration-300 hover:scale-110"
        :data-id="player?.runes?.keystone">
        <img
          :src="`/img/runes/${player?.runes.keystone}.webp`"
          :alt="runeNameById(player?.runes.keystone)"
          class="absolute h-6 w-auto shrink-0 object-contain dss" />
      </Button>
    </div>
    <!-- path -->
    <div class="z-1 mt-0.5 grid size-6.75 place-items-center rounded-full bg-b1">
      <Button
        variant="neutral"
        data-tip="path"
        size="c-5"
        :style="{
          '--path': `${pathColorByName(pathNameById(player?.runes?.secondary?.path))}`,
        }"
        :data-id="pathNameById(player?.runes?.secondary?.path)"
        class="z-1 aspect-square bg-neutral/80 p-0! transition-all duration-300 hover:scale-110">
        <Icon
          :name="`path:${player?.runes?.secondary?.path}`"
          :class="cn('size-3.5 brightness-110 saturate-150 **:text-[var(--path)]!')" />
      </Button>
    </div>
  </div>
</template>