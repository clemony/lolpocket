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
  <div v-if="pocket" class="flex flex-1 flex-col">
    <!-- header -->
    <div class="flex items-start p-4">
      <div class="flex items-start gap-4 text-sm">
        <PocketIcon
          class="aspect-square size-16 rounded-full"
          :src="pocket.icon"
        />
        <div class="grid gap-px">
          <div class="text-md/4 font-semibold">
            {{ pocket.name }}
          </div>

          <PocketChampions
            v-if="pocket.champions.length"
            class="leading-5"
            :champions="pocket.champions"
            list
          />

          <div class="line-clamp-1 text-sm/4 capitalize">
            <span class="font-medium">Role:</span>
            <template v-for="role in pocket.roles" :key="role">
              {{ role }}
            </template>
          </div>
        </div>
      </div>
      <div
        class="text-bc/60 ml-auto text-sm *:flex *:items-center *:justify-end *:gap-2"
      >
        <p v-if="pocket.created">
          Created {{ useDateFormat(pocket.created, "MMMM D, YYYY") }}
        </p>
        <p v-if="pocket.updated" v-tippy="'Last Updated'">
          <icon class="size-3.5 opacity-70" name="reset" />
          Patch {{ pocket.updated }}
        </p>
      </div>
    </div>
    <Separator />

    <!-- content -->
    <div class="border-y-b4 border-y bg-black">
      <div
        class="relative z-1 h-70 w-full bg-size-[88%] bg-fixed bg-position-[170%_55%] bg-no-repeat inset-shadow-sm inset-shadow-black/20 before:z-0"
        :style="bg"
      />
    </div>
    <div class="flex-1 p-4 text-sm whitespace-pre-wrap" />
    <Separator class="mt-auto" />
    <div class="p-4">
      <form>
        <div class="grid gap-4">
          <Textarea
            class="border-b3/60 p-4 inset-shadow-xs"
            :placeholder="`Comment on ${pocket.name}...`"
          />
          <div class="flex items-center">
            <Label
              class="flex items-center gap-2 text-sm font-normal"
              html-for="mute"
            >
              <Switch id="mute" aria-label="Mute thread" />
              Mute comment notifications
            </Label>
            <Button class="ml-auto" type="button" size="sm">
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div v-else class="text-bc/60 grid size-full justify-center text-center">
    <span class="translate-y-1/4">No pocket selected</span>
  </div>
</template>
