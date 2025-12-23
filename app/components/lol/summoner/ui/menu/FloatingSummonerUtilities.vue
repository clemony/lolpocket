<script lang="ts" setup>
const { api, champion, pocket } = defineProps<{
  api: SummonerInject
  pocket?: Pocket
  champion?: Champion
}>()

const route = useRoute()
</script>

<template>
  <Button
    data-theme="mini-tip base"
    :data-tip="api?.filterEmpty() ? 'No filters applied' : 'Clear filters'"
    size="c-14"
    :disabled="api?.filterEmpty()"
    class="disabled:pointer-events-none"
    :variant="api?.filterEmpty() ? 'floating' : 'neutral'"
    @click="api.clearFilters()">
    <Icon
      name="lucide:filter-x"
      class="" />
  </Button>
  <UpdateSummoner
    v-if="ss"
    placement="left"
    size="c-14"
    :state="ss" />
</template>