<script lang="ts" setup>
const {
  title = ['Skill', 'Priority'],
  class: className,
  separator,
  set,
} = defineProps<{
  class?: HTMLAttributes['class']
  set?: OrderedStatEntry
  title?: string | string[] | number
  separator?: boolean
}>()
const { skills } = storeToRefs(s_champion())

const route = useRoute()
const ckey = computed(() => String(route.params.champion_key))

const prio = computed(() => {
  if (!skills.value) return
  if (set) return set
  return Object.entries(skills.value.priority).sort(
    (a, b) => b[1].winrate - a[1].winrate
  )[0]
})
</script>

<template>
  <ChampStatRow simple :class="cn('', className)">
    <ChampStatLabel :separator :title="title" :stat="prio?.[1]" />
    <ChampStatRowWrapper v-if="prio">
      <template v-for="(k, i) in prio?.[0].split('>')" :key="k">
        <Icons
          v-if="i !== 0"
          class="size-4.5 **:stroke-[2.4]"
          size="sq-4"
          name="left"
        />
        <Ability :ckey :akey="k">
          <span
            class="absolute top-0 right-0 badge aspect-square size-6 rounded-t-none rounded-br-none badge-neutral bg-neutral/80 p-0 font-mono font-semibold shadow-sm dss backdrop-blur-sm"
          >
            {{ k }}
          </span>
        </Ability>
      </template>
    </ChampStatRowWrapper>
    <NoItemData v-else simple />
  </ChampStatRow>
</template>
