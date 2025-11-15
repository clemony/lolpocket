<script lang="ts" setup>
import type { TippyOptions } from 'vue-tippy'
import { popoverArrow } from '~/assets/ts/popoverArrow'

const props = withDefaults(
  defineProps<
    TippyOptions & {
      class?: HTMLAttributes['class']
      comment: CommentData
      hydratedSummoner: Summoner | null
    }
  >(),
  {
    arrow: popoverArrow,
    interactive: true,
    placement: 'top',
    theme: 'b-mention',
  },
)

const forward = reactiveOmit(props, 'class')
const open = shallowRef<boolean>(false)
const user = await useSupabaseUser()
const isAdmin = computed(
  () => user?.value?.app_metadata?.user_role === 'admin',
)

const tag = ref(false)
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
      class="pointer-events-auto z-4 hover-ring rounded-full"
      :disabled="!props.comment.author_id"
      @click.stop>
      <UserAvatar
        :comment
        :hydrated-summoner
        size="c-9"
        class="pointer-events-none absolute self-center" />
    </Button>
    <template #content>
      <div
        class="
          tippy-content pointer-events-auto z-100 mb-1 w-64 max-w-88 py-2
          *:first:pt-1
          [&_button]:px-2
        ">
        <div class="mt-2 flex items-center gap-3 px-2 py-2">
          <UserAvatar
            :hydrated-summoner
            :comment
            class="size-11" />
          <div class="inline flex-wrap justify-between space-x-2 align-middle">
            <h2 class="inline font-serif leading-3 dst">
              {{ props.hydratedSummoner?.name || comment.author?.username || "Mysterious Summoner" }}
            </h2>
            <span
              v-if="props.hydratedSummoner?.tag || tag"
              :data-role="comment.author_id === 'defnotclem' ? 'mod' : null"
              class="pb-1 align-middle leading-4">
              <icon
                name="hash"
                class="inline size-3.5 pb-0.5" />{{
                  props.hydratedSummoner?.tag || tag
                }}
            </span>
          </div>
        </div>

        <Separator :size="1" />
        <div class="flex flex-col gap-1 px-1">
          <PopoverItem class="pl-7.5!">
            View Profile
          </PopoverItem>
          <PopoverItem>
            <Icons
              name="heart"
              class="size-4" />
            Follow
          </PopoverItem>
        </div>
        <Separator :size="1" />
        <div class="flex flex-col gap-1 px-1">
          <!--    <FollowButton /> -->

          <PopoverItem>
            <Icons
              name="lucide:bell-ring"
              class="size-4!" />
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
