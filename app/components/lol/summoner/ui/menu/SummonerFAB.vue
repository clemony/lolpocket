<script setup lang="ts">
import { motion } from "motion-v";

const { summoner } = useSummonerInject();

const { scrollTop, scrollYProgress } = useScrollInject();

const classes = "size-18! cursor-pointer! shadow-sm backdrop-blur";

const x = useTransform(scrollYProgress, [0, 0.08], ["160px", "110px"]);
useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("🌱 - latest:", latest);
  console.log("🌱 - x:", x);
});
const open = ref<boolean>(false);

const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, (event) => (open.value = false));

const buttons = [
  {
    name: "Block",
    click: () => (ui().blockDialog = true),
    icon: "ban",
  },
  {
    name: "Message",
    click: () => console.log("🌱 - Message:"),
    icon: "lucide:message-square-more",
  },
  {
    name: "Top",
    click: () => scrollTop(),
    icon: "arrow-up",
  },
];
</script>

<template>
  <Collapsible v-model:open="open" as-child>
    <motion.div
      class="pointer-events-none fixed top-34 z-20 flex-col! items-start [&_button]:pointer-events-auto"
      :style="{
        left: useSpring(x, {
          mass: 1,
          damping: 20,
          stiffness: 101,
        }),
      }"
    >
      <CollapsibleTrigger as-child>
        <Button
          as="button"
          shape="circle"
          variant="base"
          :class="cn('border-0 shadow-black/30!', classes)"
        >
          <SummonerIcon :summoner class="size-18" />
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
      <CollapsibleContent ref="target" class="space-y-3 py-3">
        <!-- buttons that show up when FAB is open -->

        <div class="flex items-center gap-3">
          <UpdateSummoner
            size="xl"
            :summoner
            tip-side="left"
            circle
            shape="circle"
            variant="neutral"
            :class="cn('', classes)"
          />
          <p
            class="rounded-lg border border-b2 bg-b1/70 p-2 text-3! leading-4 italic backdrop-blur"
          >
            Last Updated<br />
            {{ formatTimeAgo(summoner.updatedMatch, "short") || "Never" }}
          </p>
        </div>
        <FollowButton
          size="xl"
          placement="right"
          shape="circle"
          :summoner
          variant="base"
          :class="cn('', classes)"
        />

        <Button
          v-for="button in buttons"
          :key="button.name"
          v-tippy="{
            content: button.name,
            theme: 'base',
            placement: 'right',
            arrow: false,
          }"
          size="xl"
          shape="circle"
          :summoner
          variant="base"
          :class="cn('', classes)"
          @click="button.click()"
        >
          <icon :name="button.icon" class="opacity-70" />
        </Button>
      </CollapsibleContent>
    </motion.div>
  </Collapsible>
</template>
