<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <Dialog v-model:open="ui().blockDialog">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="text-6">
          Block {{ summoner.name }}?
        </DialogTitle>
        <DialogDescription class="mt-3 space-y-4 leading-7 text-bc">
          <p>
            Blocking this summoner will remove them from your follow list and from search results. This user will also no longer be able to message you, comment, or react to your pockets or profile.
          </p>
          <p>
            You can manage any summoners you've blocked in <BtnLink
              class="inline underline decoration-dotted hover:decoration-solid text-bc/70 hover:text-bc"
              variant="link"
              to="/settings/account#blocked-users">
              Account Settings
            </BtnLink>
          </p>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter class="items-center !flex-row justify-between w-full grow flex mt-4 gap-10">
        <span class="text-2 italic opacity-60">
          Are you sure you want to block {{ summoner.name }}?
        </span>

        <Button
          variant="red"
          class="px-5 ml-4">
          <icon
            name="ban"
            class="**:stroke-[2.2] size-4.5" />
          Block
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>