<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const route = useRoute()
</script>

<template>
  <div
    class="bg-tint-b2/40 flex size-full min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
  >
    <div class="flex w-full max-w-md flex-col gap-6">
      <NuxtLink
        class="flex w-full items-center justify-center gap-3 self-center px-2"
        to="/"
      >
        <h2 class="dst">
          lolpocket
        </h2>
      </NuxtLink>

      <div class="flex flex-col gap-6">
        <Card class="w-full! max-w-180!">
          <CardHeader class="my-2 text-center">
            <CardTitle class="text-xxl">
              {{ route.meta?.title || route.name }}
            </CardTitle>
            <CardDescription v-if="route.meta?.description" class="mt-1">
              {{ route.meta?.description }}
            </CardDescription>
          </CardHeader>
          <CardContent :class="cn('', className)">
            <slot />
          </CardContent>
        </Card>
        <div
          class="text-bc/60 [&_a]:hover:text-bc text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-1"
        >
          By continuing, you agree to our
          <a href="#">Terms of Service</a>
          <br>
          and
          <a href="#">Privacy Policy</a>
          .
        </div>
      </div>
    </div>
  </div>
</template>
