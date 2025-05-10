<script lang="ts" setup>

</script>

<template>
<tippy
    arrow
    interactive
    theme="field"
:delay="300"
  :follow-cursor="false"
    :hide-on-click="false"
>
  <template #default="{ state }">
    <div>
      <h1>Tippy!</h1>
      <slot  name="trigger" />
    </div>
  </template>

  <template #content="{ hide }">
    <div class="min-w-110 min-h-100">
      hihi
      hi
    Hi! <button @click="hide()">X</button>
    </div>
  </template>
</tippy>
</template>