<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { message } = defineProps<{
  message: InboxMessage
}>()

const buttonProps: ButtonPropsExt = {
  tabindex: -1,
  color: "neutral",
  size: "sm",
  square: true,
  ui: {
    leadingIcon: "size-3.5"
  }
}
</script>

<template>
  <UButton
    :key="`${message.date}-${message.id}`"
    variant="ghost"
    as="div"
    :ui="{
      base: 'group/msg relative h-24! flex-col! justify-center rounded-none bg-transparent py-0 pr-0! hover:bg-p1'
    }"
    block>
    <div
      class="flex w-full shrink-0 flex-nowrap items-center justify-start transition-all duration-300 ease-in-out group-has-[.trigger:hover]/msg:-translate-x-12">
      <div class="flex max-h-20 w-max shrink-0 flex-nowrap">
        <div
          class="flex w-full max-w-120 shrink-0 flex-nowrap overflow-hidden pr-2">
          <UAvatar
            :src="getSummonerIcon(message.from.icon)"
            size="xl"
            :ui="{ root: 'mr-2.5 -ml-0.5' }" />
          <div>
            <div class="w-full grow flex-nowrap overflow-hidden text-start">
              <div
                class="inline-flex w-full grow items-center justify-between gap-1 pr-2 align-middle text-nowrap">
                <span class="truncate text-sm font-bold">
                  {{ message.title }}
                </span>
                <span class="text-xs text-pc/60">
                  {{ formatTimeAgo(message.date) }}
                </span>
              </div>
              <div class="truncate text-xs! italic opacity-50">
                {{ `${message.from.username}@lolpocket.com` }}
              </div>
            </div>

            <div class="flex h-full max-h-20 gap-1.5 overflow-hidden">
              <p
                class="line-clamp-2 max-h-10 truncate overflow-hidden text-start text-sm whitespace-break-spaces text-n1">
                {{ message.content }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="trigger group/trigger relative h-24 w-32 shrink-0 -translate-y-2.25">
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
            class="flex size-full translate-x-10 flex-col justify-center gap-1 pl-2.5 transition-all duration-250 ease-in-out group-hover/trigger:translate-x-0">
            <Tooltip label="Delete message">
              <UButton
                v-bind="buttonProps"
                icon="i-trash"
                @click.stop="user().deleteInboxMessage(message.id)" />
            </Tooltip>
            <Tooltip label="Mark read">
              <UButton icon="i-lucide-mail-open" v-bind="buttonProps" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </UButton>
</template>
