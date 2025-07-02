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

const emailChecked = ref(false)

</script>

<template>
<transition-slide group   :offset="['-100%', 0]" class="grid size-full mt-5">


<div v-if="emailChecked">
  <div
  class="z-0  w-full gap-4 px-1 grid dst">
        <div  class="w-fit h-5 items-center flex gap-0.5">
          <label class="btn-ghost btn  -ml-2 btn-square">
          <icon name="arrow-left" class="shrink-0" />
          <input type="checkbox" v-model="emailChecked"  class="peer hidden" />
        </label>
          <h3>Email
          </h3>
          </div>
          <p >
          Log in with email address.
        </p>

          </div>
<div class="px-1 py-2">
<Email  />
</div>
</div>

<div v-else>
  <div
        class="z-0 my-2 w-full gap-3 px-1 grid dst">

        <h3>Sign in / up</h3>


        <p >
          Choose a in method to get started.
        </p>

      </div>
   <div
    class="grid grid-cols-4 mb-3 mt-5 gap-2">
    <component  v-for="provider in providers" :key="provider.name" :is="provider.component">

<input v-if="provider.name = 'Email'" type="checkbox" v-model="emailChecked"  class="peer hidden" />
    </component>
</div>
</div>

      </transition-slide>

</template>

<style scoped></style>
