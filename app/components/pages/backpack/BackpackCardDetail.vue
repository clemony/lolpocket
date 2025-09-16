<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const img = useImage()
const bg = computed(() => {
  const imgUrl = img(pocket.icon.replace('tile', 'uncentered'))

  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div
    v-if="pocket"
    class="flex flex-1 flex-col">
    <!-- header -->
    <div class="flex items-start p-4">
      <div class="flex items-start gap-4 text-xs">
        <PocketIcon
          :img="pocket.icon"
          class="size-16 rounded-full aspect-square" />
        <div class="grid gap-px">
          <div class="font-semibold text-sm leading-4">
            {{ pocket.name }}
          </div>

          <PocketChampions
            v-if="pocket.champions.length"
            class="leading-5"
            :champions="pocket.champions"
            list />

          <div class="line-clamp-1 leading-4 text-xs capitalize">
            <span class="font-medium">Role:</span>
            <template
              v-for="role in pocket.roles"
              :key="role">
              {{ role }}
            </template>
          </div>
        </div>
      </div>
      <div
        class="ml-auto text-xs text-bc/60 *:justify-end *:gap-2 *:flex *:items-center">
        <p v-if="pocket.created">
          Created {{ useDateFormat(pocket.created, "MMMM D, YYYY") }}
        </p>
        <p
          v-if="pocket.updated"
          v-tippy="'Last Updated'">
          <icon
            name="reset"
            class="size-3.5 opacity-70" />
          Patch {{ pocket.updated }}
        </p>
      </div>
    </div>
    <Separator />

    <!-- content -->
    <div class="bg-black border-y border-y-b4">
      <div
        class="w-full h-70 bg-no-repeat relative z-1 before:z-0 bg-fixed bg-[170%_55%] inset-shadow-sm inset-shadow-black/20 bg-size-[88%]"
        :style="bg" />
    </div>
    <div class="flex-1 whitespace-pre-wrap p-4 text-xs">
      {{ pocket.notes[0] }}
    </div>
    <Separator class="mt-auto" />
    <div class="p-4">
      <form>
        <div class="grid gap-4">
          <Textarea
            class="p-4 border-b3/60 inset-shadow-xs"
            :placeholder="`Comment on ${pocket.name}...`" />
          <div class="flex items-center">
            <Label
              html-for="mute"
              class="flex items-center gap-2 text-xs font-normal">
              <Switch
                id="mute"
                aria-label="Mute thread" />
              Mute comment notifications
            </Label>
            <Button
              type="button"
              size="sm"
              class="ml-auto">
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div
    v-else
    class="size-full grid justify-center text-center text-bc/60">
    <span class="translate-y-1/4">No pocket selected</span>
  </div>
</template>
