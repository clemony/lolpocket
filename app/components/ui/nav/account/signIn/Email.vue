<script setup lang="ts">

const username = ref(null)
const password = ref(null)

const passwordError = computed (() => {

})
</script>

<template>
  <div class="grid gap-4 mt-4">

    <form  class="relative items-center">

      <Label for="email" >Email</Label>

      <input id="email" type="email" required class="input mt-1 validator  inset-shadow-xxs shadow-xs pr-12 h-12 w-full" v-model="username"/>

<div v-tippy="{content: 'Please provide a valid email', placement: 'top-end', arrow: true, offset: [20,10]}" class="validator-hint cursor-help absolute right-4 top-8.5">
  <icon name="tdesign:error-circle" class="justify-self-end  text-domination dst"/>
</div>

</form>

<form  class="relative items-center">
      <Label for="password">Password</Label>

      <input id="password"  type="password" required  class="input mt-1 validator  inset-shadow-xxs shadow-xs pr-12 h-12 w-full" v-model="password"/>

      <div v-tippy="'Please provide a valid email'" class="validator-hint absolute right-4 top-8.5">
        <icon name="tdesign:error-circle" class="justify-self-end  text-domination dst"/>
</div>
</form>
    </div>


    <div class="w-full flex gap-4  justify-end items-center mt-8 mb-3">
    <a href="" class="text-2 mt-2 underline-offset-2 hover:underline  ">
      Forgot Password?
    </a>
<button class="btn btn-neutral">
  Sign in / up

</button>

  </div>
</template>

<style scoped></style>
