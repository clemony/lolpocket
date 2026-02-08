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
    class="stats grid h-29 min-h-29 w-full items-center overflow-hidden rounded-none! border-b border-p3/80">
    <div class="stat gap-2.5 pr-6 pb-5 pl-0! leading-none select-none">
      <div
        class="flex items-center gap-2 text-md font-semibold! text-nowrap text-pc/60">
        {{ title }}
      </div>
      <div
        class="flex w-full flex-nowrap items-center justify-between text-3xl! text-[1.8rem]">
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
