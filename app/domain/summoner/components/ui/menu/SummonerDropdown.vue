<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  variant = "ghost",

  class: className,

  size,
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
}>()

const summoner = computed(() => sSession().summoner)

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  session().blockDialog = true
} /*
    animation="shift-toward"
    theme="base clean no-arrow"
  */
</script>

<template>
  <UPopover
    v-if="summoner"
    mode="hover"
    :content="{ sideOffset: 6, align: 'start' }"
    :ui="{ content: 'w-(--reka-popper-anchor-width) rounded-4xl' }">
    <slot>
      <UButton
        size="md"
        color="base"
        variant="ghost"
        :ui="{
          base: 'w-74 justify-between overflow-hidden rounded-lg px-4 hover:bg-p0/70',
        }">
        <span class="inline-flex items-center gap-2 align-baseline">
          <h1 class="truncate text-xl font-bold">
            {{ summoner?.name }}
          </h1>

          <SummonerId type="tag" class="font-medium" :summoner />
        </span>
        <LazySummonerIcon
          class="ml-2 size-7! rounded-full shadow-sm drop-shadow-sm"
          :summoner />
      </UButton>
    </slot>
    <template #content>
      <SummonerCard />
    </template>
  </UPopover>
  <LazyBlockDialog v-if="summoner" :summoner="summoner" />
</template>
