<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  title?: string
  text?: string
}>()
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot name="trigger" />
    </DialogTrigger>

    <MotionDialogContent
      class=""
      :class="
        cn('top-[10%] !max-w-171 translate-y-1/4 !rounded-xl', props.class)
      ">
      <DialogHeader>
        <DialogTitle>
          {{ props.title }}
        </DialogTitle>

        <DialogDescription>
          {{ props.text }}
        </DialogDescription>
      </DialogHeader>

      <slot />
    </MotionDialogContent>
  </Dialog>
</template>

<style scoped></style>
