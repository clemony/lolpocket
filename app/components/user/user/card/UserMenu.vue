<script lang="ts" setup>
import type { TippyOptions } from 'vue-tippy'

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
  }
)

const forward = reactiveOmit(props, 'class')
const open = shallowRef<boolean>(false)
const user = await useSupabaseUser()
const isAdmin = computed(() => user?.value?.app_metadata?.user_role === 'admin')
const img = useImage()
const splash = computed(() =>
  img(props.author?.splash.replace('centered', 'uncentered'))
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
    :delay="500"
  >
    <Button
      class="hover-ring pointer-events-auto z-4 rounded-full"
      base="btn"
      size="c-9"
      variant="neutral"
      :disabled="!props.comment.uuid"
      @click.stop
    >
      <UserAvatar
        class="pointer-events-none absolute self-center"
        :comment
        :author
        size="c-9"
      />
    </Button>
    <template #content>
      <div
        class="tippy-content pointer-events-auto relative z-100 mb-1 w-74 overflow-hidden rounded-t-lg [&_button]:px-2"
      >
        <div
          class="relative z-0 h-28 w-full overflow-hidden rounded-t-lg"
          :style="{
            background: `url(${splash})`,
            backgroundSize: '114%',
            backgroundPositionY: '10%',
            backgroundRepeat: 'no-repeat',
          }"
          :alt="`${author?.name}'s Splash`"
        >
          <Badge
            class="absolute top-2 right-2 gap-0 rounded-lg text-xs! font-medium opacity-76"
            size="6"
            variant="neutral"
          >
            <Icon class="text-nc size-3" name="lp:cxp" />
            {{ author?.level }}
          </Badge>
        </div>
        <div
          class="bg-b1 absolute top-18 left-2 grid size-20 place-items-center rounded-lg p-1.5"
        >
          <UserAvatar class="size-full rounded-lg" :author :comment />
        </div>
        <div class="flex items-center gap-3 px-2 pb-2">
          <div
            class="inline flex-wrap justify-between space-x-2 pl-22 align-middle"
          >
            <h2 class="dst inline font-serif text-xl! leading-3">
              {{
                props.author?.name || author?.username || "Mysterious Summoner"
              }}
            </h2>
            <span
              v-if="props.author?.tag || tag"
              class="pb-1 align-middle leading-4"
              :data-role="comment.uuid === 'defnotclem' ? 'mod' : null"
            >
              <icon class="inline size-3.5 pb-0.5" name="hash" />
              {{ props.author?.tag || tag }}
            </span>
          </div>
        </div>

        <Separator :size="1" />
        <div class="flex flex-col gap-1 px-1">
          <PopoverItem class="pl-7.5!">
            View Profile
          </PopoverItem>
          <PopoverItem>
            <Icons class="size-4" name="heart" />
            Follow
          </PopoverItem>
        </div>
        <Separator :size="1" />
        <div class="flex flex-col gap-1 px-1">
          <!--    <FollowButton /> -->

          <PopoverItem>
            <Icons class="size-4.5!" name="lucide:bell-ring" />
            Report
          </PopoverItem>
        </div>
        <Separator v-if="isAdmin" :size="1" />
        <LazyCommentModMenu v-if="isAdmin" v-bind="forward" />
      </div>
    </template>
  </tippy>
</template>
