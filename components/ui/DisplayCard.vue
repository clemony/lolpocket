<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = withDefaults(
    defineProps<{
      title?: string;
      description?: string;
      open?: boolean;
      headerClass?: HTMLAttributes['class'];
      class?: HTMLAttributes['class'];
      noPadding?: boolean;
      noCollapse?: boolean;
    }>(),
    {
      open: true,
    }
  );

  const isOpen = ref(props.open);
  const emit = defineEmits(['update:open']);
</script>

<template>
  <Card
    :class="cn('relative h-fit w-full', props.class)"
    ref="card">
    <CardHeader
      :class="props.headerClass"
      class="header flex w-full px-5 py-5">
      <CardTitle class="flex w-full">
        <h4 v-if="props.title">{{ props.title }}</h4>
        <slot
          name="header"
          class="flex w-full gap-3" />
      </CardTitle>

      <CardDescription class="description text-3 pt-2">
        {{ props.description }}
        <slot name="description" />
      </CardDescription>
    </CardHeader>
    <CardContent
      :class="{ 'h-full max-h-full px-5': !props.noPadding }"
      as-child>
      <slot />
    </CardContent>
  </Card>
</template>

<style scoped></style>
