<script lang="ts" setup>
definePageMeta({
  title: 'Complete Sign Up',
  description: 'Welcome to lolpocket!',
  icon: 'gear',
  path: '/auth/new-user',
  search: 'hidden',
})
</script>

<template>
  <div
    class="flex size-full min-h-svh flex-col items-center justify-center gap-6 bg-tint-p2/40 p-6 md:p-10">
    <Carousel class="relative w-full max-w-xs">
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index">
          <div class="p-1">
            <Card>
              <CardContent
                class="flex aspect-square items-center justify-center p-6">
                <MotionByWord words="Just a few more things..." />

                <span class="text-5xl font-semibold">{{ index + 1 }}</span>
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
