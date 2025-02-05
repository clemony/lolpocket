<script setup lang="ts">
const ts = useTempStore()

const keys = useMagicKeys()

if (useDevice() == 'MacOS') {
  whenever(keys.meta_k, () => {
    ts.commandOpen = true
  })
}
else if (useDevice() == 'Windows') {
  whenever(keys.ctrl_k, () => {
    ts.commandOpen = true
  })
}
</script>

<template>
  <CommandDialog v-model:open="ts.commandOpen" :overlay-opacity="60" class=" ">
    <div class="py-1 px-2 size-full **:text-3">
      <CommandInput placeholder="Type a search term or browse..." class="pl-1 !h-12 pt-3.5 bg-transparent" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" class="*:flex *:items-center *:gap-4 *:[&_span]:nth-of-type-[2]:opacity-70">
          <CommandItem value="pockets">
            <icon name="folders" class="size-4 text-bc ml-px shrink-0" />
            <span class="grow">
              Pockets
            </span>

            <span class="px-2">{{ useDeviceKey() }} P</span>
          </CommandItem>

          <CommandItem value="champions">
            <i-no-champ class="size-7 shrink-0  -ml-1.25 -mr-1.25" />

            <span class="grow">
              Champions
            </span>
            <span class="px-2">{{ useDeviceKey() }} C</span>
          </CommandItem>

          <CommandItem value="items">
            <icon name="bow" class="size-5 -mr-px" />
            <span class="grow">
              Items
            </span>
            <span class="px-3 tracking-wider">{{ useDeviceKey() }} I</span>
          </CommandItem>

          <CommandItem value="runes">
            <i-rune-icon class="size-6 -ml-0.75 -mr-0.5" />
            <span class="grow">
              Runes
            </span>
            <span class="px-2">{{ useDeviceKey() }} R</span>
          </CommandItem>

          <CommandItem value="summoners">
            <span class="grow">
              Summoners
            </span>
            <span class="px-2">{{ useDeviceKey() }} S</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem v-for="item in settingBarLinks" :key="item.name" :value="item.name">
            <NuxtLink :to="item.link" class="w-full gap-4 flex items-center capitalize">
              <icon :name="item.icon" class="size-5" />
              {{ item.name }}
            </NuxtLink>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </div>
  </CommandDialog>
</template>

<style scoped></style>
