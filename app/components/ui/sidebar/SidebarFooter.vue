<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
const ts = useTempStore()
const as = useAccountStore()
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

function handleAddClick() {
  const ps = usePocketStore()
  ps.newPocketOpen = true
  emit('update:modelValue')
}

const messages = ref(false)
</script>

<template>
  <div class="w-full pr-4 pl-0.5 flex gap-1 items-center justify-start" :class="{ 'flex-col justify-center items-start': !us.sidebarExpanded }">
    <SidebarAddPocket />

    <DropdownMenu>
      <DropdownMenuTrigger class="btn btn-ghost  btn-xl text-3 font-medium justify-start px-2 grow *:pointer-events-none data-[state=open]:bg-b2 data-[state=open]:border-b3" :class="{ '!p-0': !us.sidebarExpanded }">
        <div class="size-full flex items-center gap-3 relative">
          <UserSummonerIcon class="rounded-lg **:rounded-lg size-10 grayscale  tldr-20" />

          <SidebarText>
            <SummonerName />
          </SidebarText>
          <div v-if="us.sidebarExpanded" class="absolute right-0">
            <icon name="select" />
          </div>
        </div>
      </DropdownMenuTrigger>

      <LazyContrastDropdownContent
        :side="us.sidebarExpanded ? 'top' : 'right'" :align="us.sidebarExpanded ? 'start' : 'end'" :side-offset="10" :class="{ 'w-64': !us.sidebarExpanded }">
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
  </div>
</template>