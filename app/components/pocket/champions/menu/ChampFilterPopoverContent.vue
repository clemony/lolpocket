<script setup lang="ts"></script>

<template>
  <PopoverContent update-position-strategy="always" variant="outline">
    <InputGroup
      class="h-12 rounded-b-none border-x-0 border-t-0 pr-2 hover:ring-0"
    >
      <InputGroupAddon>
        <icon class="size-4.5 opacity-50" name="search" />
      </InputGroupAddon>
      <InputGroupInput v-model="cs().filters.query" />
      <InputGroupClear class="mr-6" @clear-input="cs().filters.query = ''" />
      <InputGroupAddon align="inline-end">
        <icon class="size-4.5 opacity-50" name="filter" />
      </InputGroupAddon>
    </InputGroup>
    <div
      class="relative grid h-108 w-full grid-cols-[1fr_calc(var(--spacing)*14)]"
    >
      <div class="overflow-auto">
        <div
          class="flex grid w-full auto-rows-auto items-start gap-1 pt-4 pb-7 pl-4"
        >
          <Label class="popover-button-label">
            Champion Role
            <Button
              v-if="cs().filters.role"
              size="xs"
              class="size-6"
              variant="outline"
              @click="cs().filters.role = null"
            >
              <icon class="size-4" name="x" />
            </Button>
          </Label>
          <ChampionRoleFilter />
          <Separator
            class="-mx-6 mt-4 mb-2 w-[calc(100%+var(--spacing)*12)] -translate-x-6"
          />

          <div class="grid w-full grid-cols-[0.56fr_1fr] gap-y-1 pr-8">
            <Label class="popover-button-label">
              Map Position
              <Button
                v-if="cs().filters.position !== 'all'"
                size="xs"
                class="size-6"
                variant="outline"
                @click="cs().filters.position"
              >
                <icon class="size-4" name="x" />
              </Button>
            </Label>
            <Label class="popover-button-label">
              Ability Resource
              <Button
                v-if="cs().filters.resource"
                size="xs"
                class="size-6"
                variant="outline"
                @click="cs().filters.resource = null"
              >
                <icon class="size-4" name="x" />
              </Button>
            </Label>
            <MapPositionFilter />
            <ChampionResourceFilter />
          </div>
        </div>
      </div>
      <div
        class="sticky top-0 right-0 z-2 flex h-108 w-14 max-w-14 shrink-0 flex-col items-center justify-between gap-3 border-l border-l-b3 pt-3 pb-2 pb-3"
      >
        <ToggleGroup
          v-model:model-value="cs().filters.sort"
          class="gap-0"
          type="single"
          as-child
        >
          <ButtonGroup orientation="vertical">
            <ToggleGroupItem size="sq-9" value="az">
              <icon class="size-5" name="qlementine-icons:sort-alpha-asc-16" />
            </ToggleGroupItem>
            <ToggleGroupItem size="sq-9" value="za">
              <icon class="size-5" name="qlementine-icons:sort-alpha-desc-16" />
            </ToggleGroupItem>
          </ButtonGroup>
        </ToggleGroup>
        <Grow class="max-w-14" />
        <Button color="neutral" size="sm" @click="cs().clearFilters()">
          <icon class="size-4" name="reset" />
        </Button>
      </div>
    </div>
  </PopoverContent>
</template>
