<script lang="ts" setup>
const patchModel = shallowRef<number>(null)

const p = computed(() => {
  return new Set(s_matches().filteredMatches.map(m =>
    m.gamePatch.toString().replace(/(\d\d?\.\d\d?)\..+/, '$1'))).values()
})
</script>

<template>
  <tippy
    class="w-full"
    placement="bottom-start"
    trigger="click focusin"
    :offset="[0, -30]"
    :delay="0"
    :duration="100"
    theme="base clean popover"
    :interactive="true"
    :arrow="false"
  >
    <Button
      class="w-full justify-between bg-b1! text-sm hover:bg-b1! hover:ring hover:ring-bc/60 hover:fx-0"
      variant="input"
    >
      {{ s_matches().filter?.patch ?? "Select Patch" }}

      <Icon class="size-4" name="up-down" />
    </Button>
    <template #content>
      <div class="px-1.5 py-2">
        <PopoverItem v-for="patch in p" :key="patch">
          <input
            v-model="patchModel"
            class="peer hidden"
            type="radio"
            name="patch-radio"
            :value="patch"
            @update:model-value="s_matches().setFilter('patch', patchModel)"
          >
          {{ patch }}
        </PopoverItem>
      </div>
    </template>
  </tippy>
</template>
