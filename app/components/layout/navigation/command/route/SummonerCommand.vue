<script lang="ts" setup>
const emit = defineEmits(["update:open"])
const { summoner, currentSummonerNav } = storeToRefs(sSession())

const nav = computed(() => ({
  id: "summoner",
  items: currentSummonerNav.value.children.map((item) => ({
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
  <div class="grid w-full grid-cols-[0.64fr_1fr] gap-x-3 self-start py-2 pl-4">
    <div class="flex size-full max-h-full flex-col gap-2 overflow-hidden">
      <UpdateSummonerCard @update:open="emit('update:open', $event)" />

      <SummonerCommunicationMenu
        variant="solid"
        color="p0"
        :ui="{ base: 'w-full! grow! shadow-xs drop-shadow-none' }" />
    </div>
    <div class="grid w-full auto-rows-auto justify-start gap-2 pt-1 pr-2">
      <div
        class="relative grid w-full grid-cols-[auto_30px] items-center overflow-hidden px-4.5">
        <div class="grow text-start">
          <div class="mb-1 inline-flex grow items-center gap-1 align-baseline">
            <span class="text-md font-bold">{{ summoner?.name }}</span>
            <span class="inline-flex flex-wrap items-center text-xs text-n4">
              <Icon
                name="i-hash"
                class="inline size-3 align-baseline text-n5" />
              {{ summoner?.tag }}
            </span>
          </div>
          <div class="text-xs text-n5">
            Deep dive into data analysis, pick {{ summoner?.name }}'s pockets,
            or view their current match status.
          </div>
        </div>
      </div>
      <div class="relative grid h-max items-center">
        <CommandGroup
          class="py-0 pt-0 pr-1"
          :ui="{ itemLeadingIcon: 'size-4' }"
          :items="nav" />
      </div>
    </div>
  </div>
</template>
