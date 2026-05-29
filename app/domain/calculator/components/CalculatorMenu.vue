<script lang="ts" setup></script>

<template>
  <Menubar class="border-none bg-transparent shadow-none">
    <MenubarMenu>
      <MenubarTrigger>
        <icon
          class="size-6 text-pc/60 group-hover:text-pc"
          name="ph:floppy-disk" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarItem inset>
          Set 1
        </MenubarItem>

        <MenubarItem inset>
          Set 2
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon
          class="size-6 text-pc/60 group-hover:text-pc"
          name="ph:upload-simple" />
      </MenubarTrigger>

      <MenubarContent />
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon
          class="size-5.25 text-pc/60 group-hover:text-pc"
          name="reset" />
      </MenubarTrigger>

      <MenubarContent />
    </MenubarMenu>
  </Menubar>
</template>
