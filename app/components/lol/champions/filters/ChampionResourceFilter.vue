<script setup lang="ts">
import { championResources } from "#shared/references";

const {
  class: className,
  clear = false,
  hover = "btn",
  size = ["sq-8", "8"],
  variant = "ghost",
} = defineProps<{
  class?: HTMLAttributes["class"];
  clear?: boolean;
  size?: ButtonVariants["size"][];
  variant?: ButtonVariants["variant"];
  hover?: ButtonVariants["hover"];
}>();
</script>

<template>
  <Listbox v-model:model-value="cs().filters.resource" :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="
          cn(
            `
          relative z-1 flex max-h-60 w-9/10 w-full flex-col flex-wrap
          items-center items-start gap-x-7 gap-y-3 py-0
        `,
            className,
          )
        "
      >
        <Button
          v-if="cs().filters.resource && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.resource = null"
        >
          <icon name="x" class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="resource in championResources"
          :key="resource.name"
          class="bg-transparent fx-0"
          :value="resource.name"
          as-child
        >
          <ResourceBadge as="label" :variant :size="size[1]" :resource>
          </ResourceBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
