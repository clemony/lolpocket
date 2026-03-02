<script setup lang="ts">
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["openLogIn"])
const modelValue = shallowRef<string>("")

const { account } = storeToRefs(user())

const base = "w-fit fx-0 hover:underline px-2! "

const subOpen = shallowRef<boolean>(false)
function onSubOpenChange(next: boolean) {
  subOpen.value = next
}

const route = useRoute()
const logInOpen = shallowRef<boolean>(false)
</script>

<template>
  <UHeader
    mode="slideover"
    title="LP"
    :ui="{
      content: 'max-h-screen overflow-hidden',
      title:
        'hover:noise rounded-lgpy-1.5 text-2xl font-black! hover:bg-neutral hover:text-nc hover:shadow-sm',
    }">
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
    </div>

    <template #content>
      <LazySidebar @open-log-in="emit('openLogIn')" />
    </template>
    <LazyUModal
      v-model:open="logInOpen"
      title="Log in"
      :ui="{
        content:
          'grid! h-max max-w-120 items-start divide-none self-start! px-10 pt-6 pb-8',
      }"
      description="Use a connected account or log in with email and password.">
      <template #content>
        <div class="flex w-full justify-center text-2xl font-black">LP</div>
        <h3 class="dst mt-2 mb-10 w-full text-center">Log in</h3>

        <LazyAuthForm type="logIn" />
      </template>
    </LazyUModal>
  </UHeader>
</template>
