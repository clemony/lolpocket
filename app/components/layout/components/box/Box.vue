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
    <div class="flex h-16 items-center px-2">
      <div class="flex items-center gap-2">
        <!-- pin -->

        <Tooltip>
          <!-- size="icon"  -->
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              :disabled="!mail">
              <icon
                class="size-4.75 **:stroke-2"
                name="pin" />
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
        <!--  <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <icon class="size-4.5" name="archive" />
              <span class="sr-only">Move to archive</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to archive</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <icon class="size-4.5" name="trash" />
              <span class="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>
        <Separator class="mx-1 h-6" orientation="vertical" />
        <Tooltip>
          <Popover>
            <PopoverTrigger as-child>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!mail">
                  <icon class="size-4.5" name="history" />
                  <span class="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
        <PopoverContent class="flex w-[535px] p-0">
          <div class="flex flex-col gap-2 border-r px-2 py-4">
            <div class="px-4 text-sm font-medium">
              Snooze until
            </div>
            <div class="grid min-w-[250px] gap-1">
              <Button class="justify-start font-normal" variant="ghost">
                Later today
                <span class="text-pc/60 ml-auto">3:00pm</span>
              </Button>
              <Button class="justify-start font-normal" variant="ghost">
                Tomorrow
                <span class="text-pc/60 ml-auto">1 day</span>
              </Button>
              <Button class="justify-start font-normal" variant="ghost">
                This weekend
                <span class="text-pc/60 ml-auto">2 days</span>
              </Button>
              <Button class="justify-start font-normal" variant="ghost">
                Next week
                <span class="text-pc/60 ml-auto">5 days</span>
              </Button>
            </div>
          </div>
          <div class="p-2">
            <icon class="size-4.5" name="grid" />
          </div>
        </PopoverContent>
        </Popover>
        <TooltipContent>Snooze</TooltipContent>
        </Tooltip> -->
      </div>
      <!-- <div class="ml-auto flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <icon class="size-4.5" name="send" />
              <span class="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <icon class="size-4.5" name="export" />
              <span class="sr-only">Export to LoL</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Export to LoL</TooltipContent>
        </Tooltip>
      </div>
      <Separator class="mx-2 h-6" orientation="vertical" />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" :disabled="!mail">
            <icon class="size-4.5" name="more-vertical" />
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
    </div> -->
      <Separator />
      <div
        v-if="mail"
        class="flex flex-1 flex-col">
        <div class="flex items-start p-4">
          <div class="flex items-start gap-4 text-sm">
            <PocketIcon class="aspect-square size-17 rounded-full" />
            <div class="grid gap-1">
              <div class="font-semibold">
                {{ mail.name }}
              </div>
              <div class="line-clamp-1 text-sm">
                {{ mail.subject }}
              </div>
              <div class="line-clamp-1 text-sm">
                <span class="font-medium">Reply-To:</span>
                {{ mail.email }}
              </div>
            </div>
          </div>
          <div
            v-if="mail.date"
            class="ml-auto text-sm text-pc/60">
            1/12/2046
          </div>
        </div>
        <Separator />
        <div class="flex-1 p-4 text-sm whitespace-pre-wrap">
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
                  class="flex items-center gap-2 text-sm font-normal"
                  html-for="mute">
                  <Switch
                    id="mute"
                    aria-label="Mute thread" />
                  Mute this thread
                </Label>
                <Button
                  class="ml-auto"
                  type="button"
                  size="sm">
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        v-else
        class="p-8 text-center text-pc/60">
        No message selected
      </div>
    </div>
  </div>
</template>
