<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { message } = defineProps<{
  message: InboxMessage
}>()

const buttonProps: ButtonPropsExt = {
  variant: "solid",
  color: "transparent",
  square: true,

  ui: {
    label: "hidden",

    base: "group/ti z-3 gap-0 text-nc ring-0 hover:bg-p0!",
    leadingIcon:
      "group-not-hover/ti:text-nc! size-4 text-nc group-hover/ti:text-pc"
  }
}
const read = computed(() => message.read_at)
</script>

<template>
  <UButton
    :key="`${message.created_at}-${message.id}`"
    variant="ghost"
    :ui="{
      base: cn(
        'group/msg relative h-27! flex-col! items-start justify-center rounded-none py-0 pr-0! inset-ring-0 hover:bg-n2!',
        {
          'bg-p0  hover:bg-n2!': !read
        }
      )
    }"
    block>
    <div
      class="flex shrink-0 flex-nowrap items-center justify-start transition-all duration-300 ease-in-out group-has-[.trigger:hover]/msg:-translate-x-12">
      <div class="flex max-h-20 w-141 shrink-0 flex-nowrap justify-start">
        <div
          class="flex w-90 shrink-0 flex-nowrap justify-start justify-self-start overflow-hidden pr-2 pb-2">
          <UAvatar
            :src="getSummonerIcon(message.from.icon)"
            size="xl"
            :ui="{
              root: cn('mr-2.5 group-hover/msg:bg-n3', {
                'opacity-90 brightness-114 grayscale': read
              })
            }" />
          <div>
            <div
              class="w-full grow -translate-y-px flex-nowrap overflow-hidden text-start">
              <div
                class="inline-flex w-full grow -translate-y-px items-center justify-between gap-1 pr-2 align-middle text-nowrap">
                <span
                  :class="
                    cn('truncate text-sm font-bold group-hover/msg:text-nc', {
                      'opacity-50': read
                    })
                  ">
                  {{ message.title }}
                </span>
                <span class="text-xs text-pc/60 group-hover/msg:text-nc">
                  {{ formatTimeAgo(message.created_at) }}
                </span>
              </div>
              <div
                class="truncate text-xs! leading-none italic opacity-50 group-hover/msg:text-nc">
                {{ `${message.from.name ?? message.from.username}` }}
              </div>
            </div>

            <div class="mt-1 flex h-full max-h-20 gap-1.5 overflow-hidden">
              <p
                class="line-clamp-2 max-h-10 truncate overflow-hidden text-start text-sm leading-4.5 whitespace-break-spaces text-n5">
                {{ message.preview }}
              </p>
            </div>
          </div>
        </div>
        <div class="trigger group/trigger size-full">
          <div class="relative h-24 shrink-0 -translate-y-2.25">
            <div
              :class="
                cn(
                  'pointer-events-none absolute left-1 grid h-27 w-3 place-items-center transition-opacity duration-200 group-hover/trigger:opacity-0',
                  'group-hover/btn:top-0 group-hover/btn:before:absolute group-hover/btn:before:h-full group-hover/btn:before:w-8 group-hover/btn:before:bg-n2',
                  'before:border-l before:border-l-transparent'
                )
              ">
              <Icon
                name="i-right"
                class="absolute z-1 size-4 -translate-x-1 opacity-40 **:stroke-[2.4] group-hover/btn:text-nc group-hover/btn:opacity-100" />
            </div>
            <div
              class="0 relative flex h-full max-w-full grow translate-x-10 items-center pl-2.5 transition-all duration-250 ease-in-out group-hover/trigger:translate-x-0">
              <div class="isolate z-5 grid size-20 shrink-0 grid-rows-2 gap-1">
                <HintTooltip color="base" side="left" arrow text="Reply">
                  <UButton
                    v-bind="buttonProps"
                    tabindex="-1"
                    icon="i-lucide-reply"
                    label="Reply" />
                </HintTooltip>
                <HintTooltip text="Delete" side="left" color="base" arrow>
                  <UButton
                    v-bind="buttonProps"
                    tabindex="-1"
                    icon="i-trash"
                    label="Delete"
                    @click.stop="user().deleteInboxMessage(message.id)" />
                </HintTooltip>

                <!--            <div
                  class="pointer-events-none flex h-full translate-x-2 items-center justify-end">
                  <div
                    class="absolute right-0 h-3 w-1.5 border-x border-x-n5/80" />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UButton>
</template>
