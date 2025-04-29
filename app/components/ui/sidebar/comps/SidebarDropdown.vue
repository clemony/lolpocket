<script setup lang="ts">
import { DropdownMenuPortal } from 'reka-ui'

const emit = defineEmits(['update:modelValue'])
const ts = useTempStore()
const us = useUiStore()
function handleClick(mode) {
  emit('update:modelValue', false)
  if (mode == 'in') {
    ts.loginOpen = true
  }
  else if (mode == 'out') {
    signOut()
  }
}
const as = useAccountStore()
const user = computed (() => as.userAccount.puuid)
const messages = ref(false)

console.log('💠 - as:', as.userSummoner)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="btn btn-ghost  btn-xl text-3 font-medium justify-start px-2  *:pointer-events-none data-[state=open]:bg-b2 data-[state=open]:border-b3 !p-0">
      <div class="size-full flex items-center gap-3 relative">
        <UserSummonerIcon class=" size-10 grayscale  tldr-20" />
      </div>
    </DropdownMenuTrigger>

    <LazyDropdownMenuContent
      align="end" class="w-80">
      <DropdownMenuItem class="items-center w-full justify-between">
        <span class="pl-6.5 grow">Hi, <SummonerName />!</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class=" group/b ">
        <span class="relative size-5 grid place-items-center">
          <StatusIndicator v-if="messages" class=" top-3.25 right-4 *:!status-md" />
          <icon
            name="ph:envelope-light"
            class="!size-5.5 shrink-0   absolute opacity-100 group-hover/b:opacity-0 tldr-30" />
          <icon
            name="ph:envelope-open-light"
            class="!size-5.5 shrink-0  opacity-0 group-hover/b:opacity-100 tldr-30   absolute  " />
        </span>
        Notifications
      </DropdownMenuItem>

      <DropdownMenuSeparator />
      <SidebarPatchNotes />
      <DropdownMenuSeparator />

      <DropdownMenuItem
        v-if="as.userAccount.session"
        class=""
        @click="handleClick('out')">
        <icon
          name="ph:sign-out" />

        Sign out
      </DropdownMenuItem>
    </LazyDropdownMenuContent>
  </DropdownMenu>
</template>