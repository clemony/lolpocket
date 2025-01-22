<script lang="ts" setup></script>

<template>
  <div class="w-full flex items-center flex-nowrap gap-4 h-20 px-6 py-2">
    <h2 class="tracking-tighter text-nowrap grow">Item Sets</h2>

    <div class="join join-vertical lg:join-horizontal">
      <button
        v-tippy="'Add Set'"
        class="btn join-item">
        <icon
          name="add-sm"
          class="size-6" />
      </button>
      <button
        v-tippy="'Reset All Items'"
        class="btn join-item">
        <icon
          name="mynaui:refresh"
          class="size-4.5" />
      </button>
      <button class="btn join-item">
        <tippy
          tag="button"
          content-tag="div"
          content-class="content-wrapper">
          <template #default>
            <icon
              name="ant-design:question-outlined"
              class="size-4.5" />
          </template>
          <template #content>
            <p class="items-center tracking-tight inline-block p-3">
              Drag items from the list at the right. Items are draggable & reorderable within sets and between them. Select

              <icon
                name="gg:check-o"
                class="size-5 drop-shadow-text mb-1.5 shrink-0 mx-1 inline-block text-white" />

              a set and

              <span class="text-5 ml-1 drop-shadow-text">⌘</span>
              <span class="text-4 px-1"> + </span>
              <icon
                name="ph:mouse-left-click-fill"
                class="size-5 drop-shadow-text scale-y-95 scale-x-105 shrink-0 mr-1 mb-1.25 inline-block text-white" />

              an item from the main list to quick add. Sets, themselves, can be dragged into your preferred order.
            </p>
          </template>
        </tippy>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
