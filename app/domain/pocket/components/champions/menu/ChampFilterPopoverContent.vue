<script setup lang="ts">
const { filters } = storeToRefs(champFilter())
</script>

<template>
  <PopoverContent update-position-strategy="always" variant="outline">
    <UInput
      v-model:model-value="filters.query"
      icon="i-search"
      class="peer"
      placeholder="search">
      <template #trailing>
        <LazyInputClear @clear-input="filters.query = ''" />
      </template>
    </UInput>
    <div
      class="relative grid h-108 w-full grid-cols-[1fr_calc(var(--spacing)*14)]">
      <div class="overflow-auto">
        <div
          class="grid w-full auto-rows-auto items-start gap-1 pt-4 pb-7 pl-4">
          <Label class="popover-button-label">
            Champion Role
            <UButton
              v-if="filters.role"
              size="xs"
              class="size-6"
              variant="outline"
              @click="filters.role = []">
              <icon class="size-4" name="x" />
            </UButton>
          </Label>
          <ChampionRoleFilter />
          <Separator
            class="-mx-6 mt-4 mb-2 w-[calc(100%+var(--spacing)*12)] -translate-x-6" />

          <div class="grid w-full grid-cols-[0.56fr_1fr] gap-y-1 pr-8">
            <Label class="popover-button-label">
              Map Position
              <UButton
                v-if="filters.position !== 'all'"
                size="xs"
                class="size-6"
                variant="outline"
                @click="filters.position = 'all'">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <Label class="popover-button-label">
              Ability Resource
              <UButton
                v-if="filters.resource"
                size="xs"
                class="size-6"
                variant="outline"
                @click="filters.resource = null">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <MapPositionFilter />
            <ChampionResourceFilter />
          </div>
        </div>
      </div>
      <div
        class="sticky top-0 right-0 z-2 flex h-108 w-14 max-w-14 shrink-0 flex-col items-center justify-between gap-3 border-l border-l-p3 py-3">
        <UFieldGroup
          v-model:model-value="filters.sort"
          class="gap-0"
          type="single"
          as-child>
          <UFieldGroup orientation="vertical">
            <UButton size="sm_" value="az">
              <icon class="size-5" name="qlementine-icons:sort-alpha-asc-16" />
            </UButton>
            <UButton size="sm_" value="za">
              <icon class="size-5" name="qlementine-icons:sort-alpha-desc-16" />
            </UButton>
            <UButton size="sm_" value="release-newest">
              <span class="text-[10px] font-semibold uppercase">New</span>
            </UButton>
            <UButton size="sm_" value="release-oldest">
              <span class="text-[10px] font-semibold uppercase">Old</span>
            </UButton>
          </UFieldGroup>
        </UFieldGroup>
        <Grow class="max-w-14" />
        <UButton
          color="neutral"
          size="sm"
          @click="champFilter().clearFilters()">
          <icon class="size-4" name="reset" />
        </UButton>
      </div>
    </div>
  </PopoverContent>
</template>
