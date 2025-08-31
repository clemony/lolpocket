<script lang="ts" setup>
definePageMeta({
  layout: 'basic',
  name: 'Sign up',
  path: '/welcome',
  description: 'Login with your Riot, Google, or Discord account.',
  icon: 'gear',
})
</script>

<template>
  <div class="flex size-full min-h-svh flex-col items-center justify-center gap-6 bg-tint-b2/40 p-6 md:p-10">
    <Carousel class="relative w-full max-w-xs">
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <MotionByWord words="Just a few more things..." />

                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>