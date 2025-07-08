<script lang="ts" setup>
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'

const clem = ['/img/cat/clem1.webp', '/img/cat/clem0.webp', '/img/cat/clem2.webp', '/img/cat/clem3.webp']

const showClem = ref('/img/cat/clem1.webp')
</script>

<template>
  <Dialog>
    <DialogTrigger class="hover:underline underline-offset-2  flex  hover:bg-b2/35  cursor-pointer">
      <slot />
    </DialogTrigger>

    <MotionDialogContent class="!rounded-xl top-[10%] translate-y-1/4 !max-w-171">
      <DialogHeader>
        <DialogTitle>
          Clem
        </DialogTitle>

        <DialogDescription>
          Clementine Breakfast Cat
        </DialogDescription>
      </DialogHeader>

      <div class=" w-full max-h-150 overflow-hidden bg-black rounded-lg">
        <AnimatePresence mode="wait">
          <Motion
            :key="showClem"
            class="aspect-square shadow-warm"
            :initial="{ x: 10, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :exit="{ x: -10, opacity: 0 }"
            :transition="{ duration: 0.2 }">
            <img
              :src="showClem"
              class="w-full rounded-lg" />
          </Motion>
        </AnimatePresence>
      </div>

      <RadioGroupRoot v-model:model-value="showClem" orientation="horizontal" class="flex w-full justify-center gap-2 py-2">
        <RadioGroupItem v-for="(img, i) in clem" :id="`clem${i}`" :key="`clem${i}`" class="btn btn-sm focus:outline-0 focus:btn-n1 data-[state=checked]:btn-n1" name="clemRadio" :value="img">
          {{ i }}
        </RadioGroupItem>
      </RadioGroupRoot>
    </MotionDialogContent>
  </Dialog>
</template>

<style scoped>

</style>