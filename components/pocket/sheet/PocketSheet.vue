<script lang="ts" setup>

</script>

<template>
  <Sheet :open="ts.pocketSheetTrigger" class="max-w-140">
    <SheetContent side="right" class="min-w-140 w-140 px-12 py-9" @interact-outside="ts.pocketSheetTrigger = false">
     <NewPocket  />
    </SheetContent>
  </Sheet>
</template>

<style scoped></style>
