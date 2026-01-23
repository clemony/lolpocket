<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
}>()

const viewButton = useTemplateRef<HTMLElement>('viewButton')

const { focused } = useFocus(viewButton, { initialValue: true })

onMounted(() => {
  // viewButton.value.focus()
})
</script>

<template>
  <div class="flex gap-3">
    <PocketIcon
      :pocket="pocket"
      :url="pocket.icon"
      class="rounded-md **:rounded-md" />

    <div class="flex flex-col gap-3">
      <h5 class="pt-0.5 text-lg! leading-none tracking-tight">
        New Pocket Created!
      </h5>

      <p class="text-md font-normal text-wrap">
        Pocket
        <span class="font-medium underline underline-offset-2">
          {{ pocket.name }}
        </span>
        created. Click the button below to view or begin editing.
      </p>

      <div class="flex">
        <Grow />

        <NuxtLink :to="`/pocket/${pocket.key}`">
          <Button
            ref="viewButton"
            variant="outline"
            size="sm"
            class="">
            View
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
