<script setup lang="ts">
const us = useUiStore()
</script>

<template>
  <Dialog v-model:open="us.loginOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogContent
      class="flex w-120 flex-col p-8"
      :no-animate-in="true">
      <Hide>
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>

          <DialogDescription> Log in with Google, Riot, Discord, or email. </DialogDescription>
        </DialogHeader>
      </Hide>

      <div class="">
        <Login
          class="!mt-0 w-full **:z-501 [&_.email-form_input]:w-100 [&_button]:ml-13 [&_button]:w-100"
          class1="justify-center" />
      </div>

      <DialogFooter class="mt-18 w-full items-start">
        <Button
          variant="outline"
          class="mr-2">
          Log in
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
