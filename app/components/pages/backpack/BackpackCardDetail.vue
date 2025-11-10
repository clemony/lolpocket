<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema/schema.pocket'

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
      <div class="flex items-start gap-4 text-2">
        <PocketIcon
          :img="pocket.icon"
          class="aspect-square size-16 rounded-full" />
        <div class="grid gap-px">
          <div class="text-3 leading-4 font-semibold">
            {{ pocket.name }}
          </div>

          <PocketChampions
            v-if="pocket.champions.length"
            class="leading-5"
            :champions="pocket.champions"
            list />

          <div class="line-clamp-1 text-2 leading-4 capitalize">
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
        class="
          ml-auto text-2 text-bc/60
          *:flex *:items-center *:justify-end *:gap-2
        ">
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
    <div class="border-y border-y-b4 bg-black">
      <div
        class="
          relative z-1 h-70 w-full bg-size-[88%] bg-fixed bg-[170%_55%]
          bg-no-repeat inset-shadow-sm inset-shadow-black/20
          before:z-0
        "
        :style="bg" />
    </div>
    <div class="flex-1 p-4 text-2 whitespace-pre-wrap">
    </div>
    <Separator class="mt-auto" />
    <div class="p-4">
      <form>
        <div class="grid gap-4">
          <Textarea
            class="border-b3/60 p-4 inset-shadow-xs"
            :placeholder="`Comment on ${pocket.name}...`" />
          <div class="flex items-center">
            <Label
              html-for="mute"
              class="flex items-center gap-2 text-2 font-normal">
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
    class="grid size-full justify-center text-center text-bc/60">
    <span class="translate-y-1/4">No pocket selected</span>
  </div>
</template>
