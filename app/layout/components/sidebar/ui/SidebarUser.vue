<script lang="ts" setup>
function closeAndNavigate(link: string) {
  navigateTo(link)
}

const user = useSupabaseUser()

const router = useRouter()

const settings = computed(() => {
  return router.getRoutes().filter(r => r.path === '/settings')[0].children.filter(r => r.path !== '/settings/account').sort()
})
console.log('🌱 - settings:', settings)

const open = shallowRef(false)
const target = shallowRef<HTMLButtonElement>(null)


</script>

<template>




    <div
      class="z-70 w-86 h-fit">
      <PopoverItem
        class="h-10 ">
        <icon name="mail" />
        Inbox

        <span
          v-if="as().inbox?.messages?.length"
          class="text-2 absolute right-4 font-mono opacity-60">
          {{ as().inbox.messages.filter(m => !m.read).length }}
        </span>
      </PopoverItem>

      <DropdownMenuSeparator class="my-1" />

      <PopoverItem
        v-if="as().loggedIn"
        class="h-10"
        @click="closeAndNavigate('/settings/account')">
        <icon name="at" />
        Account
      </PopoverItem>

      <tippy placement="right" theme="base-0">
          <PopoverItem
            class="open:btn-active open:bg-b2/80 open:border-b3/60 open:noise-1 group/t h-10 w-full"
            @click="closeAndNavigate('/settings')">
            <icon
              name="gear"
              class="!size-4.75" />
            Settings

            <icon
              name="right"
              class="absolute right-3 size-3.5 opacity-50 group-open:opacity-60 group-hover:opacity-60" />
          </PopoverItem>

          <template #content>
        <div
          class="p-1 !py-1.5"
          side="right"
          :align-offset="-4"
          align="end">
          <PopoverItem
            v-for="child in settings"
            :key="child.path"
            class="h-10 capitalize">
            <icon
              :name="String(child.meta?.icon)"
              :class="cn('', child.meta?.listClass)"
              @click="navigateTo(child.path)" />
            {{ child.meta?.title || child.name }}
          </PopoverItem>
        </div>
        </template>
      </tippy>

      <DropdownMenuSeparator />
      <PopoverItem
        v-if="as().loggedIn"
        class="h-9">
        <icon
          name="log-out"
          @click="useSignOut()" />
        Log out
      </PopoverItem>

      <PopoverItem
        v-else
        @click="navigateTo('/login')">
        <icon name="log-in" />
        Log in
      </PopoverItem>
    </div>
</template>
