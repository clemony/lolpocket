<script lang="ts" setup>
function closeAndNavigate(link: string) {
  navigateTo(link)
}

const user = useSupabaseUser()

const router = useRouter()

const settings = computed(() => {
  return router
    .getRoutes()
    .filter(r => r.path === '/settings')[0]
    .children
    .filter(r => r.path !== '/settings/account')
    .sort()
})

const open = shallowRef(false)
const target = shallowRef<HTMLButtonElement>(null)
</script>

<template>
  <div class="z-70 h-fit w-86">
    <PopoverItem class="h-10">
      <icon name="mail" />
      Inbox

      <span
        v-if="as().inbox?.messages?.length"
        class="absolute right-4 font-mono text-sm opacity-60">
        {{ as().inbox.messages.filter((m) => !m.read).length }}
      </span>
    </PopoverItem>

    <DropdownMenuSeparator class="my-1" />

    <PopoverItem
      v-if="as().user"
      class="h-10"
      @click="closeAndNavigate('/settings/account')">
      <icon name="at" />
      Account
    </PopoverItem>

    <tippy
      placement="right"
      :tag="null"
      content-class="     w!-[calc(100%-14px)] max-w-[calc(100%-14px)]!"
      animation="shift-toward-subtle"
      :arrow="false"
      :interactive="true"
      theme="base clean">
      <PopoverItem
        class="
          group/t aria-expanded:btn-active aria-expanded:border-b3/60 aria-expanded:bg-b2/80
          aria-expanded:fx-1 h-10 w-full
        "
        @click="closeAndNavigate('/settings')">
        <icon
          name="gear"
          class="size-4.75!" />
        Settings

        <icon
          name="right"
          class="
            absolute right-3 size-3.5 opacity-50 group-open:opacity-60
            group-hover:opacity-60
          " />
      </PopoverItem>

      <template #content>
        <div
          class="h-fit max-h-46 -translate-x-4 translate-y-2 p-0!"
          side="right"
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
    <div class="px-1">
      <PopoverItem
        v-if="as().user"
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
  </div>
</template>
