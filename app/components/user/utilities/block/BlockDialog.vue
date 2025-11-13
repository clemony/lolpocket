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
            Blocking this summoner will remove them from your follow list and
            from search results. This user will also no longer be able to
            message you, comment, or react to your pockets or profile.
          </p>
          <p>
            You can manage any summoners you've blocked in
            <BtnLink
              class="
                inline text-bc/70 underline decoration-dotted
                hover:text-bc hover:decoration-solid
              "
              variant="link"
              to="/settings/account#blocked-users">
              Account Settings
            </BtnLink>
          </p>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter
        class="
          mt-4 flex w-full grow flex-row! items-center justify-between gap-10
        ">
        <span class="text-2 italic opacity-60">
          Are you sure you want to block {{ summoner.name }}?
        </span>

        <Button
          variant="error"
          class="ml-4 px-5">
          <icon
            name="ban"
            class="
              size-4.5
              **:stroke-[2.2]
            " />
          Block
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
