<script setup lang="ts">
const emailChecked = ref(false)
</script>

<template>
  <transition-slide
    group
    :offset="['-100%', 0]"
    class="grid size-full mt-5 w-110 px-5 pt-4 pb-2">
    <div v-if="emailChecked">
      <div
        class="z-0  w-full gap-4 px-1 grid dst">
        <div class="w-fit h-5 items-center flex gap-0.5">
          <label class="btn-ghost btn  -ml-2 btn-square">
            <icon
              name="arrow-left"
              class="shrink-0" />

            <input
              v-model="emailChecked"
              type="checkbox"
              class="peer hidden" />
          </label>

          <h3>
            Email
          </h3>
        </div>

        <p>
          Log in with email address.
        </p>
      </div>

      <div class="px-1 py-2">
        <Email />
      </div>
    </div>

    <div v-else>
      <div
        class="z-0 my-2 w-full gap-3 px-1 grid dst">
        <h3>Sign in / up</h3>

        <p>
          Choose a in method to get started.
        </p>
      </div>

      <div
        class="grid grid-cols-4 mb-5 mt-6 gap-2">
      </div>
    </div>
  </transition-slide>
</template>

<style scoped></style>
