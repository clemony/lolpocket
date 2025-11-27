<script lang="ts" setup>
const { matches } = useSummonerInject()
</script>

<template>
  <Collapsible class="field-box">
    <CollapsibleTrigger
      size="11"
      base="btn"
      class="w-full on:rounded-b-none on:border-b on:border-b-b3 on:no-underline on:hover:underline"
      variant="link">
      <Icon
        name="filter"
        class="size-4.5" />
      <span class="grow">
        Advanced
      </span>
      <CaretRotate />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <RadioGroup
        class="flex w-full flex-col justify-center gap-2 p-3"
        default-value="comfortable">
        <div class="flex items-center">
        </div>
        <div class="flex w-full items-center gap-2">
          <RadioGroupItem
            id="r1"
            value="default" />
          <Label
            for="r1"
            class="flex w-full items-center">
            <PatchDateRange />
          </Label>
        </div>
        <div class="flex w-full items-center gap-2">
          <RadioGroupItem
            id="r2"
            value="comfortable" />
          <Label
            for="r2"
            class="flex w-full items-center">
            <SelectNumberOfMatches />
            / {{ matches?.length }} games
          </Label>
        </div>
        <div class="flex w-full items-center gap-2">
          <RadioGroupItem
            id="r3"
            value="compact" />
          <Label
            class="flex w-full items-center"
            for="r3">
            <MatchPatchFilter />
          </Label>
        </div>
      </RadioGroup>
    </CollapsibleContent>
  </Collapsible>
</template>