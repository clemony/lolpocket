<script lang="ts" setup>
const as = useAccountStore()
const ts = useTempStore()
function handleClick(mode) {
  if (mode == 'out') {
    signOut()
  }
  else if (mode == 'in') {
    ts.loginOpen == true
  }
}


</script>

<template>
  <transition-slide class=" flex  items-center gap-3 w-full absolute bottom-0 left-0 p-4 pointer-events-auto flex flex-nowrap" group>
    <button v-if="as.userAccount.session" v-tippy="'Sign out'" class="btn btn-neutral flex btn-square btn-lg rounded-md  cursor-pointer " @click="handleClick('out')">
      <icon name="teenyicons:upload-outline" class="!text-nc size-5 rotate-90" />
    </button>

    <LoginDialog v-else v-tippy="'Sign in'">
      <button class="btn rounded-lg  btn-square btn-neutral  cursor-pointer  flex btn-md   ">
        <icon name="teenyicons:signin-outline" class=" !text-nc size-5 " />
      </button>
    </LoginDialog>



  </transition-slide>
</template>

<style scoped>

</style>