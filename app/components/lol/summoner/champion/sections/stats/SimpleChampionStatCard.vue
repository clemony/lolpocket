<script lang="ts" setup>
const { title, icon } = defineProps<{
  icon?: string[]
  title: string
}>()
</script>

<template>
  <Card class="stats grid h-fit w-64 items-center">
    <CardContent class="stat h-fit gap-2 py-6 pr-12">
      <CardTitle class="stat-title flex items-center gap-2">
        <Icons
          v-if="icon"
          size="sq-3"
          :name="icon[0]"
          :class="icon[1]" />
        {{ title }}
      </CardTitle>
      <div class="stat-value">
        <slot />
      </div>
    <!--   <div class="stat-desc leading-none">
        {{ summoner?.name }} overall 2/4/16
      </div> -->
    </CardContent>
  </Card>
</template>

<style scoped>
  .stat-value {
  font-size: 1.8rem;
}
</style>