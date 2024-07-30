<script setup>

</script>

<template>

     <img :src="champions[index].img" :alt="champions[index].name + ' Image'" />
     <h2 class="championName">{{ champions[index].name }}</h2>
     <span class="championTitle">{{ champions[index].title }}</span>
     <span class="championWiki">
          <a :href="champions[index].wiki" target="_blank" rel="noopener noreferrer">More Info</a>
     </span>
     <span class="championTags">Tags: {{ champions[index].tags.join(", ") }}</span>


</template>
