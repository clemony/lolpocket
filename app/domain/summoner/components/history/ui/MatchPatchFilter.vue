<script lang="ts" setup>
const patchModel = shallowRef<number | undefined>(undefined)
const store = matchFilter()
const patch = /(\d\d?\.\d\d?)\..+/
const p = computed(() => {
  return new Set(
    store.filteredMatches.map((m) =>
      m.gamePatch.toString().replace(patch, "$1")
    )
  ).values()
})
</script>

<template>
  <!--   class="w-full" placement="bottom-start" trigger="click focusin" :offset="[0,
  -30]" :delay="0" :duration="100" theme="base clean popover"
  :interactive="true" :arrow="false" > -->
  <UButton
    class="w-full justify-between bg-p0! text-sm hover:bg-p0! hover:ring hover:ring-pc/60 hover:fx-0"
    variant="outline">
    {{ store.filter?.patch ?? "Select Patch" }}

    <Icon class="size-4" name="up-down" />
  </UButton>
  <!--   <template #content>
    <div class="px-1.5 py-2">
      <UButton v-for="patch in p" :key="patch">
        <input
          v-model="patchModel"
          class="peer hidden"
          type="radio"
          name="patch-radio"
          :value="patch"
          @update:model-value="store.setFilter('patch', patchModel)"
        >
        {{ patch }}
      </UButton>
    </div>
  </template>  -->
</template>
