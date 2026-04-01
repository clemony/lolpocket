<script lang="ts" setup>
const hotkeyRegistry = {
  app: {
    label: "App Controls",
    keys: {
      search: {
        k: "Search",
        icon: "i-search",
        v: ["meta", "k"],
      },
      logIn: {
        k: "Log in",
        icon: "i-log-in",
        v: ["shift", "meta", "s"],
      },
      logOut: {
        k: "Log out",
        icon: "i-log-out",
        v: ["shift", "meta", "q"],
      },
    },
  },
  navigation: {
    label: "Navigation",
    keys: {
      open: {
        k: "Open",
        icon: "i-open",
        v: ["meta", "o"],
      },
      close: {
        k: "Close",
        icon: "i-x",
        v: ["meta", "x"],
      },
    },
  },
}
</script>

<template>
  <UCard
    variant="ghost"
    :ui="{
      root: 'w-full divide-y divide-p3/80',
      header: 'relative px-4! py-3!',
      body: 'px-11! py-2!',
    }">
    <template #header>
      <UPageFeature
        title="Keybinds"
        icon="i-command"
        :ui="{
          root: 'w-full',
          wrapper: 'w-full',
          description: 'mt-0.5',
          title: 'text-md',
          leadingIcon: 'mt-0.75 size-3.5! **:stroke-[2.3]',
        }"
        description="Configure app hotkeys." />
      <Tooltip label="Exit" side="bottom" class="absolute top-2 right-3">
        <UButton
          size="sm"
          icon="i-x"
          :ui="{
            base: '',
            leadingIcon: 'size-4! opacity-60',
          }"
          variant="ghost" />
      </Tooltip>
    </template>
    <!-- row 1 -->
    <template v-for="item in hotkeyRegistry" :key="item.label">
      <div class="col-span-4 py-3 text-sm font-semibold text-n5">
        {{ item.label }}
      </div>

      <UCard
        :ui="{
          root: 'mb-2 w-full divide-y divide-p3/80 bg-transparent text-sm shadow-none',
          header:
            'grid w-full grid-cols-[16px_0.7fr_1.5fr_1fr] items-center gap-x-2 px-4! pt-2! pb-1! font-medium text-n4',
          body: 'grid auto-rows-max grid-cols-[16px_0.7fr_1.5fr_1fr] items-center gap-x-2 px-4! *:py-0.75',
        }">
        <!-- label -->

        <template #header>
          <div class="col-span-2">
            Action
          </div>
          <div class="pl-2">
            Key
          </div>
          <div></div>
        </template>
        <template v-for="(key, index) in item.keys" :key="index">
          <div>
            <Icon :name="key.icon" class="size-3.5 **:stroke-[2.4]" />
          </div>
          <div class="text-xs font-medium text-n4">
            {{ key.k }}
          </div>

          <EditField class="h-7.5 w-4/5 hover:bg-p0/80" :label="key.k">
            <UKbd
              v-for="k in key.v"
              :key="k"
              class="text-n3!"
              variant="ghost"
              square
              :value="k" />
            <template #edit>
              <UInput
                size="sm"
                placeholder="Enter keybind"
                class="w-4/5 hover:ring-pc/60" />
            </template>
            <template #controls>
              <Tooltip label="Reset to default">
                <UButton
                  :ui="{
                    leadingIcon: 'size-3.5! opacity-70',
                  }"
                  size="sm"
                  variant="ghost"
                  icon="i-reset" />
              </Tooltip>
            </template>
          </EditField>

          <Separator
            v-if="index !== Object.keys(item.keys).reverse()[0]"
            class="col-span-full opacity-60" />
        </template>
      </UCard>
    </template>
  </UCard>
</template>
