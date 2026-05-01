<script lang="ts" setup>
import { positions } from "./handleRoles"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = toRef(props, "pocket")
const pocketPositions = computed<PositionKey[]>({
  get: () => pocket.value.positions ?? [],
  set: (value: PositionKey[]) => {
    pocket.value.positions = value
  }
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UButton
        class="hover:bgneutral/50 top-1.5 right-2 flex aspect-square size-10 rounded-lg px-1"
        variant="ghost">
        <component
          :is="`i-positions-${pocketPositions}`"
          v-if="pocketPositions.length"
          :key="pocketPositions.join('-')"
          label="pocketPositions"
          class="drop-shadow-text size-6.5 shrink-0 text-md! text-white/70 focus:outline-0" />

        <i-positions-all-lanes
          v-else
          class="size-6 shrink-0 text-white/80 drop-shadow-2xs" />
      </UButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent key="position" class="w-48" side="bottom">
      <DropdownMenuItem>
        <label class="flex gap-4 text-sm hover:bg-p2/60!" for="all">
          <input
            id="all"
            v-model="pocketPositions"
            class="peer hidden"
            type="radio"
            value="all"
            checked="true"
            @change="console.log(pocketPositions)" />

          <icon
            class="size-5 opacity-0 peer-checked:opacity-100"
            name="tick-sm" />
          All
        </label>
      </DropdownMenuItem>

      <USeparator />

      <DropdownMenuItem v-for="position in positions" :key="position" class="">
        <label class="flex gap-4 text-sm hover:bg-p2/60!" :for="position">
          <input
            :id="position"
            v-model="pocketPositions[0]"
            class="peer hidden"
            type="radio"
            :value="position"
            @change="console.log(pocketPositions)" />

          <icon
            class="size-5 opacity-0 peer-checked:opacity-100"
            name="tick-sm" />
          {{ position }}
        </label>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
