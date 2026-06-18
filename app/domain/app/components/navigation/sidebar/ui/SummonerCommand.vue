<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const emit = defineEmits(["update:open"])
const { summoner: sum, currentSummonerNav } = storeToRefs(sSession())

const summoner = computed(() => safeObject(sum.value))
const nav = computed(() => ({
  id: "summoner",
  items: currentSummonerNav.value.children.map((item: ButtonProps) => ({
    ...item,
    value: String(item.to),
    ui: {
      leadingIcon: cn("size-4.5 **:stroke-[2.3]", item.ui?.leadingIcon),
      trailingIcon: "size-3.25! **:stroke-[2.6] inline align-top"
    }
  }))
}))

const tab = shallowRef<string>(useRoute().path)
</script>

<template>
  <div class="flex w-full flex-col gap-4 px-3 py-2">
    <!--     <div class="flex size-full max-h-full flex-col gap-2 overflow-hidden">
      <UpdateSummonerCard @update:open="emit('update:open', $event)" />
    </div> -->

    <!-- name of each tab group should be unique -->

    <UTabs
      v-model:model-value="tab"
      :items="nav.items"
      :ui="{
        leadingIcon: 'group-active:**:opacity-100!',
        indicator: '',
        trigger: 'pl-2',
        list: 'rounded-xl py-1.5!'
      }"
      color="neutral"
      @update:model-value="navigateTo(tab)" />

    <UCard
      :ui="{ root: 'w-full', body: 'flex items-center gap-3 px-4! py-4.5!' }">
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
            <span class="text-lg font-bold">{{ summoner.name }}</span>
            <SummonerId
              type="tag"
              class="ml-1 w-full text-xs text-n4"
              :summoner />
          </div>
          <UBadge
            size="xs"
            :label="`lv. ${summoner.level}`"
            color="primary"
            :ui="{
              base: 'translate-y-0.5 font-medium text-pc/70'
            }" />
        </div>
        <div class="text-sm text-n5">
          Deep dive into data analysis, pick {{ summoner.name }}'s pockets, or
          view their current match status.
        </div>
      </div>
    </UCard>
  </div>
</template>
