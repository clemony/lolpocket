<script lang="ts" setup>

</script>

<template>
  <div class=" gap-6 pb-8 pb-4 grid grid-cols-2">
    <label
      v-for="provider in providers"
      :key="provider.name"
      class=""
      :class="cn('!border-b3 rounded-xl flex !gap-5 items-center justify-start !bg-linear-to-br !px-5 !py-2  btn !bg-b1 w-full h-26', provider.class)">

      <div class="grid h-full justify-start items-center ">
        <icon
          :name="provider.icon.name"
          :class="cn('size-7.5 dst', provider.icon.class)" />

        <Switch
          :model-value="provider.model"
          class="switch  data-[state=checked]:ring  data-[state=checked]:ring-white/60 scale-90 -mt-0.25 dst" />
      </div>

      <div class="grid items-center py-1 justify-start h-full">

        <h4 class="tracking-tight text-start dst ">
          {{ provider.name }}
        </h4>

        <p class="text-start truncate">
          {{ provider.id ?? provider.model ? 'Connected' : 'Not Connected' }}
        </p>
      </div>
    </label>
  </div>
</template>