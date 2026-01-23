<script lang="ts" setup>
const { player } = defineProps<{
  player: Player
}>()
</script>

<template>
  <!-- runes -->
  <div class="pointer-events-none z-1 flex h-full translate-x-1.25 flex-col items-center gap-px *:pointer-events-auto">
    <!-- keystone -->
    <div class="bg-b1 z-2 grid size-4 place-items-center rounded-full">
      <Button
        variant="neutral"
        size="c-4"
        data-type="rune"
        class="bg-neutral/80 z-2 aspect-square p-0! transition-all duration-300 hover:scale-110"
        :data-id="player?.runes?.keystone">
        <img
          :src="`/img/runes/${player?.runes.keystone}.webp`"
          :alt="runeNameById(player?.runes.keystone)"
          class="dss absolute h-6 w-auto shrink-0 scale-150 object-contain" />
      </Button>
    </div>
    <!-- path -->
    <div class="bg-b1 z-1 mt-0.5 grid size-4 place-items-center rounded-full">
      <Button
        variant="neutral"
        data-type="path"
        size="c-4"
        :style="{
          '--path': `${pathColorByName(pathNameById(player?.runes?.secondary?.path))}`,
        }"
        :data-id="pathNameById(player?.runes?.secondary?.path)"
        class="bg-neutral/80 z-1 aspect-square p-0! transition-all duration-300 hover:scale-110">
        <img
          :alt="pathNameById(player?.runes?.secondary?.path)"
          :src="`/img/paths/${pathNameById(player?.runes?.secondary?.path)}.webp`"
          class="size-4" />
        <!--         <Icon
          :name="`path:${player?.runes?.secondary?.path}`"
          :class="cn('size-4 brightness-110 saturate-150 **:text-[var(--path)]!')" /> -->
      </Button>
    </div>
  </div>
</template>