<script setup lang="ts">
import { riotDisclaimer } from '~~/shared/appdata'

const classes = 'text-2  text-balanced pl-3 leading-6 '
</script>

<template>
  <li :class="classes">
    &bull;&ensp;Names that are falsely indicative of an association with <strong
      v-tippy="{ content: h('p', { class: 'text-pretty !w-54 !max-w-54' }, riotDisclaimer), theme: 'neutral', placement: 'right', offset: [0, 24] }"
      class="text-bc font-medium underline decoration-dotted opacity-60 hover:decoration-solid  hover:opacity-100">Riot Games</strong> or <strong class="font-medium">lolpocket</strong>.
  </li>
  <li :class="classes">
    &bull;&ensp;Contain personally identifying information.
  </li>
  <li :class="classes">
    &bull;&ensp;Are offensive, defamatory, vulgar, obscene, sexually explicit, racially, ethnically, or otherwise objectionable.
  </li>
</template>