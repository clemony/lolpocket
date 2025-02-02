<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()

</script>

<template>
  <div class=" h-full">
    <DialogHeader>
      <h1 class="tracking-tight dst">
        {{ props.title }}
      </h1>
      <p class="text-bc mt-0" v-html="props.description" />
    </DialogHeader>

    <div class="[&_label]:text-3   flex flex-col justify-start gap-6  pt-8 px-0.5 h-full">
      <div class="flex flex-col  gap-1">
        <Label>Pocket Name</Label>

        <div class="flex text-3 h-11 px-3 border-b3 border w-full rounded-md items-center shrink-0">
          <div class="grow">
            <slot name="name" />
          </div>
       

          <span class="flex gap-1">
<slot name="name-buttons" />
   </span>
        </div>

        <Label class="mt-6">Tags</Label>
        <slot name="tags" />
      </div>

      <div class="relative inset-0 h-full">
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
