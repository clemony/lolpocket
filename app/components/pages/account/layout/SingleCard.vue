<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    class="flex size-full min-h-svh flex-col items-center justify-center gap-6 bg-tint-b2/40 p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 self-center justify-center w-full px-2">
        <h2 class="dst">
          lolpocket
        </h2>
      </NuxtLink>

      <div class="flex flex-col gap-6">
        <Card class="!max-w-180 !w-full">
          <CardHeader class="text-center my-2">
            <CardTitle
              class="text-6">
              {{ route.meta?.title || route.name }}
            </CardTitle>
            <CardDescription
              v-if="route.meta?.description"
              class="mt-1">
              {{ route.meta?.description }}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <slot />
          </CardContent>
        </Card>
        <div
          class="text-balance text-center text-1 text-bc/60 [&_a]:underline [&_a]:underline-offset-1 [&_a]:hover:text-bc">
          By continuing, you agree to our
          <a href="#">Terms of Service</a>
          <br />
          and
          <a href="#">Privacy Policy</a>
          .
        </div>
      </div>
    </div>
  </div>
</template>
