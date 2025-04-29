<script setup lang="ts">
import type { LabelVariants } from 'components/base/label/lindex'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class1?: HTMLAttributes['class']
}>()
const accountTypes = [
  {
    id: 'riotAccount',
    name: 'Riot Account',
    icon: 'simple-icons:riotgames',
  },
  {
    id: 'google',
    name: 'Google',
    icon: 'teenyicons:google-outline',
  },
  {
    id: 'email',
    name: 'email',
    icon: 'teenyicons:at-outline',
  },
]

const tabModel = ref('connect')
const variants = computed(() => {
  let a = ''
  let b = ''
  if (tabModel.value == 'connect') {
    a = 'neutral'
    b = 'outline'
  }
  else {
    a = 'outline'
    b = 'neutral'
  }
  return { a, b }
})
console.log('💠 - variants - variants:', variants.value)
</script>

<template>
  <div class="mt-18 h-84 **:z-9999 **:pointer-events-auto">
    <Tabs class="w-147">
      <div class="flex items-center gap-5">
        <ConnectButton
          v-tippy="'Connect'"
          :variant="variants.a as LabelVariants['variant']" :size="'md' as LabelVariants['size']" @click="tabModel = 'connect'">
          Connect
        </ConnectButton>

        <Label
          :variant="variants.b as LabelVariants['variant']"
          size="md"
          class="group flex gap-4 pl-13 relative ">
          <input
            v-model="tabModel"
            type="radio"
            class="hidden"
            value="email" />
          <icon name="fluent:mail-28-regular" class="absolute  size-6 group-hover:opacity-0 opacity-90 left-3" />
          <icon name="fluent:mail-read-28-regular" class="size-6 absolute opacity-0 group-hover:opacity-90 left-3" />
          Email
        </Label>
      </div>

      <div
        v-if="tabModel == 'connect'"
        class="z-0 mt-12 w-full gap-2 px-1">
        <h3>Connect</h3>
        <p class="mb-10">
          Log in with another account.
        </p>

        <div
          class="grid w-[60%] gap-4"
          :class="props.class1">
          <Riot />

          <Discord />

          <Google />
        </div>
      </div>

      <div
        v-if="tabModel == 'email'"
        class="z-0 mt-12 w-4/5 px-1"
        :class="props.class1">
        <h3>Email</h3>
        <p class="mb-10">
          Log in with email address.
        </p>

        <Email class="email-form" />
      </div>
    </Tabs>
  </div>
</template>

<style scoped></style>
