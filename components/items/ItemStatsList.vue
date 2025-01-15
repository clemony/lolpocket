<script setup lang="ts">
  import { stats } from 'shared/data/item';
  const ts = useTempStore();
</script>
<template>
  <Card class="max-h-1/2 overflow-hidden p-0">
    <ScrollArea as-child>
      <div class="flex h-70 w-full flex-col overflow-y-auto p-2">
        <Label
          variant="ghost"
          size="lg"
          v-for="stat in stats"
          :key="stat.id"
          class="hover:bg-b2/50 flex w-full shrink-0 items-center gap-5 px-4 transition-opacity duration-500">
          <span class="grow">{{ stat.displayName }}</span>
          <input
            type="checkbox"
            class="checkbox checkbox-sm checkbox-neutral checked:bg-neutral checked:text-b1 rounded-sm"
            :value="stat.id"
            v-model="ts.browseItemStats" />
        </Label>
      </div>
    </ScrollArea>
  </Card>
</template>
<style scoped></style>
