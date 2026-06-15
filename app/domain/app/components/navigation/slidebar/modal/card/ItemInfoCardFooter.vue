<script lang="ts" setup>
const { item, expanded, has } = defineProps<{
  item: Item
  expanded: boolean
  has?: ComputedRef<boolean>
}>()

const emit = defineEmits(["toggleExpanded"])
</script>

<template>
  <div
    class="flex h-8.5 w-full items-center gap-2 overflow-hidden rounded-t-lg rounded-b-4xl hover:bg-n4/60! hover:inset-ring-n4!">
    <UButton
      v-if="has"
      color="transparent"
      icon="i-up"
      size="xs"
      :ui="{
        base: 'anchor toggle-more size-full!',
        leadingIcon: cn(
          'transition-rotate col-start-2 text-nc/40 duration-200 ease-spring-soft group-hover/btn:text-nc',
          {
            'rotate-180': expanded,
          }
        ),
      }"
      aria-label="Close"
      :aria-describedby="`Collapse ${item?.name} additional info.`"
      @click="emit('toggleExpanded')" />
    <div
      class="align-center absolute right-2 inline-flex justify-end gap-1.5 px-2 font-medium">
      <Icon
        class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
        name="i-lp-gold"
        alt="item price" />
      {{ item.gold?.total }}
    </div>
  </div>
</template>
