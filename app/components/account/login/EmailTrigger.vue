<script setup lang="ts">

defineOptions({
inheritAttrs: false
})
</script>

<template>
 <label  class="btn  w-full group h-18 relative overflow-hidden  hover:!btn-neutral hover:bg-neutral/90  " >

<!-- <div class="size-8   -mt-px dst bg-center bg-contain relative grid place-items-center bg-[url('/assets/img/grayscale-grain.svg')] mask-[url('/assets/icons/ui/at.svg')]" />

<icon name="at" :class="cn('absolute opacity-0 group-hover:opacity-100 dst size-8')" />
 -->
    <div class="size-full relative grid place-items-center" >
<icon name="mail-fill" :class="cn('absolute dst transition-colors duration-200  size-9  group-hover:!text-nc text-bc/80  ')" />


</div>
<slot  />
</label>
</template>