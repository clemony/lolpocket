<script setup lang="ts">
import { motion } from 'motion-v'

const { summoner } = useSummonerInject()

const { scrollTop, scrollYProgress } = useScrollInject()

const classes = '!cursor-pointer !size-18 backdrop-blur shadow-sm '

const x = useTransform(scrollYProgress, [0, 0.08], ['160px', '110px'])
useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  console.log('🌱 - latest:', latest)
  console.log('🌱 - x:', x)
})
const open = ref<boolean>(false)

const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, event => open.value = false)

const buttons = [
  {
    name: 'Block',
    click: () => ui().blockDialog = true,
    icon: 'ban',
  },
  {
    name: 'Message',
    click: () => console.log('🌱 - Message:'),
    icon: 'lucide:message-square-more',
  },
  {
    name: 'Top',
    click: () => scrollTop(),
    icon: 'arrow-up',
  },
]
</script>

<template>
  <Collapsible
    v-model:open="open"
    as-child>
    <motion.div
      class="
fixed top-34 pointer-events-none  [&_button]:pointer-events-auto   z-20 !flex-col items-start"
      :style="{
        left: useSpring(x, {
          mass: 1,
          damping: 20,
          stiffness: 101 }),
      }">
      <CollapsibleTrigger as-child>
        <Button
          as="button"
          shape="circle"
          variant="base"
          :class="cn('!shadow-black/30 border-0 ', classes)">
          <SummonerIcon
            :summoner
            class="size-18" />
        <!--
          <div class="space-y-2 ">
            <div class="flex items-center">
              <SummonerName
                :summoner
                class="text-lg mr-2 font-serif font-bold" />
              <SummonerTag
                :summoner
                class="gap-0" />
            </div>
            <div class="flex w-full justify-end items-center">
              <SummonerLevel :summoner />
            </div>
          </div> -->
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        ref="target"
        class="space-y-3 py-3">
        <!-- buttons that show up when FAB is open -->

        <div
          class=" gap-3  flex items-center">
          <UpdateSummoner
            size="xl"
            :summoner
            tip-side="left"
            circle
            shape="circle"
            variant="neutral"
            :class="cn('', classes)" />
          <p class="border-b2 border !text-3 p-2 bg-b1/70 backdrop-blur rounded-lg italic leading-4 ">
            Last Updated<br />
            {{ formatTimeAgo(summoner.updatedMatch, 'short') || 'Never' }}
          </p>
        </div>
        <FollowButton
          size="xl"
          placement="right"
          shape="circle"
          :summoner
          variant="base"
          :class="cn(' ', classes)" />

        <Button
          v-for="button in buttons"
          :key="button.name"
          v-tippy="{ content: button.name, theme: 'base', placement: 'right', arrow: false }"
          size="xl"
          shape="circle"
          :summoner
          variant="base"
          :class="cn(' ', classes)"
          @click="button.click()">
          <icon
            :name="button.icon"
            class="opacity-70" />
        </Button>
      </CollapsibleContent>
    </motion.div>
  </Collapsible>
</template>