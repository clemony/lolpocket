<script lang="ts" setup>
const emit = defineEmits(["open:settings", "open:admin", "reset-count"]);
</script>

<template>
  <!--   <LazyAdminSheet
    v-if="as &  as().account?.role === 'admin'"
    v-model:open="adminOpen"
    :account="as().account" /> -->
  <SidebarHeaderWrapper title="Settings"></SidebarHeaderWrapper>
  <div class="flex! w-full flex-col items-start gap-6 py-4">
    <Login v-if="as().loggedIn" />
    <div v-else>
      <button
        v-if="useSupabaseUser().value.role === 'admin'"
        v-tippy="'Admin'"
        class="btn -mr-2 grid size-10 cursor-pointer place-items-center opacity-60 btn-ghost hover:opacity-100"
        @click="emit('open:admin')"
      >
        <icon
          name="ri:key-2-line"
          class="pointer-events-none size-6 shrink-0 dst"
        />
      </button>

      <button
        v-tippy="'Account Settings'"
        class="btn -mr-2 grid size-10 cursor-pointer place-items-center opacity-60 btn-ghost hover:opacity-100"
        @click="emit('open:settings')"
      >
        <icon
          name="gear-solid"
          class="pointer-events-none size-4.5 shrink-0 dst"
        />
      </button>
    </div>
    <menu>
      <li>Summonr Profile</li>
    </menu>
  </div>
</template>
