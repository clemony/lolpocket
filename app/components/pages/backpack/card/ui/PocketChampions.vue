<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"

const {
  champions: c,
  class: className,
  list,
  avatar
} = defineProps<{
  class?: HTMLAttributes["class"]
  champions: string[]
  list?: boolean
  avatar?: AvatarProps
}>()

const championsTxt = computed(() => {
  const a = [...c].sort()
  return a.length > 5 ? a.slice(0, 4) : a
})
const champions = computed(() => [...c].slice(0, 3).reverse())
</script>

<template>
  <div
    v-if="list"
    :class="
      cn(
        'line-clamp-1 flex grow items-center gap-1 text-sm opacity-80',
        className
      )
    ">
    <template v-if="c?.length">
      <span
        v-for="champion in championsTxt"
        :key="champion"
        class="group/champion">
        {{ champNameByKey(champion) }}
        <span class="group-last/champion:hidden">,&thinsp;</span>
      </span>
      <span v-if="c.length > 5" class="tracking-wider">
        +{{ c.length - 4 }}...
      </span>
    </template>
    <span v-else class="text-pc/60 italic">No champions</span>
  </div>

  <UAvatarGroup
    v-else
    size="sm"
    :max="4"
    :ui="{ root: cn('', className), base: 'shrink-0' }">
    <template v-if="champions.length">
      <UAvatar
        v-for="champion in champions"
        :key="champion"
        :size="avatar?.size || 'sm'"
        :src="`/img/champion/${champIdByKey(champion)}.webp`" />
    </template>
    <UAvatar v-else :size="avatar?.size || 'sm'" icon="i-lp-champ" />
  </UAvatarGroup>
</template>
