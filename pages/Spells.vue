<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <main class="flex w-full gap-3">
    <div class="-mt-6 ml-96 w-[47%] max-w-[47%] items-center justify-center space-y-1">
      <div class="relative ml-3 flex w-fit items-center justify-center rounded-full">
        <div
          class="size-full [&_:first-child]:-top-[3.6rem] [&_:first-child]:-left-[0.7rem] [&_:last-child]:-top-[2.7rem] [&_:last-child]:-right-[2.4rem] [&_:nth-child(2)]:-top-[4rem] [&_:nth-child(2)]:left-[2rem]"
        >
          <ShardSet :pocket="pocket" />
        </div>
        <Keystone :pocket="pocket" />
        <div
          class="size-full [&_:first-child]:-top-[2rem] [&_:first-child]:-left-14 [&_:last-child]:-bottom-[3.6rem] [&_:last-child]:-left-[0.8rem] [&_:nth-child(2)]:-bottom-[1rem] [&_:nth-child(2)]:-left-[3.9rem]"
        >
          <RuneSet
            :pocket="pocket"
            type="runes1"
          />
        </div>
        <div class="z-0 size-full [&_:first-child]:-top-[0.3rem] [&_:first-child]:-right-[4rem] [&_:last-child]:-right-[2.7rem] [&_:last-child]:-bottom-[2.8rem]">
          <RuneSet
            :pocket="pocket"
            type="runes2"
          />
        </div>
      </div>
      <div class="flex w-full"></div>

      <!--
 -->
    </div>
    <!--         <div class="flex w-[53%] max-w-[53%] flex-col justify-end gap-3">
            <div class="flex flex-wrap justify-evenly gap-y-0.5">
                <MiniItemGrid :pocket="pocket" />
            </div>
            <div class="flex items-end justify-evenly gap-px">
                <SpellDisplay :pocket="pocket" />
            </div>
        </div> -->
  </main>
</template>

<style scoped></style>
