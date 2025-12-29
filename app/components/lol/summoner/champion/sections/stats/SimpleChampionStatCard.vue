<script lang="ts" setup>
const { subtitle, title, icon } = defineProps<{
  icon?: string[]
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="stats grid h-28 w-full items-center rounded-none!">
    <div class="stat gap-2.5 pt-6 pr-12 pb-5 pl-0! leading-none select-none">
      <div class="stat-title flex items-center gap-2 text-2! font-medium!">
        <Icons
          v-if="icon"
          size="sq-3"
          :name="icon[0]"
          :class="icon[1]" />
        {{ title }}
      </div>
      <div class="stat-value text-7!">
        <slot />
      </div>
      <div class="stat-desc text-1! leading-none">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .stat-value {
  font-size: 1.8rem;
}
</style>