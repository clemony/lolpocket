<script lang="ts" setup>
import type { TippyOptions } from 'vue-tippy';
import { popoverArrow } from '~/assets/ts/popoverArrow';

const props = withDefaults(defineProps<TippyOptions & {
  class?: HTMLAttributes['class']
  comment: CommentData
}>(), {

  arrow: popoverArrow,
  interactive: true,
  placement: 'bottom',
  theme: 'base-0',
})

const forward = reactiveOmit(props, 'class')
const open = shallowRef<boolean>(false)
const user = await useSupabaseUser()
const isAdmin = computed (() => user?.value?.app_metadata?.user_role === 'admin')
</script>

<template>
  <tippy
    v-model:open="open"
    v-bind="forward"
    animation="shift-toward"
    :offset="[0, 12]"
    :duration="150"
    :delay="500">
    <Button
      base="btn"
      size="c-9"
      class="rounded-full  hover-ring  pointer-events-auto z-4  "
      :disabled="!props.comment.author_id"
      @click.stop>
      <UserAvatar
        :comment
        size="c-9"
        class="  self-center absolute pointer-events-none " />
    </Button>
    <template #content>
      <div
        class="w-64 max-w-88 z-100 *:first:pt-1 tippy-content pointer-events-auto py-2 mb-1 [&_button]:px-2">
        <div class="flex items-center gap-3 px-2 py-2 mt-2">
          <UserAvatar
            :comment
            class="size-12" />
          <div class="inline justify-between flex-wrap align-middle space-x-2">
            <h2 class="dst leading-none  inline font-serif leading-3">
              {{ comment.author. name }}
            </h2>
            <span
              :data-role="comment.author_id === 'defnotclem' ? 'mod' : null"
              class="align-text-start leading-4 pb-1">
              <icon
                name="hash"
                class="inline size-3.5 pb-0.5" />{{ comment.author.tag }}
            </span>
          </div>
        </div>

        <Separator :size="1" />
        <div class="px-1  flex flex-col gap-1 ">
          <PopoverItem class="!pl-7.5">
            View Profile
          </PopoverItem>
          <PopoverItem>
            <AIcon
              name="heart"
              class="size-4" />
            Follow
          </PopoverItem>
        </div>
        <Separator :size="1" />
        <div class="px-1  flex flex-col gap-1 ">
          <!--    <FollowButton /> -->

          <PopoverItem>
            <AIcon
              name="lucide:bell-ring"
              class="!size-4" />
            Report
          </PopoverItem>
        </div>
        <Separator
          v-if="isAdmin"
          :size="1" />
        <LazyCommentModMenu
          v-if="isAdmin"
          v-bind="forward" />
      </div>
    </template>
  </tippy>
</template>