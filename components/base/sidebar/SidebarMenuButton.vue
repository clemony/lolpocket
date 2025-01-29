<script setup lang="ts">
  import SidebarMenuButtonChild, { type SidebarMenuButtonProps } from './SidebarMenuButtonChild.vue';
  import { useSidebar } from './utils';
  const ts = useTempStore();
  defineOptions({
    inheritAttrs: false,
  });

  const as = useAccountStore();

  const props = withDefaults(
    defineProps<
      SidebarMenuButtonProps & {
        tooltip?: string | Component;
        size?: string;
      }
    >(),
    {
      as: 'button',
      variant: 'default',
      size: 'default',
    }
  );

  //const savedState = ref(as.sidebarState)

  const { isMobile, state } = useSidebar();
  watch(
    () => state,
    (newVal) => {
      console.log(newVal);
    }
  );
  const delegatedProps = computed(() => {
    const { tooltip, ...delegated } = props;
    return delegated;
  });

  const open = ref(ts.sidebarOpen);
  const size = computed(() => {
    const a = open.value ? 'lg' : !open.value ? 'icon' : 'default';
    return a;
  });

  const classObject = computed(() => {
    if (!open.value) {
      return 'size-8 grid place-items-center !aspect-square';
    } else {
      return;
    }
  });
</script>

<template>
  <SidebarMenuButtonChild
    v-if="!tooltip"
    v-bind="{ ...delegatedProps, as: props.as as string, ...$attrs }">
    <slot />
  </SidebarMenuButtonChild>

  <TooltipRoot v-else>
    <TooltipTrigger as-child>
      <SidebarMenuButtonChild
        v-bind="{
          ...delegatedProps,
          as: props.as as string,
          ...$attrs,
        }"
        class="cursor-pointer">
        <slot />
      </SidebarMenuButtonChild>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      align="center"
      :hidden="state !== 'collapsed' || isMobile"
      class="border-b3 invisible opacity-0"
      :class="{ 'visible opacity-100': state == 'collapsed' }">
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>
      <component
        :is="tooltip"
        v-else />
    </TooltipContent>
  </TooltipRoot>
</template>
