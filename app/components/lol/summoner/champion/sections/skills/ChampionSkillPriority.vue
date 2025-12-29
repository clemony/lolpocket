<script lang="ts" setup>
const { skills } = usePlayerStatsInject()

const route = useRoute()
const ckey = computed (() => String(route.params.champion_key))

const prio = computed (() => {
  if (!skills.value)
    return
  return Object.entries(skills.value.priority).sort((a, b) => b[1].winrate - a[1].winrate)[0]
})
</script>

<template>
  <div class="flex h-28 w-full grow items-center">
    <ChampStatLabel
      :title="['Skill', 'Priority']"
      :stat="prio?.[1]" />
    <div
      class="flex size-full items-center gap-2 border-b border-b3/80 px-3">
      <template
        v-for="k, i in prio?.[0].split('>')"
        :key="k">
        <Icons
          v-if="i !== 0"
          size="sq-4"
          name="left"
          class="size-4.5 **:stroke-[2.4]" />
        <Ability
          :ckey
          :akey="k">
          <span class="absolute top-0 right-0 badge aspect-square size-6 rounded-t-none rounded-br-none badge-neutral bg-neutral/80 p-0 font-mono font-semibold shadow-sm dss backdrop-blur">
            {{ k }}
          </span>
        </Ability>
      </template>
    </div>
  </div>
</template>