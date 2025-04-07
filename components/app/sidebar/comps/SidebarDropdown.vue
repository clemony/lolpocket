<script setup lang="ts">
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

const messages = ref(false)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="btn btn-ghost  btn-xl text-3 font-medium justify-start px-2 grow *:pointer-events-none data-[state=open]:bg-b2 data-[state=open]:border-b3 !p-0">
      <div class="size-full flex items-center gap-3 relative">
        <SummonerIcon class="rounded-lg **:rounded-lg size-10 grayscale  tldr-20" />
      </div>
    </DropdownMenuTrigger>

    <LazyContrastDropdownContent
      side="right" align="end" :side-offset="11" class="w-80">
      <ContrastDropdownItem>
        <SummonerIcon class="rounded-lg **:rounded-lg size-10 grayscale  tldr-20" />
        <SummonerName />
      </ContrastDropdownItem>
      <ContrastDropdownItem class=" group/b ">
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
      </ContrastDropdownItem>

      <ContrastDropdownSeparator />
      <SidebarPatchNotes />
      <ContrastDropdownSeparator />

      <ContrastDropdownItem
        class="">
        <icon
          name="ph:gear-six" />
        Settings
      </ContrastDropdownItem>
      <ContrastDropdownSeparator />
      <ContrastDropdownItem
        v-if="as.userAccount.session"
        class=""
        @click="handleClick('out')">
        <icon
          name="ph:sign-out" />

        Sign out
      </ContrastDropdownItem>

      <ContrastDropdownItem v-else class="" @click="handleClick('in')">
        <LoginDialog>
          <icon
            name="ph:sign-in" />
        </LoginDialog>

        Sign in
      </ContrastDropdownItem>
    </LazyContrastDropdownContent>
  </DropdownMenu>
</template>