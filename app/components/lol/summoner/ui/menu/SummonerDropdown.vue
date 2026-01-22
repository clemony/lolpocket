<script lang="ts" setup>
const {
  api,
  base = 'btn',
  class: className,
  hover = 'base',
  on = 'base',
  size,
  variant = 'ghost',
} = defineProps<{
  class?: HTMLAttributes['class']
  api: SummonerApi
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  base?: ButtonVariants['base']
  on?: ButtonVariants['on']
  hover?: ButtonVariants['hover']
}>()

const summoner = computed (() => toValue(api?.summoner))

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  ui().blockDialog = true
}
</script>

<template>
  <tippy
    v-if="api"
    :interactive="true"
    animation="shift-toward"
    theme="base clean no-arrow">
    <Button
      size="11"
      :class="
        cn('relative inline-flex gap-2 overflow-hidden p-0 leading-6',
           buttonVariants({ size, hover, variant, base, on }),
           { 'btn-active': open,
             'w-full-pl-0 rounded-full': !size,
           },
           className,
        )
      ">
      <SummonerName
        :summoner
        class="truncate text-xl font-bold" />

      <SummonerTag
        :summoner
        class="truncate font-medium" />
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="ml-4 size-9 rounded-full shadow-sm drop-shadow-sm" />
    </Button>
    <template #content>
      <SummonerCard :api />
    </template>
  </tippy>
  <LazyBlockDialog
    :summoner />
</template>
