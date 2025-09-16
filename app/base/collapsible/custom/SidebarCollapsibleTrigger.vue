<script lang="ts" setup></script>

<template>
  <CollapsibleTrigger
    as-child
    class="flex items-center justify-start group/trigger overflow-hidden">
    <Btn>
      <slot />

      <Grow />

      <icon
        name="up"
        class="size-5 group-data-[state=open]/trigger:-rotate-180 transition-rotate duration-300 sidebar-child justify-self-end expand-hide" />
    </Btn>
  </CollapsibleTrigger>
</template>
