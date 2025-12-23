<script lang="ts" setup>
const overviewRef = useTemplateRef('overviewRef')

const { isActive, progressBetween } = useScrollSection(
  'overview',
  overviewRef
)
</script>

<template>
  <div
    id="overview"
    ref="overviewRef"
    class="h-150 w-full">
    <Card>
      winrate
    </Card>
    <Card>
      rank
    </Card>
  </div>
</template>