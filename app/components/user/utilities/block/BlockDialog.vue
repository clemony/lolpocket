<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <UModal
    v-model:open="session().blockDialog"
    :title="`Block ${summoner.name}?`">
    <UButton as-child>
      <slot />
    </UButton>
    <template #description>
      <div class="mt-3 space-y-4 leading-7 text-pc">
        <p>
          Blocking this summoner will remove them from your follow list and from
          search results. This user will also no longer be able to message you,
          comment, or react to your pockets or profile.
        </p>
        <p>
          You can manage any summoners you've blocked in
          <UButton
            class="inline text-pc/70 underline decoration-dotted hover:text-pc hover:decoration-solid"
            to="/settings/account#blocked-users">
            Account Settings
          </UButton>
        </p>
      </div>
    </template>

    <template #footer>
      <div
        class="mt-4 flex w-full grow flex-row! items-center justify-between gap-10">
        <span class="text-sm italic opacity-60">
          Are you sure you want to block {{ summoner.name }}?
        </span>

        <UButton class="ml-4 px-5" color="dom">
          <icon class="size-4.5 **:stroke-[2.2]" name="ban" />
          Block
        </UButton>
      </div>
    </template>
  </UModal>
</template>
