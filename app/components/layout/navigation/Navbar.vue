<script setup lang="ts">
import { LazyLogin } from "#components"
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
const toast = useToast()

function toasting() {
  toast.add({
    title: "Event added to calendar",
    orientation: "horizontal",
    icon: "i-lucide-calendar-days",
  })
}

const overlay = useOverlay()

const login = overlay.create(LazyLogin)
async function openLogin() {
  return login.open()
}
</script>

<template>
  <UHeader
    mode="slideover"
    title="LP"
    :ui="{
      root: 'z-101',
      content: 'max-h-screen overflow-hidden',
      title:
        'hover:noise rounded-lgpy-1.5 text-2xl font-black! hover:bg-neutral hover:text-nc hover:shadow-sm',
    }">
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
      <UButton @click="toasting()"> toast </UButton>
    </div>

    <template #content>
      <LazySidebar @open-log-in="openLogin()" />
    </template>
  </UHeader>
</template>
