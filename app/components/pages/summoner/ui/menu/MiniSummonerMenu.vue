<script lang="ts" setup>
import { DropdownMenuTrigger } from 'reka-ui'

const { class: className, summoner, align, side, disableLink } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  side?: Side
  align?: Align
  disableLink?: boolean
}>()

const open = ref(false)
</script>

<template>
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger
      as-child
      :class="cn('z-2 group/dd data-[state=open]:bg-b2', className)">
      <slot>
        <icon
          name="more"
          class="opacity-60 group-hover/dd:opacity-100 group-data-[state=open]/dd:opacity-100" />
      </slot>
    </DropdownMenuTrigger>

    <LazyDropdownMenuPopContent
      :align
      :side
      class="w-54">
      <Label>
        <!--    <icon
          name="tag"
          class="**:stroke-[2.4] size-4.5   !opacity-30" />
        <Grow />
       <UserTitle class="badge bg-tint-domination/50 border-tint-domination/20 !text-2 text-white/96 " /> -->
      </Label>

      <DropdownMenuItem
        class="!opacity-100 h-full max-w-full flex"
        @click="navigateTo('/')">
        <SummonerIcon
          :summoner
          class="size-7 rounded-md" />
        <SummonerName
          :summoner
          as="h3"
          class="grow !text-5   truncate font-serif " />

        <SummonerTag :summoner />
      </DropdownMenuItem>

      <Separator class="mt-2" />
      <DropdownMenuLabel
        class="py-1">
        Social
      </DropdownMenuLabel>
      <Separator class="mb-1" />

      <DropdownMenuItem
        as-child>
        <FollowButton
          text
          size="sm"
          variant="base"
          :summoner />
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <MessageButton
          size="sm"
          variant="base"
          :summoner>
          Message <span>{{ summoner.name }}</span>
        </MessageButton>
      </DropdownMenuItem>

      <DropdownMenuItem as-child>
        <BlockButton
          size="sm"
          variant="base"
          :summoner>
          Block User
        </BlockButton>
      </DropdownMenuItem>
    </LazyDropdownMenuPopContent>
  </DropdownMenu>
</template>