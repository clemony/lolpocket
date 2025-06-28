<script setup lang="ts"></script>

<template>
  <div class="grid gap-4 mt-4">

    <div class="grid gap-1 w-full">
      <Label for="username">Username</Label>

      <input id="username" class="input  inset-shadow-xxs shadow-xs  h-12 w-full" />
    </div>

    <div class="grid gap-1 w-full">
      <Label for="password">Password</Label>

      <input id="password" class="input  inset-shadow-xxs shadow-xs  h-12 w-full" />
    </div>

    <div class="w-full flex gap-4  justify-end items-center mt-5 mb-3">
    <a href="" class="text-2 mt-2 underline-offset-2 hover:underline  ">
      Forgot Password?
    </a>
<button class="btn btn-neutral ">
  Sign in / up
</button>
  </div>
  </div>
</template>

<style scoped></style>
