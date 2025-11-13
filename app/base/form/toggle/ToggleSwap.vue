<script lang="ts" setup>
import type { ToggleProps } from "reka-ui";

interface ToggleItem {
  icon: string;
  text: string;
  variant: ToggleVariants["variant"];
}

const props = defineProps<
  ToggleProps & {
    items?: ToggleItem[];
    class?: HTMLAttributes["class"];
    size?: ToggleVariants["size"];
    base?: ToggleVariants["base"];
    hover?: ToggleVariants["hover"];
    value: boolean;
  }
>();

const emit = defineEmits(["update:model-value"]);
const buttonRef = ref<HTMLButtonElement>();
const modelValue = ref<boolean>(false);

const currentVariant = computed(() => {
  return modelValue.value ? props.items[1] : props.items[0];
});

const oppositeVariant = computed(() => {
  return modelValue.value ? props.items[0] : props.items[1];
});
console.log("🌱 - currentVariant:", currentVariant);

watch(
  () => currentVariant.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal);
  },
);

onMounted(() => {
  modelValue.value = props.value;
});
</script>

<template>
  <Toggle
    ref="buttonRef"
    v-model:model-value="modelValue"
    as="button"
    :class="
      cn(
        toggleVariants({ variant: currentVariant?.variant, size, base, hover }),
        `
        group relative w-max cursor-pointer overflow-hidden rounded-full border
        px-3 py-0! text-center
        data-[state=on]:bg-neutral/90
        hover:data-[state=on]:**:text-bc
      `,
        props.class,
      )
    "
    @update:model-value="emit('update:model-value', modelValue)"
  >
    <div class="relative flex size-full flex-nowrap items-center gap-2">
      <div
        :class="
          cn(
            toggleVariants({ variant: oppositeVariant?.variant }),
            `
              absolute -left-4 size-2 shrink-0 -translate-x-4 scale-100
              rounded-full p-0! shadow-none drop-shadow-xs transition-all
              duration-350
              group-hover:scale-[110]
            `,
          )
        "
      ></div>

      <span
        :class="
          cn(
            `
            mx-auto flex inline-block! flex-nowrap items-center gap-1
            text-nowrap whitespace-nowrap transition-all duration-350
            group-hover:translate-x-12 group-hover:opacity-0
          `,
          )
        "
      >
        <icon
          :name="currentVariant?.icon"
          class="inline size-3.5! align-[-1.5px]"
        />
        {{ currentVariant?.text }}
      </span>
    </div>

    <div
      :class="
        cn(
          toggleVariants({ variant: oppositeVariant?.variant }),
          `
            absolute top-0 z-10 flex size-full translate-x-24 items-center
            justify-center gap-2 opacity-0 transition-all duration-350
            group-hover:-translate-x-0 group-hover:opacity-100
          `,
        )
      "
    >
      <span class="flex items-center gap-1 whitespace-nowrap">
        <icon
          :name="oppositeVariant?.icon"
          class="inline size-3.5! align-[-1.5px]"
        />
        {{ oppositeVariant?.text }}
      </span>
    </div>
  </Toggle>
</template>
