<script lang="ts" setup></script>

<template>
  <div class="flex h-full flex-col gap-8 py-4">
    <InputGroup class="h-12">
      <InputGroupAddon>
        <icon class="size-4.5 opacity-50" name="search" />
      </InputGroupAddon>
      <InputGroupInput
        v-model="is().filters.query"
        class="peer"
        placeholder="search"
      />
      <InputGroupClear @clear-input="is().filters.query = ''" />
    </InputGroup>

    <!-- stats -->
    <Collapsible v-slot="{ open }" :default-open="true">
      <CollapsibleTrigger
        class="text-bc/50 flex w-full cursor-pointer items-center justify-between py-2 pl-1 font-semibold underline-offset-2 hover:underline"
      >
        Statistics
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="CollapsibleContent h-90 max-h-90 w-full overflow-y-scroll overscroll-auto px-1.5"
      >
        <ItemStatsList />
      </CollapsibleContent>
    </Collapsible>

    <!-- categories -->
    <Collapsible v-slot="{ open }" :default-open="true">
      <CollapsibleTrigger
        class="text-bc/50 flex w-full cursor-pointer items-center justify-between py-2 pl-1 font-semibold underline-offset-2 hover:underline"
      >
        Categories
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="CollapsibleContent h-90 max-h-90 w-full overflow-y-scroll overscroll-auto px-1.5"
      >
        <ItemCategoriesList />
      </CollapsibleContent>
    </Collapsible>

    <!-- shop -->
    <ShopSwitch />

    <!-- map -->
    <div class="flex flex-col gap-3">
      <span class="text-bc/50 pl-1 font-semibold">Map</span>
      <ItemMapFilter v-model:model-value="is().filters.map" class="w-full" />
    </div>

    <Button class="" size="12" variant="neutral" @click="is().clearFilters()">
      Reset Filters
    </Button>
  </div>
</template>
