<script lang="ts" setup>

</script>

<template>
    <CollapsibleTrigger class="btn !gap-4 items-center capitalize btn-ghost btn-lg group/btn text-3 font-medium w-full cursor-pointer justify-start data-[state=open]:bg-b2 data-[state=open]:border-b3 data-[state=open]:border-x data-[state=open]:border-t data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
      <slot  />

<Grow  />

<slot name="counter"  />
      <icon name="up-sm" class="group-data-[state=open]/btn:-rotate-180 ml-2.5 -mr-1.5 size-4.5 tldr-30" />
    </CollapsibleTrigger>
</template>