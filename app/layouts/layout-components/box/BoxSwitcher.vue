<script lang="ts" setup>
interface AccountSwitcherProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  isCollapsed: boolean
}

const props = defineProps<AccountSwitcherProps>()

const selectedEmail = ref<string>(props.accounts[0].email)
const selectedEmailData = computed(() =>
  props.accounts.find(item => item.email === selectedEmail.value)
)
</script>

<template>
  <div
    :class="
      cn(
        'flex h-[52px] items-center justify-center',
        isCollapsed ? 'h-[52px]' : 'px-2',
      )
    ">
    <Select v-model="selectedEmail">
      <SelectTrigger
        aria-label="Select account"
        :class="
          cn(
            'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
            {
              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden':
                isCollapsed,
            },
          )
        ">
        <SelectValue placeholder="Select an account">
          <div class="flex items-center gap-3">
            <icon
              class="size-4"
              :name="selectedEmailData!.icon" />
            <span v-if="!isCollapsed">
              {{ selectedEmailData!.label }}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="account of accounts"
          :key="account.email"
          :value="account.email">
          <div
            class="flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-bc">
            <icon
              class="size-4"
              :name="account.icon" />
            {{ account.email }}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
