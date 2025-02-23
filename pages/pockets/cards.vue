<script setup lang="ts">
const ps = usePocketStore()
</script>

<template>
  <PageLayout>
    <template #header>
      <div class="flex items-center gap-4">
        <span class="">Pocket Cards</span>
        <Button
          variant="outline"
          size="icon"
          class=""
        >
          <icon
            name="material-symbols-light:stack-hexagon-outline"
            class="size-7 shrink-0"
          />
        </Button>
      </div>
    </template>

    <LayoutSpacer />

    <div class="flex w-full flex-wrap justify-between gap-8 pr-16 pl-12">
      <PocketCard
        v-for="pocket in ps.pockets"
        :key="pocket.key"
        :pocket="pocket"
      />
    </div>
  </PageLayout>
</template>

<style scoped></style>
