<script lang="ts" setup>
const {
  title,
  class: className,
  data,
  simple,
} = defineProps<{
  class?: HTMLAttributes["class"]
  simple?: boolean
  data: OrderedTimedStatEntry[] | undefined
  title?: number | string | string[]
}>()
</script>

<template>
  <ChampStatRow :simple>
    <slot>
      <ChampStatLabel separator :title type="time" />
    </slot>

    <ChampStatRowWrapper v-if="data && data?.length" :class="cn('', className)">
      <ChampStatObjectWrapper
        v-for="[k, v] in data"
        :key="k"
        type="time"
        :stat="v">
        <Item :id="k" class="size-15" />
      </ChampStatObjectWrapper>
    </ChampStatRowWrapper>

    <NoRowData v-else :simple />
  </ChampStatRow>
</template>
