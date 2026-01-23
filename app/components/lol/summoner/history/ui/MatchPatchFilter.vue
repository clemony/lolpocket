<script lang="ts" setup>
const { filter, filteredMatches, setFilter } = useSummonerInject()
const patchModel = shallowRef<number>(null)

const p = computed (() => new Set(filteredMatches.value.map(m => m.gamePatch.toString().replace(/(\d\d?\.\d\d?)\..+/, '$1'))))
</script>

<template>
  <tippy
    placement="bottom-start"
    trigger="click focusin"
    :offset="[0, -30]"
    :delay="0"
    :duration="100"
    class="w-full"
    theme="base clean popover"
    :interactive="true"
    :arrow="false">
    <Button
      variant="input"
      class="bg-b1! hover:bg-b1! hover:ring-bc/60 hover:fx-0 w-full justify-between text-sm hover:ring">
      {{ filter?.patch ?? 'Select Patch' }}

      <Icon
        name="select"
        class="size-4" />
    </Button>
    <template #content>
      <div class="px-1.5 py-2">
        <PopoverItem
          v-for="patch in p"
          :key="patch">
          <input
            v-model="patchModel"
            type="radio"
            class="peer hidden"
            name="patch-radio"
            :value="patch"
            @update:model-value="setFilter('patch', patchModel)" />
          {{ patch }}
        </PopoverItem>
      </div>
    </template>
  </tippy>
</template>