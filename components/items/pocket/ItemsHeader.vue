<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const as = useAccountStore()
</script>

<template>
<div class="w-full flex pt-8 px-8">
  <div class="collapse items-center group -mt-2">
  <input type="checkbox" v-model="as.itemSetTipIsOpen"/>

  <div class="collapse-title font-semibold flex items-center pl-2.5 pr-3">
  <h1 class="dst grow">Sets</h1>
  <ExpandIndicator icon-class="!size-7 mb-1" class=" pr-0" />
  </div>
    <div class="collapse-content -mt-3 pl-0 dst">
       <p class="items-center tracking-tight inline-block p-3">
              Drag items from the list at the right. Items are draggable & re-orderable within sets and between them. Select

              <icon
                name="gg:check-o"
                class="size-5 drop-shadow-text mb-1.5 shrink-0 mx-1 inline-block text-bc"
              />

              a set and

              <span class="text-5 ml-1 drop-shadow-text">{{getDeviceKey()}}</span>
              <span class="text-4 px-1"> + </span>
              <icon
                name="ph:mouse-left-click-fill"
                class="size-5 drop-shadow-text scale-y-95 scale-x-105 shrink-0 mr-1 mb-1.25 inline-block text-bc"
              />

              an item from the main list to quick add. Sets, themselves, can be dragged into your preferred order.
            </p>
</div>

  </div>
    <div class="[&_svg]:shrink-0   *:btn-square *:hover:bg-b2/40 *:rounded-md  *:btn-ghost *:btn-md flex gap-2 ">
      <button
        v-tippy="'Add Set'"
        class="btn  "
        @click="newItemSet(props.pocket.key)"
      >
        <icon
          name="add"
           class="size-4 stroke-[1.5] dst"
        />
      </button>
       
     <!--  <button class="btn    ">
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
              Drag items from the list at the right. Items are draggable & re-orderable within sets and between them. Select

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
      </button>-->
    </div>
    </div>

</template>

<style scoped></style>
