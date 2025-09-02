<script lang="ts" setup>
</script>

<template>
  <transition-expand
    group
    class="flex flex-col h-full gap-8">
    <Input
      v-model:model-value="is().filters.query"
      placeholder="Search Items...">
      <icon name="bow" />
    </Input>

    <!-- stats -->
    <Collapsible
      v-slot="{ open }"
      :default-open="true">
      <CollapsibleTrigger class="flex w-full cursor-pointer underline-offset-2 hover:underline items-center justify-between h-9">
        <Label>Statistics
        </Label>
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent class="CollapsibleContent w-full overflow-y-scroll overscroll-auto px-1.5  h-90 max-h-90">
        <ItemStatsChecklist />
      </CollapsibleContent>
    </Collapsible>

    <!-- categories -->
    <Collapsible
      v-slot="{ open }"
      :default-open="true">
      <CollapsibleTrigger class="flex w-full cursor-pointer underline-offset-2 hover:underline  items-center justify-between h-9">
        <Label>
          Categories
        </Label>
        <PlusMinusExpand :open />
      </CollapsibleTrigger>
      <CollapsibleContent class="CollapsibleContent w-full overflow-y-scroll overscroll-auto px-1.5  h-90 max-h-90">
        <ItemCategoriesList />
      </CollapsibleContent>
    </Collapsible>

    <!-- shop -->
    <Label class="flex items-center justify-between gap-3">
      <span>{{ is().filters.purchasable ? 'Purchasable' : 'Purchasable & Unsold' }}</span>

      <Switch
        v-model:model-value="is().filters.purchasable"
        class="dst">
      </Switch>
    </Label>

    <!-- map -->
    <Label class="flex flex-col gap-3">
      <span>Map</span>
      <ItemMapFilter
        v-model:model-value="is().filters.map"
        class="w-full" />
    </Label>

    <Button
      size="lg"
      variant="neutral"
      class=""
      @click="is().clearFilters()">
      Reset Filters
    </Button>
  </transition-expand>
</template>