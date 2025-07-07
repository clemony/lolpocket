<script lang="ts" setup>
import { motion } from 'motion-v'
import { itemVariants, variants } from './account/inbox/inbox-variants'

const { nav } = defineProps<{
  nav: string | null
}>()
const emit = defineEmits(['open:settings', 'open:admin', 'reset-count'])
const as = useAccountStore()
const inbox: DataObject[] = [
  {
    name: 'Notifications',
    icon: {
      name: 'ph:bell-simple-bold',
      class: 'size-4 mt-px',
    },
    new: null,
  },
  {
    name: 'Messages',
    icon: {
      name: 'fluent:mail-16-regular',
      class: 'size-5',
    },
    new: null,
  },
]

const openBox = ref('Notifications')

const hello = computed (() => getGreeting())

onMounted (() => {
  inbox[0].new = as.userAccount.inbox.newNotifications
  inbox[1].new = as.userAccount.inbox.newMessages
})

watch(() => as.userAccount.inbox.newNotifications, (newVal) => {
  if (newVal)
    inbox[0].new = newVal
})

watch(() => as.userAccount.inbox.newMessages, (newVal) => {
  if (newVal)
    inbox[1].new = newVal
})

watch(() => openBox.value, (newVal) => {
  if (newVal == 'Messages') {
    as.userAccount.inbox.newNotifications = 0
    inbox[0].new = as.userAccount.inbox.newNotifications
  }
  if (newVal == 'Notifications') {
    as.userAccount.inbox.newMessages = 0
    inbox[1].new = as.userAccount.inbox.newMessages
  }
})

watch(() => nav, (newVal) => {
  if (newVal == null)
    emit('reset-count', openBox.value)
})
</script>

<template>
  <NavigationMenuItem value="signIn" avoid-collisions>
    <NavigationMenuTrigger :arrow="false" class="relative size-11.5 rounded-full grid bg-transparent place-items-center group/acc-btn hover:shadow-sm hover:drop-shadow-sm  data-[state=open]:ring-bc/20 hover:ring-bc/20  ring ring-transparent">
      <!--  <div class=" absolute inset-0 opacity-0 transition-opacity duration-250 group-hover/acc-btn:opacity-100  group-data-[state=open]/acc-btn:opacity-100 " /> -->
      <AccountSummonerIcon
        :account="as.userAccount" :class="cn(
          'rounded-full  shadow-sm place-self-center size-9.5 grayscale transition duration-200 ring-1 ring-offset-2 ring-transparent ring-offset-transparent drop-shadow-sm',
          'group-data-[state=open]/acc-btn:grayscale-0  group-data-[state=open]/acc-btn:ring-bc group-data-[state=open]/acc-btn:ring-offset-b1',
          'group-hover/acc-btn:grayscale-0 group-hover/acc-btn:ring-bc group-hover/acc-btn:ring-offset-b2 ',
        )">
      </AccountSummonerIcon>
    </NavigationMenuTrigger>

    <NavigationMenuContent align="end" class="gap-6  pb-2  flex flex-col gap-1 inset-shadow-xxs w-max" @focus-outside.prevent>
      <div v-if="as.currentSession.session" class="size-full w-130  bg-b2/40  h-130 flex flex-col">
        <div class="px-4 pt-4 mb-9 flex gap-4 h-14 items-center w-full">
          <AccountSummonerIcon class="size-14 shadow-sm drop-shadow-xs rounded-full mt-2" />

          <div class="flex flex-col space-between size-full">
            <div class="flex gap-1 items-center w-full h-5 relative">
              <span class="font-medium text-bc/80 text-2">
                {{ hello.greeting }},
              </span>

              <Grow />

              <NavigationMenuLink v-if="as.userAccount && as.userAccount.role == 'admin'" v-tippy="'Admin'" class="size-10 grid place-items-center -mr-2 opacity-60 hover:opacity-100 cursor-pointer" @click="emit('open:admin')">
                <icon name="ri:key-2-line" class="size-6 shrink-0 dst pointer-events-none" />
              </NavigationMenuLink>

              <NavigationMenuLink v-tippy="'Account Settings'" class="size-10 grid place-items-center -mr-2 opacity-60 hover:opacity-100 cursor-pointer" @click="emit('open:settings')">
                <icon name="gear-solid" class="size-4.5 shrink-0 dst pointer-events-none" />
              </NavigationMenuLink>
            </div>

            <h1 class="font-bold font-serif text-9 dst self-start">
              {{ as.userAccount.riot.name || as.userAccount.name }}
            </h1>
          </div>
        </div>

        <div class="tabs tabs-lift grow border-b-0 -mb-1">
          <template v-for="item in inbox" :key="item.name">
            <LayoutGroup>
              <motion.label
                :value="item.name"
                layout class="tab gap-2 z-1 first:-ml-1.25 text-3 n !font-medium flex items-center !border-b-0 group/tab !text-start"
                :class="cn('', { '!pb-[4px] !px-[21px]': item.name != openBox })"
                :style="{
                  '--tab-radius-min': '0.65rem',
                  '--tab-border-colors': 'var(--color-b4)',
                  '--tab-paddings': '5px 20px',
                  '--tabs-height': '30px',
                }">
                <input v-model="openBox" type="radio" name="inbox-tab" :value="item.name" />

                <icon :name="item.icon.name" :class="cn('dst group-hover/tab:opacity-100  transition-opacity duration-200', { 'opacity-50': openBox != item.name }, item.icon.class)" />
                {{ item.name }}
                <AnimatePresence>
                  <motion.span v-if="item.new" :variants="itemVariants" :animate="item.new ? 'visible' : 'hidden'" class="ml-2 relative inset-shadow-xxs ring ring-b3 shadow-xs rounded-lg badge-sm text-1">
                    {{ item.new }} new!
                  </motion.span>
                </AnimatePresence>
              </motion.label>

              <div class="tab-content bg-b1 drop-shadow-sm z-0 rounded-none w-full h-[calc(100%-30px)] border-t border-t-b4 pb-10  relative">
                <Inbox v-if="openBox == item.name" :inbox="item.name" @reset-new="item.new == 0" />
              </div>
            </LayoutGroup>
          </template>
        </div>
      </div>

      <div v-else class="w-full flex justify-between items-center">
        <Login />
      </div>

      <div class="flex border-t border-t-b4/80 pt-2  justify-between items-center px-3">
        <div class="flex   items-center text-2 gap-2">
          <icon :name="hello.icon" class="size-5 dst" />
        </div>

        <div class="flex gap-4">
          <NavHyperlink to="/about" hash class="text-1 [&_svg]:size-3.5">
            about
          </NavHyperlink>

          <NavHyperlink to="/docs" hash class="text-1 [&_svg]:size-3.5">
            docs / help
          </NavHyperlink>

          <NavHyperlink v-if="as.currentSession.session" @click="useSignOut()">
            <icon name="mdi:sign-out" class="size-4  shrink-0 dst " />
          </NavHyperlink>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>