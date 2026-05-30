<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"
import { useForwardProps } from "reka-ui"

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  variant?: ButtonProps["variant"]
}>()

const emit = defineEmits(["comment:post"])
const forwardedProps = useForwardProps(props)
const select = ref<number>(0)

interface PostTypes {
  id: string
  name?: string
  author?: string

  variant?: ButtonProps["variant"]
  icon?: string
}

const postTypes: PostTypes[] = [
  {
    id: "Default User"
  },
  {
    id: "clembot",
    name: "Clem",
    author: "defnotclem",
    icon: "lucide:paw-print"
  }
]
const groupRef = useTemplateRef<HTMLElement>("groupRef")
const user = await useSupabaseUser()
</script>

<template>
  <UFieldGroup v-if="user?.app_metadata?.user_role === 'admin'" ref="groupRef">
    <!--  <PostButton
      :variant="postTypes[select].variant"
      :icon="postTypes[select].icon"

      @click.stop="emit('comment:post', postTypes[select].author ?? null)"
    >
      <span v-if="postTypes[select].name">{{ postTypes[select].name }}</span>
    </PostButton>
    <UFieldGroupSeparator />
    <Select v-model="select">
      <VarSelectTrigger
      >
        <icon class="size-4" name="down" />
      </VarSelectTrigger>
      <SelectContent :reference="groupRef">
        <SelectLabel>Post as</SelectLabel>
        <SelectItem v-for="(item, i) in postTypes" :key="i" :value="i">
          {{ item.id }}
        </SelectItem>
      </SelectContent>
    </Select> -->
  </UFieldGroup>

  <PostButton v-else v-bind="forwardedProps" />
</template>
