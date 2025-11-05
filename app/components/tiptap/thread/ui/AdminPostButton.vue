<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import { postComment, postNotClemComment } from '#tiptap'

const { class: className, editor, newComment } = defineProps<{
  class?: HTMLAttributes['class']
  editor: Editor
  newComment: Doc
}>()
const select = ref<number>(0)
interface PostTypes {
  id: string
  name?: string
  action: (editor: Editor) => void
  variant: ButtonVariants['variant']
}
const postTypes: PostTypes[] = [
  {
    id: 'Default User',
    action: editor => postComment(editor, newComment),
    variant: 'neutral'
  },
  {
    id: 'clembot',
    name: 'Clem',
    action: editor => postNotClemComment(editor, newComment),
    variant: 'outline'
  }
]
</script>

<template>
  <ButtonGroup>
    <PostButton
      :variant="postTypes[select].variant"
      @click.stop="postTypes[select].action">
      <span v-if="postTypes[select].name ">{{ postTypes[select].name }}</span>
    </PostButton>
    <ButtonGroupSeparator />
    <Select v-model="select">
      <VarSelectTrigger
        :variant="postTypes[select].variant"
        size="sq-9">
        <icon
          name="down"
          class="size-4" />
      </VarSelectTrigger>
      <SelectContent>
        <SelectLabel>Post as</SelectLabel>
        <SelectItem
          v-for="item, i in postTypes"
          :key="i"
          :value="i">
          {{ item.id }}
        </SelectItem>
      </SelectContent>
    </Select>
  </ButtonGroup>
</template>