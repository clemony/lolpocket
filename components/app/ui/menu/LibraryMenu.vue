<script lang="ts" setup>
const route = useRoute()
const open = ref(false)


</script>

<template>
<DropdownMenu class="flex items-center" v-model:open="open">
      <DropdownMenuTrigger class="group/lib flex items-center -mt-px">
        <NavBtn :class="{ 'btn-active ': route.meta.section == 'items' || open }">
          Library
          <icon name="up-sm" class="group-data-[state=open]/lib:-rotate-180 transition duration-20" />
        </NavBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="min-w-64 **:!text-3">
        <DropdownMenuLabel inset class="flex gap-2 items-center">
          Items
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem  :class="{ '': route.meta.section == 'items' }" @click="navigateTo('/items')">
          <i-lol-hitter class="size-4.5 opacity-70 -ml-px" />
          Item Grid
        </DropdownMenuItem>

        <DropdownMenuItem  :class="{ '': route.path == 'items/list' }" @click="navigateTo('/items/list')">
          <icon name="simple-line-icons:list" class="!size-4 mx-px"/>
          Item Stat List
        </DropdownMenuItem>

        <DropdownMenuSeparator />
     <DropdownMenuLabel inset class="flex gap-2 items-center">
      Champions
  
    </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem  :class="{ '': route.path == 'champions' }" @click="navigateTo('/champions')">
      <i-lol-champ class="!size-4.5 opacity-60" />
          Champions
        </DropdownMenuItem>

        <DropdownMenuItem  :class="{ '': route.path == 'champions/list' }" @click="navigateTo('/champions/list')">
          <icon name="simple-line-icons:list" class="!size-4 mx-px"/>
          Champion Stat List
        </DropdownMenuItem>

        <DropdownMenuSeparator />
  <DropdownMenuLabel  inset class="flex gap-2 items-center">
    Magic
  </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem   :class="{ '': route.path == '/runes' }" @click="navigateTo('/runes')">
          <i-lol-rune-symbol  class="size-5 -ml-px"/>
          Runes
        </DropdownMenuItem>
        <DropdownMenuItem  :class="{ '': route.path == '/spells' }" @click="navigateTo('/spells')">
          <icon name="book" class="!size-4 mx-px"/>
          Spellbook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</template>