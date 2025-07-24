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
      :class="cn('!rounded-xl top-[10%] translate-y-1/4 !max-w-171', props.class)">
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

<style scoped>

</style>