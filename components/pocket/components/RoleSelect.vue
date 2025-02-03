<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
const roles = [
  { name: 'top', icon: 'top' },
  { name: 'jungle', icon: 'jungle' },
  { name: 'middle', icon: 'middle' },
  { name: 'bottom', icon: 'bottom' },
  { name: 'support', icon: 'support' },
  { name: 'tiny carrot', icon: 'tiny-carrot' },
]
</script>

<template>
  <DropdownMenu key="role">
    <DropdownMenuTrigger
      v-if="pocket.roles.length" class="flex flex-col justify-center gap-3"
    >
      <Button
        v-for="(role, i) in pocket.roles" :key="i"
        variant="ghost"
        class="flex  absolute aspect-square rounded-full px-1 top-1.5 right-2 hover:bg-neutral/50 size-12"
      >
        <component
          :is="`i-${role.icon}`"
          :key="role.name"
          v-tippy="role.name"
          class="size-6.5 drop-shadow-text focus:outline-0 shrink-0 !text-3 text-white/70"
        />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuTrigger
      v-else class=" justify-center"
    >
      <Button
        variant="ghost"
        class="flex  absolute aspect-square rounded-full px-1 top-1.5 right-2 hover:bg-neutral/50 size-12"
      >
        <i-all-lanes class="size-6 shrink-0 dst text-white/80" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent key="role" class="w-48">
      <DropdownMenuItem>
        <label
          for="all"
          class="flex gap-4 text-2 hover:!bg-b2/60"
        >
          <input
            id="all"
            v-model="pocket.roles"
            type="radio"
            class="hidden peer"
            value="all"
            checked="true"
            @change="console.log(pocket.roles)"
          />
          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100"
          />
          All
        </label>
      </DropdownMenuItem>

      <DropdownMenuSeparator />
      <DropdownMenuItem
        v-for="role in roles"
        :key="role.name"
        class=""
      >
        <label
          :for="role.name"
          class="flex gap-4 text-2 hover:!bg-b2/60"
        >
          <input
            :id="role.name"
            v-model="pocket.roles"
            type="radio"
            class="hidden peer"
            :value="role"
            @change="console.log(pocket.roles)"
          />
          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100"
          />
          {{ role.name }}
        </label>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
