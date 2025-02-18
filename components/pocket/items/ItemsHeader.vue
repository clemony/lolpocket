<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()
</script>

<template>


    <div class="[&_svg]:shrink-0  *:btn-square *:size-8 *:btn-ghost *:btn-sm flex gap-2 ">
      <button
        v-tippy="'Add Set'"
        class="btn  "
        @click="newItemSet(props.pocket.key)"
      >
        <icon
          name="add"
           class="size-4 stroke-[1.5]"
        />
      </button>
      <button
        v-tippy="'Reset All Items'"
        class="btn    "
      >
        <icon
          name="refresh"
          class="size-4 stroke-[1.5]"
        />
      </button>
      <button class="btn    ">
        <tippy
          tag="button"
          content-tag="div"
          content-class="content-wrapper"
        >
          <template #default>
            <icon
              name="teenyicons:question-outline"
              class="size-4 stroke-[1.5]"
            />
          </template>
          <template #content>
            <p class="items-center tracking-tight inline-block p-3">
              Drag items from the list at the right. Items are draggable & reorderable within sets and between them. Select

              <icon
                name="gg:check-o"
                class="size-5 drop-shadow-text mb-1.5 shrink-0 mx-1 inline-block text-white"
              />

              a set and

              <span class="text-5 ml-1 drop-shadow-text">⌘</span>
              <span class="text-4 px-1"> + </span>
              <icon
                name="ph:mouse-left-click-fill"
                class="size-5 drop-shadow-text scale-y-95 scale-x-105 shrink-0 mr-1 mb-1.25 inline-block text-white"
              />

              an item from the main list to quick add. Sets, themselves, can be dragged into your preferred order.
            </p>
          </template>
        </tippy>
      </button>
    </div>

</template>

<style scoped></style>
