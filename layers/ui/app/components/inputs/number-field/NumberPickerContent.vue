<script lang="ts" setup></script>

<template>
  <NumberFieldContent
    class="
      bg-neutral/85 **:text-nc grid h-10 items-center rounded-lg border
      shadow-sm drop-shadow-sm *:first:*:size-5 *:first:cursor-pointer
      *:last:*:size-5 *:last:cursor-pointer *:focus:ring-0!
    ">
    <slot />
  </NumberFieldContent>
</template>
