<script lang="ts" setup>
const { subtitle, title, icon, value } = defineProps<{
  icon?: string[]
  title: string
  value?: string | number
  subtitle?: string
}>()
</script>

<template>
  <div
    class="stats border-b3/80 grid h-29 min-h-29 w-full items-center overflow-hidden rounded-none! border-b"
  >
    <div class="stat gap-2.5 pr-6 pb-5 pl-0! leading-none select-none">
      <div
        class="text-md text-bc/60 flex items-center gap-2 font-semibold! text-nowrap"
      >
        {{ title }}
      </div>
      <div
        class="stat-value flex w-full flex-nowrap items-center justify-between text-3xl!"
      >
        <span class="grow">
          <slot>
            {{ value }}
          </slot>
        </span>
        <div class="grid size-3 place-items-center">
          <Icon v-if="icon" :name="icon[0]" :class="cn(icon[1], 'absolute')" />
        </div>
      </div>
      <div class="stat-desc text-xs! leading-none">
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
