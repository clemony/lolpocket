<script lang="ts" setup>
  const ts = useTempStore()
</script>

<template>
  <div class="h-18 pl-5 pr-5.25 pt-5 pb-1 flex flex-col backdrop-blur-md bg-b1/70 absolute w-full z-10 top-0 left-0">
    <div class="flex items-center gap-4">
      <div class="bg-neutral rounded-md size-7 aspect-square overflow-hidden grid place-items-center text-nc shadow-sm">
        <span class="mt-px text-1">LP</span>
      </div>
      <h4 class="grow tracking-tight">lolpocket</h4>
      <LittleTip content="New Pocket">
        <Button
          variant="ghost"
          size="icon">
          <input
            type="checkbox"
            class="hidden"
            @change="console.log(ts.pocketDrawerTrigger)"
            v-model="ts.pocketDrawerTrigger" />
          <icon
            name="add-sm"
            class="size-6" />
        </Button>
      </LittleTip>
    </div>
  </div>
</template>

<style scoped></style>
