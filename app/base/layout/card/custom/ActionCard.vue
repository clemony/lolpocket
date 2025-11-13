<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

const {
  title,
  as = "label",
  button,
  class: className,
  hover,
  text,
} = defineProps<{
  title?: string;
  text?: string;
  button?: string;
  class?: HTMLAttributes["class"];
  hover?: boolean;
  as?: string;
}>();
</script>

<template>
  <Card
    :as="as"
    :for="title"
    class=""
    :class="
      cn(
        `
          grid h-50 w-110 max-w-110 justify-start justify-items-start gap-2
          rounded-xl pt-8 pb-6
          *:px-7
          **:text-start
        `,
        { 'hover:!bg-b2/60 hover-ring': hover },
        className,
      )
    "
  >
    <CardTitle class="text-5self-start dst">
      <slot name="title">
        {{ title }}
      </slot>
    </CardTitle>
    <CardDescription
      class="inline self-start align-baseline leading-6 text-pretty opacity-70"
    >
      <slot name="text">
        {{ text }}
      </slot>
    </CardDescription>
    <p v-if="button" class="flex w-full items-center justify-end px-6.75">
      <Button variant="neutral" class="hover-ring">
        {{ button }}
      </Button>
    </p>
    <p v-else class="mt-2 flex items-center gap-4 font-medium italic">
      <Switch
        :id="title"
        v-bind="$attrs"
        class="pointer-events-auto! hover-ring"
      />
      <slot />
    </p>
  </Card>
</template>
