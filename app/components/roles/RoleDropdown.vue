<script lang="ts" setup>
import { roles } from './handleRoles'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="flex   aspect-square rounded-lg px-1 top-1.5 right-2 hover:bgneutral/50 size-10">
        <component
          :is="`i-roles-${pocket.roles}`"
          v-if="pocket.roles"
          :key="pocket.roles"
          v-tippy="pocket.roles"
          class="size-6.5 drop-shadow-text focus:outline-0 shrink-0 !text-3 text-white/70" />

        <i-roles-all-lanes
          v-else
          class="size-6 shrink-0 dst text-white/80" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      key="role"
      class="w-48"
      side="bottom">
      <DropdownMenuItem>
        <label
          for="all"
          class="flex gap-4 text-2 hover:!bg-b2/60">
          <input
            id="all"
            v-model="pocket.roles"
            type="radio"
            class="hidden peer"
            value="all"
            checked="true"
            @change="console.log(pocket.roles)" />

          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100" />
          All
        </label>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        v-for="role in roles"
        :key="role"
        class="">
        <label
          :for="role"
          class="flex gap-4 text-2 hover:!bg-b2/60">
          <input
            :id="role"
            v-model="pocket.roles[0]"
            type="radio"
            class="hidden peer"
            :value="role"
            @change="console.log(pocket.roles)" />

          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100" />
          {{ role }}
        </label>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
