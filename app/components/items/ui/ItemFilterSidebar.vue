<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col h-full py-4 gap-8">
    <InputGroup class="h-12">
      <InputGroupAddon>
        <icon
          name="search"
          class="size-4.5 opacity-50" />
      </InputGroupAddon>
      <InputGroupInput
        v-model="is().filters.query"
        placeholder="search"
        class="peer" />
      <InputGroupClear @clear:input="is().filters.query = ''" />
    </InputGroup>

    <!-- stats -->
    <Collapsible
      v-slot="{ open }"
      :default-open="true">
      <CollapsibleTrigger
        class="flex w-full pl-1 py-2 text-bc/50 font-semibold cursor-pointer underline-offset-2 hover:underline items-center justify-between ">
        Statistics
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="CollapsibleContent w-full overflow-y-scroll overscroll-auto px-1.5 h-90 max-h-90">
        <ItemStatsList />
      </CollapsibleContent>
    </Collapsible>

    <!-- categories -->
    <Collapsible
      v-slot="{ open }"
      :default-open="true">
      <CollapsibleTrigger
        class="flex w-full pl-1 text-bc/50 font-semibold cursor-pointer underline-offset-2 hover:underline items-center justify-between py-2">
        Categories
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="CollapsibleContent w-full overflow-y-scroll overscroll-auto px-1.5 h-90 max-h-90">
        <ItemCategoriesList />
      </CollapsibleContent>
    </Collapsible>

    <!-- shop -->
    <ShopSwitch />

    <!-- map -->
    <div class="flex flex-col gap-3">
      <span class=" pl-1 text-bc/50 font-semibold">Map</span>
      <ItemMapFilter
        v-model:model-value="is().filters.map"
        class="w-full" />
    </div>

    <Button
      size="lg"
      variant="neutral"
      class=""
      @click="is().clearFilters()">
      Reset Filters
    </Button>
  </div>
</template>
