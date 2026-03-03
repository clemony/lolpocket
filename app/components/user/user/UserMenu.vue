<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    comment: CommentData
    author: AccountData | null
  }>(),
  {},
)

const forward = reactiveOmit(props, "class")
const open = shallowRef<boolean>(false)
const user = await useSupabaseUser()
const isAdmin = computed(() => user?.value?.app_metadata?.user_role === "admin")
const img = useImage()
const splash = computed(() =>
  img(
    props.author?.splash
      ? props.author.splash.replace("centered", "uncentered")
      : "",
  ),
)
const tag = ref(false)
</script>

<template>
  <Tooltip
    v-model:open="open"
    v-bind="forward"
    animation="shift-toward"
    :offset="[0, 12]"
    :duration="150"
    :delay="500">
    <UButton
      class="hover-ring pointer-events-auto z-4 size-9 rounded-full"
      base="btn"
      color="neutral"
      :disabled="!props.comment.uuid"
      @click.stop>
      <UserAvatar
        class="pointer-events-none absolute self-center"
        :comment
        :author="props.author"
        size="c-9" />
    </UButton>
    <template #content>
      <div
        class="pointer-events-auto relative z-100 mb-1 w-74 overflow-hidden rounded-t-lg [&_button]:px-2">
        <div
          class="relative z-0 h-28 w-full overflow-hidden rounded-t-lg"
          :style="{
            background: `url(${splash})`,
            backgroundSize: '114%',
            backgroundPositionY: '10%',
            backgroundRepeat: 'no-repeat',
          }"
          :alt="`${author?.name}'s Splash`">
          <UBadge
            class="absolute top-2 right-2 size-6 gap-0 rounded-lg text-xs! font-medium opacity-76"
            color="neutral">
            <Icon class="size-3 text-nc" name="lp:cxp" />
            {{ author?.level }}
          </UBadge>
        </div>
        <div
          class="absolute top-18 left-2 grid size-20 place-items-center rounded-lg bg-p0 p-1.5">
          <UserAvatar class="size-full rounded-lg" :author :comment />
        </div>
        <div class="flex items-center gap-3 px-2 pb-2">
          <div
            class="inline flex-wrap justify-between space-x-2 pl-22 align-middle">
            <h2 class="inline font-serif text-xl! leading-3 drop-shadow-2xs">
              {{
                props.author?.name || author?.username || "Mysterious Summoner"
              }}
            </h2>
            <span
              v-if="props.author?.tag || tag"
              class="pb-1 align-middle leading-4"
              :data-role="comment.uuid === 'defnotclem' ? 'mod' : null">
              <icon class="inline size-3.5 pb-0.5" name="hash" />
              {{ props.author?.tag || tag }}
            </span>
          </div>
        </div>

        <Separator size="xs" class="my-1" />
        <div class="flex flex-col gap-1 px-1">
          <UButton class="pl-7.5!"> View Profile </UButton>
          <UButton>
            <Icons class="size-4" name="heart" />
            Follow
          </UButton>
        </div>
        <Separator size="xs" class="my-1" />
        <div class="flex flex-col gap-1 px-1">
          <!--    <FollowButton /> -->

          <UButton>
            <Icons class="size-4.5!" name="lucide:bell-ring" />
            Report
          </UButton>
        </div>
        <Separator v-if="isAdmin" size="xs" class="my-1" />
        <LazyCommentModMenu v-if="isAdmin" v-bind="forward" />
      </div>
    </template>
  </Tooltip>
</template>
