<script lang="ts" setup>
import { LazyLogin } from "#components"
import { heyGoodJob } from "~/domain/lp/ui/good-job"
import { useSignOut } from "../../user/auth/useAuth"
const emit = defineEmits(["openSearch", "closeSidebar"])

const sizes = [20, 40, 180, 77]

const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4])

console.log(
  "🥸 - findSummoner - summonerAccounts():",
  summonerAccounts().accounts
)

const toast = useToast()
function toasty() {
  toast.add({
    color: "dom",
    title: `Created Toast!`,
    description: `There’s something strangely evocative about the smell of burnt toast. You can probably remember the last time you suddenly detected it and dashed for the grill.

But did you know there’s a part of your brain specifically dedicated to smelling burnt toast?

In 1950, Canadian Dr Wilder Penfield was working on a treatment for cerebral seizures that worked by zapping particular nerve cells with electrical probes. One of his patients was a woman with epilepsy who smelled burnt toast whenever she was about to have a seizure. ${getRandom(heyGoodJob)}!`,
    icon: "x"
  })
}
const overlay = useOverlay()

const login = overlay.create(LazyLogin)
async function openLogin() {
  emit("closeSidebar", true)
  return login.open()
}
</script>

<template>
  <UPopover>
    <UButton icon="i-more" variant="ghost" />
    <template #content>
      <ul>
        <UButton as="li" @click="openLogin()"> open log i </UButton>

        <UButton
          class="ml-auto pr-4 pl-2.5 font-normal"
          color="neutral"
          @click="toasty()">
          <icon name="add" />
          toast
        </UButton>
        <UButton @click="accountFetch()"> fetch user datasss </UButton>
        <UButton @click="console.log('summoner:', sSummoner().cache)">
          resolve the slug
        </UButton>

        <UButton @click="useSignOut()"> sign out </UButton>
      </ul>
    </template>
  </UPopover>
</template>
