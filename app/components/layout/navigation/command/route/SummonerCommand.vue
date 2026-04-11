<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const emit = defineEmits(["update:open"])
const { summoner: sum, currentSummonerNav } = storeToRefs(sSession())

const summoner = computed(() => safeObject(sum.value))
const nav = computed(() => ({
  id: "summoner",
  items: currentSummonerNav.value.children.map((item: ButtonProps) => ({
    ...item,
    value: item.label,
    ui: {
      leadingIcon: cn("size-4.5", item.ui?.leadingIcon),
      trailingIcon: "size-3.25! **:stroke-[2.6] inline align-top"
    }
  }))
}))
</script>

<template>
  <div class="flex w-full flex-col px-3 py-2">
    <!--     <div class="flex size-full max-h-full flex-col gap-2 overflow-hidden">
      <UpdateSummonerCard @update:open="emit('update:open', $event)" />
    </div> -->
    <div class="w-full justify-start pt-1">
      <div class="flex w-full gap-3 pr-1.5 pl-1">
        <div class="relative grid w-14 justify-center self-center">
          <HoverIcon
            type="status"
            :avatar="{
              ui: { root: 'size-14 rounded-full' },
              status: { class: '-translate-y-2' }
            }"
            :summoner />
        </div>
        <div class="grow pr-6 text-start">
          <div class="mb-px inline-flex w-full gap-4">
            <div class="inline-flex">
              <span class="text-xl font-bold">{{ summoner.name }}</span>
              <SummonerId
                type="tag"
                class="ml-1 w-full text-xs text-n4"
                :summoner />
            </div>
            <UBadge
              size="xs"
              :label="`lv. ${summoner.level}`"
              color="neutral"
              :ui="{
                base: 'translate-y-0.5 font-medium'
              }" />
          </div>
          <div class="text-xs text-n5">
            Deep dive into data analysis, pick {{ summoner.name }}'s pockets, or
            view their current match status.
          </div>
        </div>
      </div>
      <div class="relative grid h-max items-center">
        <CommandButton
          v-for="(v, i) in nav.items"
          :key="i"
          class="py-0!"
          :ui="{ itemLeadingIcon: 'size-4' }"
          :item="v" />
      </div>
    </div>
  </div>
</template>
