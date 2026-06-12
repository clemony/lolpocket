<script lang="ts" setup>
const props = defineProps<ProviderProps & { index: number }>()

const modelValue = defineModel<string | undefined>("modelValue")
</script>

<template>
  <UTooltip
    :content="{
      side: [2, 3].includes(index)
        ? 'bottom'
        : [0, 1].includes(index)
          ? 'top'
          : 'top'
    }"
    :text="props.connected ? 'Disconnect' : 'Connect'">
    <UCard
      :aria-label="`Connect with ${props.label}`"
      :aria-description="`Status: ${props.connected ? 'Connected' : 'Disconnected'}`"
      as="label"
      :ui="{
        root: cn(
          'group flex h-max w-full cursor-pointer flex-col items-center gap-3 divide-y-0 p-3 shadow-sm shadow-black/8 ring-p4/50 hover:bg-p3 hover:inset-shadow-sm hover:ring-pc/60 hover:ring-offset-1 hover:ring-offset-p3',
          { ' ': !props.connected }
        ),
        body: 'w-full max-w-full items-center gap-1 p-0!',
        header: 'flex items-center gap-2 p-0!'
      }"
      :for="props.label"
      variant="outline">
      <template #header>
        <div class="relative size-max">
          <UAvatar
            :ui="{ root: 'bg-n3', icon: 'text-nc' }"
            v-bind="props.avatar" />
          <div
            v-if="props.connected"
            class="absolute -right-1.5 -bottom-0.5 z-1 grid size-6 shrink-0 place-items-center rounded-full bg-p1 group-hover:bg-p2 group-hover:ring-p2">
            <UAvatar
              :icon="String(props.icon)"
              size="2xs"
              :ui="{
                icon: cn('drop-shadow-none **:text-white/90!', props.class),
                root: cn(twBg[props.label])
              }" />
          </div>
        </div>
      </template>
      <div
        class="relative flex w-full flex-col items-center gap-0.75 text-center">
        <!-- name -->
        <h3
          :class="
            cn(
              'w-full truncate text-center text-lg leading-none font-bold text-pc',
              {
                'text-pc/40 capitalize drop-shadow-none group-hover:text-pc/80':
                  !props.connected
              }
            )
          ">
          {{ props.name ?? props.label }}
        </h3>

        <!-- tag/description -->
        <span
          :class="
            cn('inlin w-full truncate text-center text-xs text-n5', {
              'text-p5 group-hover:text-pc/60': !props.connected
            })
          "
          >{{
            props.connected
              ? props.description
              : `Connect with ${capitalize(props.label)}`
          }}</span
        >

        <!--    <div class="pointer-events-auto grid h-full self-start pt-1">
        <HintTooltip :text="props.connected ? 'Disconnect' : 'Connect'">
          <USwitch :model-value="modelValue" size="sm" />
        </HintTooltip>
      </div> -->
      </div>
    </UCard>
  </UTooltip>
</template>
