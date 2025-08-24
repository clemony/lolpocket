<script setup lang="ts">
import { toast } from 'vue-sonner'

const open = ref(false)
const placeholder = ref()

const profileSettingsData = {
  solo: {
    title: 'Ranked Solo',
    text: 'If you really think about it, what\'s not there isn\'t real.',
  },
  flex: {
    title: 'Ranked Flex',
    text: 'It\'s not like we don\'t have friends to play with. We do. They are cats, though.',
  },
  allies: {
    title: 'Allies',
    text: 'Some things will never be real anyway.',
  },

}

async function onSubmit(values: any) {
  toast.success({
    title: 'Account Updated!',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <article class="w-full space-y-6">
    <header>
      <h3 class="text-6 font-semibold">
        Profile
      </h3>
      <p class="text-3 leading-8 opacity-60">
        Update and view your account settings. Set your region.
      </p>
      <Separator class="my-4" />
    </header>
    <form
      class="space-y-8 w-full"
      @submit="onSubmit">
      <fieldset class="space-y-6">
        <div class="leading-4 ">
          <Label
            as="legend"
            class="text-4 font-semibold mb-2">Splash</Label>

          <p class="label text-wrap ">
            <ProfileSplashOptions />
          </p>
        </div>
        <Input
          v-model="as().account.username"
          class="validator"
          type="text"
          placeholder="Username" />
      </fieldset>

      <fieldset class="space-y-4">
        <div class="leading-4 ">
          <Label
            as="legend"
            class="text-4 font-semibold mb-2">Splash</Label>

          <p class="label text-wrap ">
            This is the name that will be used throughout the site. Defers to in game name if a Riot account is connected.
          </p>
        </div>
        <Input
          v-model="as().account.username"
          class="validator"
          type="text"
          placeholder="Username" />
      </fieldset>

      <fieldset class="space-y-4">
        <div class="leading-4 ">
          <Label
            as="legend"
            class="text-4 font-semibold mb-2">Splash</Label>

          <p class="label text-wrap ">
            This is the name that will be used throughout the site. Defers to in game name if a Riot account is connected.
          </p>
        </div>
        <Input
          v-model="as().account.username"
          class="validator"
          type="text"
          placeholder="Username" />
      </fieldset>
      <div class="flex justify-start">
        <Button
          variant="neutral">
          Update account
        </Button>
      </div>
    </form>
  </article>
</template>
<!--
      <h1
        id="splash"
        class="dst font-bold">
        Profile Splash
      </h1>

      <Separator class="my-4" />
      <h1
        id="display"
        class="dst font-bold">
        Display Options
      </h1>
      <div class="grid gap-10 grid-cols-2 mr-6">
        <ActionCard
          v-model:model-value="as().settings.showSolo"
          :title="profileSettingsData.solo.title"
          :text="profileSettingsData.solo.text">
          {{ as().settings.showSolo ? "Visible" : "Hidden" }}
        </ActionCard>
        <ActionCard
          v-model:model-value="as().settings.showFlex"
          :title="profileSettingsData.flex.title"
          :text="profileSettingsData.flex.text">
          {{ as().settings.showFlex ? "Visible" : "Hidden" }}
        </ActionCard>
        <ActionCard
          v-model:model-value="as().settings.showAllies"
          :title="profileSettingsData.allies.title"
          :text="profileSettingsData.allies.text">
          {{ as().settings.showAllies ? "Visible" : "Hidden" }}
        </ActionCard>
      </div>

      <Separator class="my-4" />
      <h1
        id="display"
        class="dst font-bold">
        Stored Data
      </h1>
      <div class="grid gap-10 grid-cols-2 mr-6">
        <ClearAllMatchData />
      </div> -->