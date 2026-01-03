<script lang="ts" setup>
const { title, class: className, data, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
  data: OrderedTimedStatEntry[] | undefined
  title?: number | string | string[]
}>()
</script>

<template>
  <ChampStatRow :simple>
    <slot>
      <ChampStatLabel
        separator
        :title
        time />
    </slot>

    <ChampStatRowWrapper
      v-if="data && data?.length"
      :class="cn('', className)">
      <ChampStatObjectWrapper
        v-for="[k, v] in data"
        :key="k"
        :simple
        :stat="v">
        <Item
          :id="k"
          class="size-15" />
      </ChampStatObjectWrapper>
    </ChampStatRowWrapper>

    <NoItemData
      v-else
      :simple />
  </ChampStatRow>
</template>