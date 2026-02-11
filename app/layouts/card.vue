<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const route = useRoute()
</script>

<template>
  <UMain class="bg-p1">
    <UContainer class="pt-15">
      <UPage>
        <UPageHeader>
          <NuxtLink
            class="flex w-full items-center justify-center gap-3 self-center px-2"
            to="/">
            <h2 class="dst">
              lolpocket
            </h2>
          </NuxtLink>
        </UPageHeader>

        <UPageBody>
          <UCard
            class="w-full! max-w-180!"
            :ui="{
              header: 'my-2 text-center',
              footer:
                'text-center text-xs text-balance text-pc/60 [&_a]:underline [&_a]:underline-offset-1 [&_a]:hover:text-pc',
            }">
            <template #header>
              <h2 class="text-xxl">
                {{ route.meta?.title || route.name }}
              </h2>
              <p v-if="route.meta?.description" class="mt-1">
                {{ route.meta?.description }}
              </p>
            </template>
            <template #content>
              <slot />
            </template>
          </UCard>
          <template #footer>
            By continuing, you agree to our
            <NuxtLink to="/about/tos">
              Terms of Service
            </NuxtLink>
            <br />
            and
            <NuxtLink to="/about/privacy">
              Privacy Policy
            </NuxtLink>
            .
          </template>
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
