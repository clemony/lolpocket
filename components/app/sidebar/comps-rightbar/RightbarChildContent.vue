<script lang="ts" setup>

</script>

<template>
   <Motion as-child :layout="true">
      <CollapsibleContent class="CollapsibleContent w-full pl-8.5 pr-9.5 py-2 relative">
        <transition-slide group as="ul" class="before:w-px before:h-full  before:bg-b3/80 before:absolute before:left-7 before:top-3 flex flex-col-reverse gap-1  justify-center  pl-1 ">
          <slot  />
        </transition-slide>
      </CollapsibleContent>
    </Motion>
</template>