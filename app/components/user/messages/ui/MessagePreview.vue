<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { message } = defineProps<{
  message: InboxMessage
}>()

const buttonProps: ButtonPropsExt = {
  tabindex: -1,
  color: "base",
  size: "md",
  square: true
}

const read = computed(() => message.read_at)
</script>

<template>
  <UButton
    :key="`${message.created_at}-${message.id}`"
    :variant="!read ? 'ghost' : 'solid'"
    color="secondary"
    as="div"
    :ui="{
      base: 'group/msg relative h-24! flex-col! items-start justify-center rounded-none bg-transparent py-0 pr-0! inset-ring-0 hover:bg-p1'
    }"
    block>
    <div
      class="flex shrink-0 flex-nowrap items-center justify-start transition-all duration-300 ease-in-out group-has-[.trigger:hover]/msg:-translate-x-20">
      <div class="flex max-h-20 w-141 shrink-0 flex-nowrap justify-start">
        <div
          class="flex w-121 shrink-0 flex-nowrap justify-start justify-self-start overflow-hidden pr-2">
          <UAvatar
            :src="getSummonerIcon(message.from.icon)"
            size="xl"
            :ui="{
              root: cn('mr-2.5', {
                'opacity-90 brightness-114 grayscale': read
              })
            }" />
          <div>
            <div class="w-full grow flex-nowrap overflow-hidden text-start">
              <div
                class="inline-flex w-full grow items-center justify-between gap-1 pr-2 align-middle text-nowrap">
                <span
                  :class="
                    cn('truncate text-sm font-bold', { 'opacity-50': read })
                  ">
                  {{ message.title }}
                </span>
                <span class="text-xs text-pc/60">
                  {{ formatTimeAgo(message.created_at) }}
                </span>
              </div>
              <div class="truncate text-xs! italic opacity-50">
                {{ `${message.from.name ?? message.from.username}` }}
              </div>
            </div>

            <div class="flex h-full max-h-20 gap-1.5 overflow-hidden">
              <p
                class="line-clamp-2 max-h-10 truncate overflow-hidden text-start text-sm whitespace-break-spaces text-n5">
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
                  'pointer-events-none absolute left-1 grid h-24 w-3 place-items-center transition-opacity duration-200 group-hover/trigger:opacity-0',
                  'group-hover/btn:top-0 group-hover/btn:before:absolute group-hover/btn:before:h-full group-hover/btn:before:w-8 group-hover/btn:before:bg-p2',
                  'before:border-l before:border-l-transparent'
                )
              ">
              <Icon
                name="i-right"
                class="absolute z-1 size-4 opacity-40 **:stroke-[2.4] group-hover/btn:opacity-100" />
            </div>
            <div
              class="relative flex h-full max-w-full grow translate-x-10 items-center pl-2.5 transition-all duration-250 ease-in-out group-hover/trigger:translate-x-0 before:absolute before:size-full before:scale-x-160 before:scale-y-120">
              <div class="grid size-20 shrink-0 grid-cols-2 grid-rows-2 gap-1">
                <UTheme
                  :ui="{
                    button: {
                      label: 'hidden',

                      base: 'group/ti isolate gap-0 hover:bg-neutral! hover:inset-ring-neutral hover:btn-neutral',
                      leadingIcon:
                        'group-not-hover/ti:text-pc! size-4 text-pc group-hover/ti:text-nc'
                    }
                  }">
                  <HintTooltip side="top" arrow label="Reply">
                    <UButton
                      icon="i-lucide-reply"
                      label="Reply"
                      v-bind="buttonProps" />
                  </HintTooltip>
                  <HintTooltip side="top" arrow l label="Mark read">
                    <UButton
                      icon="i-lucide-mail-open"
                      label="Mark read"
                      v-bind="buttonProps" />
                  </HintTooltip>
                  <HintTooltip label="Delete" side="bottom" arrow>
                    <UButton
                      v-bind="buttonProps"
                      icon="i-trash"
                      label="Delete"
                      @click.stop="user().deleteInboxMessage(message.id)" />
                  </HintTooltip>
                </UTheme>
                <div
                  class="pointer-events-none flex h-full translate-x-2 items-center justify-end">
                  <div
                    class="absolute right-0 h-3 w-1.5 border-x border-x-n5/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UButton>
</template>
