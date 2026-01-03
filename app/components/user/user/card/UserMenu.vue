<script lang="ts" setup>
import type { TippyOptions } from 'vue-tippy'
import { popoverArrow } from '~/assets/config/popoverArrow'

const props = withDefaults(
  defineProps<
    TippyOptions & {
      class?: HTMLAttributes['class']
      comment: CommentData
      author: AccountData | null
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
const img = useImage()
const splash = computed (() => img(props.author?.splash.replace('centered', 'uncentered')))
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
      variant="neutral"
      class="pointer-events-auto z-4 hover-ring rounded-full"
      :disabled="!props.comment.uuid"
      @click.stop>
      <UserAvatar
        :comment
        :author
        size="c-9"
        class="pointer-events-none absolute self-center" />
    </Button>
    <template #content>
      <div
        class="
         tippy-content pointer-events-auto relative z-100 mb-1 w-74 overflow-hidden rounded-t-lg
      [&_button]:px-2
        ">
        <div
          :style="{
            background: `url(${splash})`,
            backgroundSize: '114%',
            backgroundPositionY: '10%',
            backgroundRepeat: 'no-repeat',
          }"
          :alt="`${author?.name}'s Splash`"
          class="relative z-0 h-28 w-full overflow-hidden rounded-t-lg">
          <Badge
            size="6"
            class="absolute top-2 right-2 gap-0 rounded-lg text-1! font-medium opacity-76"
            variant="neutral">
            <Icon
              name="lp:cxp"
              class="size-3 text-nc" />
            {{ author?.level }}
          </Badge>
        </div>
        <div class="absolute top-18 left-2 grid size-20 place-items-center rounded-lg bg-b1 p-1.5">
          <UserAvatar
            :author
            :comment
            class="size-full rounded-lg" />
        </div>
        <div class="flex items-center gap-3 px-2 pb-2">
          <div class="inline flex-wrap justify-between space-x-2 pl-22 align-middle">
            <h2 class="inline font-serif text-5! leading-3 dst">
              {{ props.author?.name || author?.username || "Mysterious Summoner" }}
            </h2>
            <span
              v-if="props.author?.tag || tag"
              :data-role="comment.uuid === 'defnotclem' ? 'mod' : null"
              class="pb-1 align-middle leading-4">
              <icon
                name="hash"
                class="inline size-3.5 pb-0.5" />{{
                  props.author?.tag || tag
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
              class="size-4.5!" />
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
