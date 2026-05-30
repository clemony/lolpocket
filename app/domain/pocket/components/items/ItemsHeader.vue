<script lang="ts" setup></script>

<template>
  <UPageHeader
    title="Item Sets"
    :ui="{ description: 'inline-block leading-7 tracking-tight' }">
    <template #description>
      Drag items from the list at the right. Items are draggable & re-orderable
      within sets and between them. Select

      <Icon
        class="mx-0.5 inline size-4.5 align-icon text-pc drop-shadow-sm"
        name="i-check-circle" />

      a set and

      <div
        class="mx-1 inline-flex shrink-0 items-center gap-1.5 align-middle leading-none">
        <UKbd square size="sm_" value="meta" class="font-bold" />

        <span class="text-lg leading-none font-semibold">+</span>

        <Icon
          class="inline size-4.25 align-baseline text-pc drop-shadow-sm **:stroke-[7.5%]!"
          name="i-mouse-right" />
      </div>

      an item from the main list to quick add. Drag entire sets to reorder set
      list.
    </template>
  </UPageHeader>
</template>
