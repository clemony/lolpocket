<script setup lang="ts">
const riotDisclaimer
  = 'Lolpocket isn\'t endorsed by Riot Games and doesn\'t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.'

const classes = 'text-balanced pl-3 text-2 leading-6'
</script>

<template>
  <li :class="classes">
    &bull;&ensp;Names that are falsely indicative of an association with
    <strong
      v-tippy="{
        content: h(
          'p',
          { class: 'text-pretty !w-54 !max-w-54' },
          riotDisclaimer,
        ),
        theme: 'neutral',
        placement: 'right',
        offset: [0, 24],
      }"
      class="
        cursor-help font-medium text-bc underline decoration-dotted opacity-60
        hover:decoration-solid hover:opacity-100
      ">Riot Games</strong>
    or <strong class="font-medium">lolpocket</strong>.
  </li>
  <li :class="classes">
    &bull;&ensp;Contain personally identifying information.
  </li>
  <li :class="classes">
    &bull;&ensp;Are offensive, defamatory, vulgar, obscene, sexually explicit,
    racially, ethnically, or otherwise objectionable.
  </li>
</template>
