<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()

const emit = defineEmits(['update:name'])
</script>

<template>
  <div class=" overflow-hidden  min-h-full max-h-screen  !w-105 min-w-105   px-6 py-4 [&_h2]:tracking-tight [&_p]:mt-2">
    <DialogHeader class="h-[8vh]">
      <DialogTitle>{{ props.title }}</DialogTitle>
      <DialogDescription class="text-bc" v-html="props.description" />
    </DialogHeader>

    <div class="[&_label]:text-3 relative flex h-[92vh] max-h-[92vh] w-full flex-col justify-start gap-6 overflow-clip pt-4 px-0.5">
      <div class="flex flex-col h-[13.5vh] gap-1">
        <Label>Pocket Name</Label>

        <div class="flex text-3 h-11 px-3 border-b3 border w-full rounded-md items-center shrink-0">
          <div class="grow">
            <slot name="name" />
          </div>
          <button v-tippy="'Clear'" variant="ghost" size="icon" class="btn btn-xs size-6  aspect-square" @click="ts.drawerChampSelectDropdown = null">
            <icon name="x" class="size-3 shrink-0" />
          </button>

          <span class="size-2"></span>

          <button v-tippy="'Random Champ'" variant="ghost" size="icon" class="btn size-6 btn-xs aspect-square relative group" @click.stop="emit('update:name', generateRandomString())">
            <icon name="qlementine-icons:shuffle-16" class="size-3.5 shrink-0" />

            <p class="text-2 absolute -top-9 -right-2 z-30 flex translate-y-1 flex-nowrap px-2 py-1 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
              No brain? Meet button.
            </p>
          </button>
        </div>

        <Label class="mt-3">Tags</Label>
        <slot name="tags" />
      </div>

      <div class="h-[66vh]">
        <slot />
      </div>

      <div class="z-50 flex w-full justify-end ">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
