<script setup lang="ts">
</script>

<template>
  <PopoverContent
    update-position-strategy="always"
    variant="input">
    <InputGroup class="h-12 rounded-b-none border-x-0 border-t-0 hover:ring-0 pr-2">
      <InputGroupAddon>
        <icon
          name="search"
          class="size-4.5 opacity-50" />
      </InputGroupAddon>
      <InputGroupInput
        v-model="cs().filters.query" />
      <InputGroupClear
        class="mr-6"
        @clear:input="cs().filters.query = ''" />
      <InputGroupAddon align="inline-end">
        <icon
          name="filter"
          class="size-4.5 opacity-50" />
      </InputGroupAddon>
    </InputGroup>
    <div class="h-108 w-full relative grid-cols-[1fr_calc(var(--spacing)*14)] grid">
      <div
        ref="scrollArea"
        class="overflow-auto ">
        <div class=" pl-4 pb-7 pt-4 flex w-full items-start grid auto-rows-auto gap-1">
          <Label class="popover-button-label">
            Champion Role
            <Button
              v-if="cs().filters.role"
              size="sq-xxs"
              variant="outline"
              @click="cs().filters.role = null">
              <icon
                name="x"
                class="size-4" />
            </Button>
          </Label>
          <ChampionRoleFilter />
          <Separator class="-mx-6 mt-4 mb-2 w-[calc(100%+var(--spacing)*12)] -translate-x-6" />

          <div class="grid grid-cols-[0.56fr_1fr] w-full gap-y-1  pr-8">
            <Label class="popover-button-label">
              Map Position
              <Button
                v-if="cs().filters.position !== 'all'"
                size="sq-xxs"
                variant="outline"
                @click="cs().filters.position = 'all'">
                <icon
                  name="x"
                  class="size-4" />
              </Button>
            </Label>
            <Label class="popover-button-label">
              Ability Resource
              <Button
                v-if="cs().filters.resource "
                size="sq-xxs"
                variant="outline"
                @click="cs().filters.resource = null">
                <icon
                  name="x"
                  class="size-4" />
              </Button>
            </Label>
            <ChampionPositionFilter />
            <ChampionResourceFilter />
          </div>
        </div>
      </div>
      <div class="pb-2 shrink-0 max-w-14 flex flex-col justify-between gap-3 items-center pt-3 pb-3 z-2 border-l border-l-b3 sticky top-0 right-0 h-108 w-14  ">
        <ToggleGroup
          v-model:model-value="cs().filters.sort"
          type="single"
          class="gap-0"
          as-child>
          <ButtonGroup orientation="vertical">
            <ToggleGroupItem
              size="sq-sm"
              value="az">
              <icon
                name="qlementine-icons:sort-alpha-asc-16"
                class="size-5 " />
            </ToggleGroupItem>
            <ToggleGroupItem
              size="sq-sm"
              value="za">
              <icon
                name="qlementine-icons:sort-alpha-desc-16"
                class="size-5" />
            </ToggleGroupItem>
          </ButtonGroup>
        </ToggleGroup>
        <Grow class="max-w-14" />
        <Button
          variant="neutral"
          size="sq-sm"
          @click="cs().clearFilters()">
          <icon
            name="reset"
            class="size-4" />
        </Button>
      </div>
    </div>
  </PopoverContent>
</template>