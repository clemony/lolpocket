<script setup lang="ts"></script>

<template>
  <div
    class="h-screen w-screen  bg-b2/40 overflow-hidden">
    <div class="pt-[8.5vh] size-full overflow-hidden">
      <h1 class="text-9 h-20 px-28">
        Calculator
      </h1>
   <div class="size-full relative py-16">
    <div class="grid grid-rows-[1fr_2fr] grid-cols-1  justify-center">
      <div class="w-full">
        <div class="carousel carousel-center w-full mb-18">
          <div v-for="i in 3" :key="i" class="carousel-item flex w-full justify-center py-2 h-fit">

            <CalculatorSet :index="i"/>
   
          </div>
        </div>
<div class=" flex items-center justify-center w-full gap-2">
        <a v-for="i in 3"  :href="`#item${i}`" class="btn btn-sm">{{i}}</a>
        </div>
      </div>
      <div class=" justify-center self-start">
        <div class="mx-auto  h-180 w-1/2">
          <div class="tabs tabs-lift  tabs-lg size-full drop-shadow-md">
            <input type="radio" name="calculator-tabs" class="tab   w-32 text-3 px-6" aria-label="Stats" checked="true" />
            <div class="tab-content bg-b1 border-b3   size-full">
              <div class="size-full overflow-hidden  rounded-box">
                <div class="relative overflow-y-auto h-[99%] w-full">
                  <LazyCalculatorStatTotals />
                </div>
              </div>
            </div>

            <input type="radio" name="calculator-tabs" class=" w-32  text-3 tab" aria-label="Items" />
            <div class="tab-content bg-b1 border-b3 size-full">
              <div class=" overflow-hidden rounded-box size-full">
                <div class=" relative overflow-y-auto  h-[92%] w-full">
                  <LazyDraggableItemList class=" px-12 pb-12 overflow-y-auto" />
                </div>
              </div>
            </div>

            <input type="radio" name="calculator-tabs" class="tab   w-32 text-3 px-6" aria-label="Options"  />
            <div class="tab-content bg-b1 border-b3 pb-0  size-full">
              <div class="size-full overflow-hidden  rounded-box">
                <div class="relative overflow-y-auto h-[99%] w-full">
<LazyCalculatorOptions  />
                       </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div> </div>
</template>

<style scoped>

</style>
