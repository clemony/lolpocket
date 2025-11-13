<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import { useForwardProps } from "reka-ui";

const props = withDefaults(
  defineProps<
    NuxtLinkProps & {
      base?: ButtonVariants["base"];
      class?: HTMLAttributes["class"];
      hover?: ButtonVariants["hover"];
      on?: ButtonVariants["on"];
      size?: ButtonVariants["size"];
      variant?: ButtonVariants["variant"];
    }
  >(),
  {
    base: "btn",
    hover: "link",
    on: "btn",
    size: "12",
    variant: "link",
  },
);

const delegated = omitUIProps(props);
const forwarded = useForwardProps(delegated);
</script>

<template>
  <NuxtLink
    exact-active-class="btn-active"
    trailing-slash="remove"
    external-rel-attribute="noopener noreferrer"
    :class="
      cn(
        'capitalize duration-50',
        buttonVariants({ base, hover, on, size, variant }),
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot />
  </NuxtLink>
</template>
