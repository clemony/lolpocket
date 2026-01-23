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
        class="
          hover:bgneutral/50 top-1.5 right-2 flex aspect-square size-10
          rounded-lg px-1
        ">
        <component
          :is="`i-roles-${pocket.roles}`"
          v-if="pocket.roles"
          :key="pocket.roles"
          v-tippy="pocket.roles"
          class="
            drop-shadow-text text-md! size-6.5 shrink-0 text-white/70
            focus:outline-0
          " />

        <i-roles-all-lanes
          v-else
          class="dst size-6 shrink-0 text-white/80" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      key="role"
      class="w-48"
      side="bottom">
      <DropdownMenuItem>
        <label
          for="all"
          class="hover:bg-b2/60! flex gap-4 text-sm">
          <input
            id="all"
            v-model="pocket.roles"
            type="radio"
            class="peer hidden"
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
          class="hover:bg-b2/60! flex gap-4 text-sm">
          <input
            :id="role"
            v-model="pocket.roles[0]"
            type="radio"
            class="peer hidden"
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
