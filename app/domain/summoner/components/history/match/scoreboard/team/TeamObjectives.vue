<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: any
  class?: HTMLAttributes["class"]
}>()

const objs = [
  {
    id: team.elder,
    name: "Elder",
  },
  {
    id: team.baron,
    name: "Baron",
  },

  {
    id: team.dragon,
    name: "Dragon",
  },
  {
    id: team.riftHerald,
    name: "Herald",
  },
  {
    id: team.horde,
    name: "Grub",
  },
  {
    id: team.inhibitor,
    name: "Inhibitor",
  },
  {
    id: team.tower,
    name: "Tower",
  },
]
</script>

<template>
  <div
    :class="
      cn(
        'grid shrink-0 auto-cols-fr grid-flow-col justify-center gap-3 **:font-semibold **:text-pc',
        className
      )
    ">
    <div
      v-for="obj in objs"
      :key="obj.name"
      class="flex w-9 items-center gap-1 tabular-nums"
      :data-type="`${obj.name} kills`">
      <div class="anchor size-4.5">
        <Img
          :alt="`${obj.name} icon`"
          :src="`/img/scoreboard/${obj.name.toLowerCase()}-${team.teamId}.webp`"
          :class="
            cn('size-4 shrink-0 opacity-85 drop-shadow-sm', {
              '-ml-2 size-5': obj.name === 'Tower',
              '-translate-y-px': obj.name === 'Grub',
              'size-3.75': obj.name === 'Baron',
            })
          " />
      </div>

      <span :class="{ '-ml-1.25': obj.name === 'Tower' }">
        {{ obj.id ?? 0 }}
      </span>
    </div>
  </div>
</template>
