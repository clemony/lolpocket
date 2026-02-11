<script setup lang="ts"></script>

<template>
  <PopoverContent update-position-strategy="always" variant="outline">
    <UInput
      v-model:model-value="cs().filters.query"
      icon="i-search"
      class="peer"
      placeholder="search">
      <template #trailing>
        <InputClear @clear-input="cs().filters.query = ''" />
      </template>
    </UInput>
    <div
      class="relative grid h-108 w-full grid-cols-[1fr_calc(var(--spacing)*14)]">
      <div class="overflow-auto">
        <div
          class="flex grid w-full auto-rows-auto items-start gap-1 pt-4 pb-7 pl-4">
          <Label class="popover-button-label">
            Champion Role
            <UButton
              v-if="cs().filters.role"
              size="xs"
              class="size-6"
              variant="outline"
              @click="cs().filters.role = null">
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
                v-if="cs().filters.position !== 'all'"
                size="xs"
                class="size-6"
                variant="outline"
                @click="cs().filters.position">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <Label class="popover-button-label">
              Ability Resource
              <UButton
                v-if="cs().filters.resource"
                size="xs"
                class="size-6"
                variant="outline"
                @click="cs().filters.resource = null">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <MapPositionFilter />
            <ChampionResourceFilter />
          </div>
        </div>
      </div>
      <div
        class="sticky top-0 right-0 z-2 flex h-108 w-14 max-w-14 shrink-0 flex-col items-center justify-between gap-3 border-l border-l-p3 pt-3 pb-2 pb-3">
        <ToggleGroup
          v-model:model-value="cs().filters.sort"
          class="gap-0"
          type="single"
          as-child>
          <ToggleGroup orientation="vertical">
            <ToggleGroupItem size="sq-9" value="az">
              <icon class="size-5" name="qlementine-icons:sort-alpha-asc-16" />
            </ToggleGroupItem>
            <ToggleGroupItem size="sq-9" value="za">
              <icon class="size-5" name="qlementine-icons:sort-alpha-desc-16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ToggleGroup>
        <Grow class="max-w-14" />
        <UButton color="neutral" size="sm" @click="cs().clearFilters()">
          <icon class="size-4" name="reset" />
        </UButton>
      </div>
    </div>
  </PopoverContent>
</template>
