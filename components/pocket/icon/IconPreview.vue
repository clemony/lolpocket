<script lang="ts" setup>
const props = defineProps<{
  iconColor: string
  bgColor: string
  selectedIcon: string
  iconImg: boolean
}>()
</script>

<template>
  <div class="grid gap-3 pr-0">
    <Label class="mb-px">Preview</Label>
    <Button
      size="icon"
      class="size-14.5 overflow-hidden"
    >
      <div
        v-if="iconImg"
        class="grid size-full place-items-center"
      >
        <img
          :src="selectedIcon"
          class="scale-[115%]"
        />
      </div>

      <div
        v-else
        class="grid size-full place-items-center !p-3"
        :style="{
          backgroundColor: bgColor,
          color: iconColor,
        }"
      >
        <icon
          v-if="selectedIcon"
          :style="{ color: iconColor }"
          :name="`${selectedIcon}`"
          class="size-full object-contain"
        />
      </div>
    </Button>
  </div>
</template>

<style scoped>

</style>
