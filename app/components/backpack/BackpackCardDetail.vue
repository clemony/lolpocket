<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
</script>

<template>
  <div
    v-if="pocket"
    class="flex flex-1 flex-col">
    <div class="flex items-start p-4">
      <div class="flex items-start gap-4 text-2">
        <PocketIcon class="size-16 rounded-full aspect-square" />
        <div class="grid gap-px *:leading-5">
          <div class="font-semibold text-3">
            {{ pocket.name }}
          </div>
          <div class="line-clamp-1 text-2">
            <template v-if="pocket.champions.length">
              <span
                v-for="champion in pocket.champions"
                :key="champion">
                {{ ix().champNameByKey(champion) }}
              </span>
            </template>
            <span
              v-else
              class="italic opacity-50">
              No Champion
            </span>
          </div>
          <div class="line-clamp-1 text-2 capitalize">
            <span class="font-medium">Role: </span>
            <template
              v-for="role in pocket.roles"
              :key="role">
              {{ role }}
            </template>
          </div>
        </div>
      </div>
      <div
        class="ml-auto text-2 text-bc/60 *:justify-end *:gap-2 *:flex *:items-center">
        <p
          v-if="pocket.created">
          Created {{ useDateFormat(pocket.created, 'MMMM D, YYYY') }}
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
    <div class="flex-1 whitespace-pre-wrap p-4 text-2">
      {{ pocket.notes[0] }}
    </div>
    <Separator class="mt-auto" />
    <div class="p-4">
      <form>
        <div class="grid gap-4">
          <Textarea
            class="p-4"
            :placeholder="`Reply ${pocket.name}...`" />
          <div class="flex items-center">
            <Label
              html-for="mute"
              class="flex items-center gap-2 text-2 font-normal">
              <Switch
                id="mute"
                aria-label="Mute thread" /> Mute this
              thread
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
    class="p-8 text-center text-bc/60">
    No message selected
  </div>
</template>