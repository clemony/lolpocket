<script setup lang="ts">
import { isTextSelection } from "@tiptap/core"
import type { Editor } from "@tiptap/vue-3"
import { BubbleMenu } from "@tiptap/vue-3/menus"

const { editor } = defineProps<{
  editor: Editor | null
}>()

const forceShow = ref(false)
const forceHide = ref(false)
const triggerEl = ref<HTMLElement | null>(null)
const virtualRect = shallowRef<(() => DOMRect) | null>(null)

function shouldShow() {
  return ({ editor: ed, from, state, to, view }: any) => {
    if (!ed) return false

    const { doc, selection } = state
    const { empty } = selection

    if (forceHide.value) return false

    if (forceShow.value) return true

    const isEmptyTextBlock =
      !doc.textBetween(from, to).length && isTextSelection(state.selection)

    if (!view.hasFocus() || empty || isEmptyTextBlock) return false

    return true
  }
}

function triggerBubbleMenu() {
  if (!editor) return

  editor.chain().focus().run()

  // toggle manual show
  forceShow.value = !forceShow.value

  if (forceShow.value && triggerEl.value) {
    const rect = triggerEl.value.getBoundingClientRect()
    virtualRect.value = () => rect
  } else {
    virtualRect.value = null
    forceHide.value = true
  }
}

function toggleListType() {
  if (!editor) return
  const chain = editor.chain().focus()
  if (editor.isActive("bulletList")) chain.toggleOrderedList()
  else chain.toggleBulletList()
  chain.run()
}
</script>

<template>
  <BubbleMenu
    v-if="editor"
    :editor
    :should-show="shouldShow()"
    data-inertia
    :get-reference-client-rect="virtualRect || undefined"
    :class="cn('px-1.5')"
    :options="{ placement: 'top', offset: 8 }">
    <EditorMenu :editor />
  </BubbleMenu>

  <BubbleMenu
    v-if="editor && shouldShow()"
    :editor
    data-inertia
    :class="cn('px-1.5')"
    :should-show="
      () => editor?.isActive('bulletList') || editor?.isActive('orderedList')
    "
    :get-reference-client-rect="virtualRect || undefined"
    :options="{ placement: 'top-start', offset: 8 }">
    <div class="bubble-menu">
      <UButton variant="outline" on="inset" square @click="toggleListType">
        Toggle list type
      </UButton>
    </div>
  </BubbleMenu>
</template>
