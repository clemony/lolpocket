<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  view: 'enemy' | 'team'
}>()

const { duos } = usePlayerStatsInject()
</script>

<template>
  <div
    :class="cn('flex flex-col gap-3', className)">
    <template v-if="duos?.[view]">
      <ChampStatRow
        v-for="role, i in duos[view]"
        :key="i">
        <ChampStatLabel
          separator
          type="synergy"
          :icon="[`role:${roleKey[i]}`, 'size-8 dst']" />
        <ChampStatRowWrapper
          v-if="role && role?.length"
          :class="cn('', className)">
          <ChampStatObjectWrapper
            v-for="c in role"
            :id="c.championId"
            :key="c.championId"
            type="synergy"
            :stat="c">
            <ChampionIcon
              :id="c.championId"
              class="size-15" />
          </ChampStatObjectWrapper>
        </ChampStatRowWrapper>

        <NoItemData
          v-else />
      </ChampStatRow>
    </template>
  </div>
</template>