<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    item: Item;
    class?: HTMLAttributes['class'];
  }>();
  const disabled = ref(false);
  watch(
    () => disabled,
    (newVal) => {
      console.log(newVal);
    }
  );
</script>

<template>
  <button
    @click.right="useDrawer('ItemDrawer', null, null, item)"
    class="shadow-warm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border-none inset-shadow-sm ring-1 hover:ring-offset-2">
    <LittleTip :content="props.item.name">
      <div :class="cn('size-full overflow-hidden rounded-lg', props.class)">
        <img
          :key="props.item.name"
          :src="`/img/item/${props.item.id}.webp`"
          :alt="props.item.name + ' Image'"
          class="aspect-square size-full" />
      </div>
    </LittleTip>
  </button>
</template>

<style scoped></style>
