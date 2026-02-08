<script lang="ts" setup>
import { roles } from "./handleRoles"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        class="hover:bgneutral/50 top-1.5 right-2 flex aspect-square size-10 rounded-lg px-1"
        variant="ghost">
        <component
          :is="`i-roles-${pocket.roles}`"
          v-if="pocket.roles"
          :key="pocket.roles"
          v-tippy="pocket.roles"
          class="drop-shadow-text size-6.5 shrink-0 text-md! text-white/70 focus:outline-0" />

        <i-roles-all-lanes v-else class="size-6 shrink-0 text-white/80 dst" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent key="role" class="w-48" side="bottom">
      <DropdownMenuItem>
        <label class="flex gap-4 text-sm hover:bg-p2/60!" for="all">
          <input
            id="all"
            v-model="pocket.roles"
            class="peer hidden"
            type="radio"
            value="all"
            checked="true"
            @change="console.log(pocket.roles)" />

          <icon
            class="size-5 opacity-0 peer-checked:opacity-100"
            name="tick-sm" />
          All
        </label>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem v-for="role in roles" :key="role" class="">
        <label class="flex gap-4 text-sm hover:bg-p2/60!" :for="role">
          <input
            :id="role"
            v-model="pocket.roles[0]"
            class="peer hidden"
            type="radio"
            :value="role"
            @change="console.log(pocket.roles)" />

          <icon
            class="size-5 opacity-0 peer-checked:opacity-100"
            name="tick-sm" />
          {{ role }}
        </label>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
