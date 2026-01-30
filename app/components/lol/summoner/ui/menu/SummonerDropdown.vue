<script lang="ts" setup>
const {
  variant = 'ghost',
  base = 'btn',
  class: className,
  hover = 'base',
  on = 'base',
  size,
} = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  base?: ButtonVariants['base']
  on?: ButtonVariants['on']
  hover?: ButtonVariants['hover']
}>()

const summoner = computed(() => s_session().summoner)

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  ui().blockDialog = true
} /*
    animation="shift-toward"
    theme="base clean no-arrow"
  */
</script>

<template>
  <UPopover
    v-if="summoner" mode="hover"
  >
    <Button
      size="11"
      :hover
      :variant
      :base
      :on
      :class="
        cn(
          'relative inline-flex gap-2 overflow-hidden p-0 leading-6',
          { 'btn-active': open, 'w-full-pl-0 rounded-full': !size },
          className,
        )
      "
    >
      <SummonerName class="truncate text-xl font-bold" :summoner />

      <SummonerTag class="truncate font-medium" :summoner />
      <LazySummonerIcon
        class="ml-4 size-9 rounded-full shadow-sm drop-shadow-sm"
        :summoner
      />
    </Button>
    <template #content>
      <SummonerCard />
    </template>
  </UPopover>
  <LazyBlockDialog :summoner />
</template>
