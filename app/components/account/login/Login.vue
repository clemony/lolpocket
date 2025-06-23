<script setup lang="ts">
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

watch(
  () => tabModel.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div class="size-full">
    <Tabs v-model:model-value="tabModel" class="w-full">
      <IndicatorTabsList class="grid-cols-2 bg-b3/60 h-10 w-full">
        <IndicatorTabsTrigger value="connect">
          <icon name="fluent-mdl2:plug-disconnected" />
          Connect
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="email">
          <icon name="fluent:mail-28-regular" />
          Email
        </IndicatorTabsTrigger>

        <TabIndicator class="bg-b1/50" />
      </IndicatorTabsList>

      <div
        v-if="tabModel == 'connect'"
        class="z-0 mt-12 w-full gap-2 px-1">
        <h3>Sign in</h3>

        <p class="mb-10">
          Log in with another account.
        </p>

        <div
          class="grid grid-cols-3 gap-4">
          <Riot />

          <Discord />

          <Google />
        </div>
      </div>

      <div
        v-if="tabModel == 'email'"
        class="z-0 mt-12 w-4/5 px-1">
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
