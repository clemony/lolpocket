<script lang="ts" setup>
const route = useRoute()
const open = ref(false)
</script>

<template>
  <Popover v-model:open="open" class="flex items-center">
    <PopoverTrigger class="group/lib flex items-center -mt-px">
      <NavBtn :class="{ 'btn-active ': route.meta.section == 'items' || open }">
        Library
        <icon name="up-sm" class="group-data-[state=open]/lib:-rotate-180 transition duration-20" />
      </NavBtn>
    </PopoverTrigger>

    <PopoverContent align="end" class="min-w-64 **:!text-3 p-2">
      <ul class="menu p-0 w-full ">
        <li>
          <label class="flex gap-2 items-center text-bc pointer-events-none">
            Items
          </label>
          <ul>
            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.meta.section == 'items' }" @click="navigateTo('/items')">
                <i-lol-hitter class="size-4.5 opacity-70 -ml-px" />
                Items
              </a>
            </li>

            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.path == 'items/list' }" @click="navigateTo('/items/list')">
                <icon name="simple-line-icons:list" class="!size-4 mx-px" />
                Item Stat List
              </a>
            </li>
          </ul>
        </li>

        <li>
          <label class="flex gap-2 items-center  text-bc pointer-events-none">
            Champions
          </label>
          <ul>
            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.path == 'champions' }" @click="navigateTo('/champions')">
                <i-lol-champ class="!size-4.5 opacity-60" />
                Champions
              </a>
            </li>

            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.path == 'champions/list' }" @click="navigateTo('/champions/list')">
                <icon name="simple-line-icons:list" class="!size-4 mx-px" />
                Champion Stat List
              </a>
            </li>
          </ul>
        </li>

        <li>
          <label class="flex gap-2 items-center  pointer-events-none text-bc">
            Magic
          </label>
          <ul>
            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.path == '/runes' }" @click="navigateTo('/runes')">
                <i-lol-rune-symbol class="size-5 -ml-px" />
                Runes
              </a>
            </li>
            <li>
              <a class="hover:!bg-b2/60" :class="{ '': route.path == '/spells' }" @click="navigateTo('/spells')">
                <icon name="book" class="!size-4 mx-px" />
                Spellbook
              </a>
            </li>
          </ul>
        </li>
        <li>
          <PatchNotesLink />
        </li>
      </ul>
    </PopoverContent>
  </Popover>
</template>