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
  <UPopover v-if="summoner" mode="hover" :content="{ sideOffset: 4 }">
    <UButton
      size="md"
      color="p1"
      variant="ghost"
      :ui="{
        base: 'w-74 rounded-lg px-4 justify-between hover:bg-p0/70',
      }">
      <span class="inline-flex items-center gap-2 align-baseline">
        <SummonerName class="truncate text-xl font-bold" :summoner />

        <SummonerTag class="truncate font-medium" :summoner />
      </span>
      <LazySummonerIcon
        class="ml-2 size-7! rounded-full shadow-sm drop-shadow-sm"
        :summoner />
    </UButton>
    <template #content>
      <SummonerCard />
    </template> </UPopover
  >>
  <LazyBlockDialog v-if="summoner" :summoner="summoner" />
</template>
