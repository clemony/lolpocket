<script lang="ts" setup>
import type { ProviderProps } from "#shared/types"
const props = defineProps<ProviderProps>()
</script>

<template>
  <UCard
    as="label"
    class="group h-max w-full cursor-pointer"
    :for="props.label"
    variant="outline">
    <div class="relative size-full">
      <UAvatar v-bind="props.avatar" />
      <div
        v-if="props.label"
        class="absolute -right-1.5 -bottom-0.5 z-1 grid size-6 shrink-0 place-items-center rounded-full bg-p0">
        <UAvatar
          :icon="String(props.icon)"
          size="2xs"
          :ui="{
            icon: cn('drop-shadow-none **:text-white/90!', props.class),
            root: cn(twBg[props.label])
          }" />
      </div>
    </div>
    <div class="grid w-full gap-0.75">
      <h3 class="truncate text-lg leading-none font-bold text-pc/80 capitalize">
        {{ props.label }}
      </h3>

      <div class="w-full space-x-1 truncate align-baseline *:inline">
        <h6 v-if="connected">
          {{ props.name }}
        </h6>
        <span class="inline w-full truncate text-xs text-n5">{{
          props.connected
            ? props.description
            : `Connect with ${capitalize(props.label)}`
        }}</span>
      </div>
    </div>
    <UButton
      :id="props.label"
      size="xs"
      :color="props.connected ? 'base' : 'neutral'"
      :variant="props.connected ? 'outline' : 'solid'"
      :label="props.connected ? 'Disconnect' : 'Connect'"
      :ui="{
        leadingIcon: cn('size-4 **:stroke-[1.6]'),
        label: cn('text-xs'),
        base: props.connected ? 'self-start shadow-none drop-shadow-none' : ''
      }" />
  </UCard>
</template>
