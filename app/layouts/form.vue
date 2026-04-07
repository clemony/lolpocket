<script lang="ts" setup>
const {
  class: className,
  title,
  description
} = defineProps<{
  class?: HTMLAttributes["class"]
  title?: string
  description?: string
}>()
const route = useRoute()
const error = shallowRef<string>("")
</script>

<template>
  <UMain
    class="relative my-auto grid size-full place-items-center bg-p1 backdrop-blur-md">
    <div class="absolute top-4 right-4">
      <slot name="close" />
    </div>
    <div
      class="relative flex w-full max-w-140 flex-col items-center justify-center gap-4">
      <div
        class="absolute -top-32 mb-4 flex h-32 w-full flex-col items-center justify-end pb-4">
        <UAlert
          v-if="error"
          :ui="{
            root: cn(
              'absolute w-full py-3 transition-[opacity,transform] transition-discrete duration-400',
              {
                'translate-y-0 opacity-100': error,
                ' -translate-y-1/2 opacity-0': !error
              }
            ),
            close: '-top-2.5 -right-3'
          }"
          :description="error"
          icon="i-ri-information-2-fill"
          close
          title="Error!"
          @update:open="(e) => (e === false ? (error = '') : '')" />

        <NuxtLink
          v-else
          v-auto-animate
          class="absolute"
          @click="
            error =
              'There was an error logging you in. Please try again later and maybe get a new internet because this one is not the best one. It is bad.'
          ">
          <h2 class="drop-shadow-2xs">
            lolpocket
          </h2>
        </NuxtLink>
      </div>
      <!--  to="/" -->

      <UCard
        class=""
        :ui="{
          root: 'w-full! px-18 py-16',
          header: 'mt-2 mb-12 text-center',
          footer:
            'text-center text-xs text-balance text-pc/60 [&_a]:underline [&_a]:underline-offset-1 [&_a]:hover:text-pc'
        }">
        <template #header>
          <h2 class="text-2xl">
            {{ title || route.meta?.title || route.name }}
          </h2>
          <p v-if="route.meta?.description" class="mt-2">
            {{ description || route.meta?.description }}
          </p>
        </template>
        <slot @error="(e: string) => (error = e)" />
      </UCard>
      <div class="text-center text-xs text-pc/60">
        By continuing, you agree to our
        <NuxtLink
          to="/about/tos"
          class="underline decoration-dotted hover:text-pc hover:decoration-solid">
          Terms of Service
        </NuxtLink>
        <br />
        and
        <NuxtLink
          to="/about/privacy"
          class="underline decoration-dotted hover:text-pc hover:decoration-solid">
          Privacy Policy
        </NuxtLink>
        .
      </div>
    </div>
  </UMain>
</template>
