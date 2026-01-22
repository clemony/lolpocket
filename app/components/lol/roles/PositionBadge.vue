<script lang="ts" setup>
const { class: className, position: pos, size = '7' } = defineProps<{
  class?: HTMLAttributes['class']
  position: ChampionPosition | string | null
  noLabel?: boolean
  size?: ButtonVariants['size']
  active?: boolean
  clear?: boolean
}>()
console.log('🌱 - p:', pos)

const position = computed(() => {
  if (typeof pos !== 'string')
    return pos

  return championPositions.find(p => p.name === String(pos))
})
</script>

<template>
  <Button
    v-if="position"
    variant="outline"
    hover="btn"
    :size
    :class="
      cn('w-fit gap-2.5! rounded-lg text-sm! font-medium! text-bc/90 capitalize',
         {
           'hover:**:text-bc hover:text-bc order-first text-white':
             active
             || (cs().filters.position && cs().filters.position === position.name),
           'pr-3': active && clear,
         },
         className,
      )
    "
    :style="{
      backgroundColor: `${(cs().filters.position && cs().filters.position === position.name) || active ? position.color : 'transparent'}`,
    }">
    <RoleIcon
      :position="position.name"
      class="text-white" />
    <slot>
      {{ position.name }}
    </slot>
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6]" />
  </Button>
</template>
