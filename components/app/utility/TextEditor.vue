<script setup>
const editor = useEditor({
  content: '<p>Create a new note.</p>',
  extensions: [TiptapStarterKit],
})

onBeforeUnmount(() => {
  unref(editor).destroy()
})
</script>

<template>
  <div>
    <div v-if="editor" class="text-editor [&_svg]:shrink-0 [&_button]:rounded-md flex w-full justify-end gap-1 ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button class="btn btn-sm px-2">
            <icon name="ph:text-t" class="size-5" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
            @click="editor.chain().focus().toggleBold().run()"
          >
            <icon name="lucide:bold" class="size-4" />
            Bold
          </DropdownMenuItem>

          <DropdownMenuItem
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
            @click="editor.chain().focus().toggleItalic().run()"
          >
            <icon name="lucide:italic" class="size-4" />
            Italic
          </DropdownMenuItem>

          <DropdownMenuItem
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
            @click="editor.chain().focus().toggleStrike().run()"
          >
            <icon name="lucide:strikethrough" class="size-4" />
            Strikethrough
          </DropdownMenuItem>

          <DropdownMenuItem
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'is-active': editor.isActive('code') }"
            @click="editor.chain().focus().toggleCode().run()"
          >
            <icon name="lucide:code-xml" class="size-4" />
            Monospace
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem

            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          >
            <icon name="lucide:heading-1" class="size-4 shrink-0" />
            Heading 1
          </DropdownMenuItem>

          <DropdownMenuItem

            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          >
            <icon name="lucide:heading-2" class="size-4" />
            Heading 2
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem

            @click="editor.chain().focus().unsetAllMarks().run()"
          >
            <icon name="lucide:remove-formatting" class="size-4" />
            Remove Formatting
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            class="btn btn-sm px-2"
          >
            <icon name="fluent:list-rtl-16-regular" class="size-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem

            :class="{ 'is-active': editor.isActive('bulletList') }"
            @click="editor.chain().focus().toggleBulletList().run()"
          >
            <icon name="lucide:list" class="size-4" />
            Bullet List
          </DropdownMenuItem>

          <DropdownMenuItem

            :class="{ 'is-active': editor.isActive('orderedList') }"
            @click="editor.chain().focus().toggleOrderedList().run()"
          >
            <icon name="lucide:list-ordered" class="size-4" />
            Numbered List
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            @click="editor.chain().focus().clearNodes().run()"
          >
            <icon name="lucide:list-restart" class="size-4" />
            Reset Lists
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem

            @click="editor.chain().focus().setHorizontalRule().run()"
          >
            <icon name="lucide:minus" class="size-4" />
            Horizontal Line
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        class="btn btn-sm px-2"

        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        <icon name="iconoir:undo" class="size-5" />
      </button>
      <button
        class="btn btn-sm px-2"

        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        <icon name="iconoir:redo" class="size-5" />
      </button>
    </div>
    <TiptapEditorContent :editor="editor" class="overflow-auto text-thing  [&_h1]:text-6 pt-5 pb-3 " />
  </div>
</template>
<style >

.text-thing{
  border-image-width: 0px !important;
}
</style>