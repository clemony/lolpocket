<script lang="ts" setup>
const {
  akey,
  cid,
  ckey,
  id,
  class: className,
} = defineProps<{
  class?: HTMLAttributes["class"]
  ckey?: string
  id?: string
  cid?: number
  akey?: string
  loadingType?: LoadingStyle
  map?: number
  side?: Side
  disabled?: boolean
}>()

const loaded = ref(false)

const champ = computed(() => (cid ? champKeyById(cid) : ckey))

const ability = computed(() => id || `${champ.value}${akey}`)
const pinned = shallowRef<boolean>(false)
</script>

<template>
  <Tooltip
    interactive
    arrow
    :side
    :avatar="id ? `/img/abilities/${ability}.webp` : undefined"
    :label="akey || id || ckey || ''"
    trailing-icon="i-right-click"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        'rounded-xl  px-1': pinned,
      }),
    }"
    @pinned="pinned = true"
    @unpinned="pinned = false">
    <LazySpinner v-if="!loaded" class="absolute z-0" />
    <UAvatar
      :ui="{
        root: cn(
          'relative grid aspect-square size-15 place-items-center overflow-hidden rounded-md',
          { 'shadow-sm shadow-black/30 drop-shadow-sm': loaded },
          className,
        ),
      }"
      icon="i-ui-none"
      class="size-full shrink-0"
      :alt="ability"
      :src="`/img/abilities/${ability}.webp`"
      @load="loaded = true" />
    <template v-if="pinned" #content>
      <LazyAbilityTooltip v-if="id" :id />
    </template>
  </Tooltip>
</template>
