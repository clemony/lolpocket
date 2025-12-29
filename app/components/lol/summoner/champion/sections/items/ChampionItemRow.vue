<script lang="ts" setup>
const { title, class: className, data, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
  data: OrderedTimedStatEntry[] | undefined
  title?: number | string | string[]
}>()
</script>

<template>
  <div :class="cn('flex w-full flex-nowrap items-center overflow-hidden', { 'pb-3': !simple }, className)">
    <slot>
      <StatSingleLabels
        :title
        time />
    </slot>

    <ChampStatRowWrapper>
      <template v-if="data && data?.length">
        <ChampStatObjectWrapper
          v-for="[k, v] in data"
          :key="k"
          :simple
          :stat="v">
          <Item
            :id="k"
            class="size-15" />
        </ChampStatObjectWrapper>
      </template>

      <NoItemData v-else />
    </ChampStatRowWrapper>
  </div>
</template>