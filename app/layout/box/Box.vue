<script lang="ts" setup>
import type { Mail } from './mails'

interface MailDisplayProps {
  mail: Mail | undefined
}

const props = defineProps<MailDisplayProps>()

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map(chunk => chunk[0])
    .join('')
})

const today = new Date()
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-center px-2 h-16">
      <div class="flex items-center gap-2">
        <!-- pin -->

        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="pin"
                class="size-4.75 **:stroke-[2]" />
              <span class="sr-only">Pin</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Pin</TooltipContent>
        </Tooltip>

        <!--
         <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="archive"
                class="size-4.5" />
              <span class="sr-only">Archive</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive</TooltipContent>
        </Tooltip>
 -->

        <!-- archive -->
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="archive"
                class="size-4.5" />
              <span class="sr-only">Move to archive</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to archive</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="trash"
                class="size-4.5" />
              <span class="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>
        <Separator
          orientation="vertical"
          class="mx-1 h-6" />
        <Tooltip>
          <Popover>
            <PopoverTrigger as-child>
              <TooltipTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon"
                  :disabled="!mail">
                  <icon
                    name="history"
                    class="size-4.5" />
                  <span class="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent class="flex w-[535px] p-0">
              <div class="flex flex-col gap-2 border-r px-2 py-4">
                <div class="px-4 text-2 font-medium">
                  Snooze until
                </div>
                <div class="grid min-w-[250px] gap-1">
                  <Button
                    variant="ghost"
                    class="justify-start font-normal">
                    Later today
                    <span class="ml-auto text-bc/60">3:00pm</span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal">
                    Tomorrow
                    <span class="ml-auto text-bc/60">1 day</span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal">
                    This weekend
                    <span class="ml-auto text-bc/60">2 days</span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal">
                    Next week
                    <span class="ml-auto text-bc/60">5 days</span>
                  </Button>
                </div>
              </div>
              <div class="p-2">
                <icon
                  name="grid"
                  class="size-4.5" />
              </div>
            </PopoverContent>
          </Popover>
          <TooltipContent>Snooze</TooltipContent>
        </Tooltip>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="send"
                class="size-4.5" />
              <span class="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :disabled="!mail">
              <icon
                name="export"
                class="size-4.5" />
              <span class="sr-only">Export to LoL</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Export to LoL</TooltipContent>
        </Tooltip>
      </div>
      <Separator
        orientation="vertical"
        class="mx-2 h-6" />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            :disabled="!mail">
            <icon
              name="more-vertical"
              class="size-4.5" />
            <span class="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mark as unread</DropdownMenuItem>
          <DropdownMenuItem>Star thread</DropdownMenuItem>
          <DropdownMenuItem>Add label</DropdownMenuItem>
          <DropdownMenuItem>Mute thread</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <Separator />
    <div
      v-if="mail"
      class="flex flex-1 flex-col">
      <div class="flex items-start p-4">
        <div class="flex items-start gap-4 text-2">
          <PocketIcon class="size-17 rounded-full aspect-square" />
          <div class="grid gap-1">
            <div class="font-semibold">
              {{ mail.name }}
            </div>
            <div class="line-clamp-1 text-2">
              {{ mail.subject }}
            </div>
            <div class="line-clamp-1 text-2">
              <span class="font-medium">Reply-To:</span>
              {{ mail.email }}
            </div>
          </div>
        </div>
        <div
          v-if="mail.date"
          class="ml-auto text-2 text-bc/60">
          1/12/2046
        </div>
      </div>
      <Separator />
      <div class="flex-1 whitespace-pre-wrap p-4 text-2">
        {{ mail.text }}
      </div>
      <Separator class="mt-auto" />
      <div class="p-4">
        <form>
          <div class="grid gap-4">
            <Textarea
              class="p-4"
              :placeholder="`Reply ${mail.name}...`" />
            <div class="flex items-center">
              <Label
                html-for="mute"
                class="flex items-center gap-2 text-2 font-normal">
                <Switch
                  id="mute"
                  aria-label="Mute thread" />
                Mute this thread
              </Label>
              <Button
                type="button"
                size="sm"
                class="ml-auto">
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      v-else
      class="p-8 text-center text-bc/60">
      No message selected
    </div>
  </div>
</template>
