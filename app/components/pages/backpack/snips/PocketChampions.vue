<script lang="ts" setup>
const {
  class: className,
  champions: c,
  list,
} = defineProps<{
  class?: HTMLAttributes['class']
  champions: string[]
  list?: boolean
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
        'text-xs opacity-80 line-clamp-1 gap-1 grow items-center flex',
        className,
      )
    ">
    <template v-if="c?.length">
      <span
        v-for="champion in championsTxt"
        :key="champion"
        class="group/champion">
        {{ ix().champNameByKey(champion) }}
        <span class="group-last/champion:hidden">,&thinsp;</span>
      </span>
      <span
        v-if="c.length > 5"
        class="tracking-wider">
        +{{ c.length - 4 }}...
      </span>
    </template>
    <span
      v-else
      class="text-bc/60 italic">No champions</span>
  </div>

  <div
    v-else
    :class="cn('avatar-group  -space-x-5', className)">
    <template v-if="champions?.length">
      <template
        v-for="(champion, i) in champions"
        :key="champion">
        <div
          v-if="i < 3"
          class="avatar bg-b1 size-fit">
          <ChampionIcon
            :id="ix().champIdByKey(champion)"
            class="size-11 border-bc shadow-sm shadow-black rounded-full" />
        </div>
      </template>
    </template>
    <Placeholder
      v-else
      class="size-11 rounded-full mr-1"></Placeholder>
    <div
      v-if="champions?.length > 3"
      class="avatar avatar-placeholder">
      <div class="bg-neutral text-neutral-content w-11 text-xs">
        <span>+99</span>
      </div>
    </div>
  </div>
</template>
