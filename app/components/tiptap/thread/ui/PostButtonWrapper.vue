<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()

const emit = defineEmits(['comment:post'])
const forwardedProps = useForwardProps(props)
const select = ref<number>(0)

interface PostTypes {
  id: string
  name?: string
  author?: string
  hover?: ButtonVariants['hover']
  icon?: string
  variant?: ButtonVariants['variant']
}

const postTypes: PostTypes[] = [
  {
    id: 'Default User',
  },
  {
    id: 'clembot',
    name: 'Clem',
    author: 'defnotclem',
    icon: 'lucide:paw-print',
  },
]
const groupRef = useTemplateRef<HTMLElement>('groupRef')
const user = await useSupabaseUser()
</script>

<template>
  <ButtonGroup
    v-if="user?.app_metadata?.user_role === 'admin'"
    ref="groupRef">
    <PostButton
      :variant="postTypes[select].variant"
      :icon="postTypes[select].icon"
      :hover="postTypes[select].hover"
      @click.stop="emit('comment:post', postTypes[select].author ?? null)">
      <span v-if="postTypes[select].name">{{ postTypes[select].name }}</span>
    </PostButton>
    <ButtonGroupSeparator />
    <Select v-model="select">
      <VarSelectTrigger
        :variant="postTypes[select].variant ?? 'neutral'"
        :hover="postTypes[select].hover ?? 'opacity'"
        size="sq-9">
        <icon
          name="down"
          class="size-4" />
      </VarSelectTrigger>
      <SelectContent :reference="groupRef">
        <SelectLabel>Post as</SelectLabel>
        <SelectItem
          v-for="(item, i) in postTypes"
          :key="i"
          :value="i">
          {{ item.id }}
        </SelectItem>
      </SelectContent>
    </Select>
  </ButtonGroup>

  <PostButton
    v-else
    v-bind="forwardedProps" />
</template>
